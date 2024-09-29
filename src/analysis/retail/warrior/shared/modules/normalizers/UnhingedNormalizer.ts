import SPELLS from 'common/SPELLS/warrior';
import TALENTS from 'common/TALENTS/warrior';
import { AnyEvent, EventType } from 'parser/core/Events';
import EventsNormalizer from 'parser/core/EventsNormalizer';
import getRage from '../../utils/getRage';
import { formatDurationMillisMinSec } from 'common/format';

export default class UnhingedNormalizer extends EventsNormalizer {
  normalize(events: AnyEvent[]): AnyEvent[] {
    this.active = this.selectedCombatant.hasTalent(TALENTS.UNHINGED_TALENT);

    if (!this.active) {
      return events;
    }

    // let isBladestorming = false;

    return events.filter((event) => {


      // if (
      //   event.type === EventType.ApplyBuff &&
      //   event.targetID === this.selectedCombatant.id &&
      //   event.ability.guid === SPELLS.BLADESTORM.id
      // ) {
      //   isBladestorming = true;
      // } else if (
      //   event.type === EventType.RemoveBuff &&
      //   event.targetID === this.selectedCombatant.id &&
      //   event.ability.guid === SPELLS.BLADESTORM.id
      // ) {
      //   isBladestorming = false;
      // }

      // if (event.type === EventType.Cast && event.sourceID === this.selectedCombatant.id) {
      //   if (event.ability.guid === SPELLS.MORTAL_STRIKE.id) {
      //     const cost = getRage(event, this.selectedCombatant)?.cost ?? 0;

      //     // TODO Also check ravager
      //     if (isBladestorming) {
      //       // Let's also check that the cost was 0, otherwise something is afoot

      //       if (cost > 0) {
      //         console.warn('[UnhingedNormalizer] Mortal Strike had a cost during Unhinged', event);
      //       }

      //       return false;
      //     } else {
      //       if (cost <= 0) {
      //         console.warn(
      //           '[UnhingedNormalizer] Mortal Strike had no cost outside of Unhinged',
      //           event,
      //         );
      //       }

      //       return true;
      //     }
      //   } else if (
      //     event.ability.guid === SPELLS.BLOODTHIRST.id ||
      //     event.ability.guid === SPELLS.BLOODBATH.id
      //   ) {
      //     // TODO Also check ravager
      //     if (isBladestorming) {
      //       console.log(
      //         `[UnhingedNormalizer] ${formatDurationMillisMinSec(event.timestamp - this.owner.fight.start_time, 2)} Bloodthirst/Bloodbath during Bladestorm`,
      //         structuredClone(event),
      //       );
      //       return false;
      //     } else {
      //       console.warn(
      //         `[UnhingedNormalizer] ${formatDurationMillisMinSec(event.timestamp - this.owner.fight.start_time, 2)} Bloodthirst/Bloodbath outside of Bladestorm`,
      //         structuredClone(event),
      //       );
      //       return true;
      //     }
      //   }
      }

      return true;
    });
  }
}
