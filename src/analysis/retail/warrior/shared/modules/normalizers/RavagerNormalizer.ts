import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/warrior';
import MAGIC_SCHOOLS from 'game/MAGIC_SCHOOLS';
import RESOURCE_TYPES from 'game/RESOURCE_TYPES';
import { AnyEvent, ApplyBuffEvent, EventType, RemoveBuffEvent } from 'parser/core/Events';
import EventsNormalizer from 'parser/core/EventsNormalizer';

const DURATION = 12 * 1000;

/**
 * Creates ApplyBuff and RemoveBuff events for Ravager, to make it easier for later modules to handle.
 */
export default class RavagerNormalizer extends EventsNormalizer {
  normalize(events: AnyEvent[]): AnyEvent[] {
    this.active = this.selectedCombatant.hasTalent(TALENTS.RAVAGER_TALENT);

    if (!this.active) {
      return events;
    }

    const modifiedEvents: AnyEvent[] = [];

    let applyBuffEvent: ApplyBuffEvent | null = null;
    for (const event of events) {
      if (
        event.type === EventType.Cast &&
        event.sourceID === this.selectedCombatant.id &&
        event.ability.guid === TALENTS.RAVAGER_TALENT.id
      ) {
        applyBuffEvent = {
          __fabricated: true,
          type: EventType.ApplyBuff,
          timestamp: event.timestamp,
          sourceID: this.selectedCombatant.id,
          sourceIsFriendly: true,
          targetID: this.selectedCombatant.id,
          targetIsFriendly: true,
          ability: {
            abilityIcon: TALENTS.RAVAGER_TALENT.icon,
            guid: TALENTS.RAVAGER_TALENT.id,
            name: TALENTS.RAVAGER_TALENT.name,
            type: MAGIC_SCHOOLS.ids.PHYSICAL,
          },
        };

        modifiedEvents.push(applyBuffEvent);
      }

      if (applyBuffEvent != null && event.timestamp > applyBuffEvent?.timestamp + DURATION) {
        const removeBuffEvent: RemoveBuffEvent = {
          __fabricated: true,
          type: EventType.RemoveBuff,
          timestamp: applyBuffEvent.timestamp + DURATION,
          sourceID: this.selectedCombatant.id,
          sourceIsFriendly: true,
          targetID: this.selectedCombatant.id,
          targetIsFriendly: true,
          ability: applyBuffEvent.ability,
        };

        modifiedEvents.push(removeBuffEvent);

        applyBuffEvent = null;
      }

      // As a debug step, we check if there is ravager damage happening, and if so, is the "buff" up?
      if (event.type === EventType.Damage && event.ability.guid === SPELLS.RAVAGER_DAMAGE.id) {
        if (applyBuffEvent == null) {
          console.warn(
            'Ravager damage event without the Ravager buff being active. This is likely a bug in the normalizer.',
            event,
          );
        } else {
          console.log(
            `Ravager damage event (${applyBuffEvent.timestamp + DURATION - event.timestamp}ms left)`,
            event,
          );
        }
      }
      if (
        event.type === EventType.ResourceChange &&
        event.resourceChangeType === RESOURCE_TYPES.RAGE.id &&
        event.targetID === this.selectedCombatant.id &&
        event.ability.guid === SPELLS.RAVAGER_ENERGIZE.id
      ) {
        if (applyBuffEvent == null) {
          console.warn(
            'Ravager rage event without the Ravager buff being active. This is likely a bug in the normalizer.',
            event,
          );
        } else {
          console.log(
            `Ravager rage event (${applyBuffEvent.timestamp + DURATION - event.timestamp}ms left)`,
            event,
          );
        }
      }

      // Always push the current event
      modifiedEvents.push(event);
    }

    return modifiedEvents;
  }
}
