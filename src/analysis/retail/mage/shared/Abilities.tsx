import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/mage';
import CoreAbilities from 'parser/core/modules/Abilities';
import { SpellbookAbility } from 'parser/core/modules/Ability';
import SPELL_CATEGORY from 'parser/core/SPELL_CATEGORY';

class Abilities extends CoreAbilities {
  spellbook(): SpellbookAbility[] {
    const combatant = this.selectedCombatant;
    return [
      // Rotational spells
      {
        spell: SPELLS.FROSTBOLT.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        timelineSortIndex: 1,
        damageSpellIds: [SPELLS.FROSTBOLT_DAMAGE.id],
      },
      {
        spell: SPELLS.FIRE_BLAST.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: {
          base: 1500,
        },
        cooldown: (haste: any) => 12 / (1 + haste),
      },
      {
        spell: SPELLS.ARCANE_EXPLOSION.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.CONE_OF_COLD.id,
        category: SPELL_CATEGORY.ROTATIONAL_AOE,
        gcd: {
          base: 1500,
        },
        cooldown: 12,
        timelineSortIndex: 8,
        //damageSpellIds: [SPELLS.CONE_OF_COLD.id], // needs verification
      },
      {
        spell: TALENTS.DRAGONS_BREATH_TALENT.id,
        category: SPELL_CATEGORY.ROTATIONAL_AOE,
        enabled: combatant.hasTalent(TALENTS.DRAGONS_BREATH_TALENT),
        gcd: {
          base: 1500,
        },
        cooldown: 18,
      },
      {
        spell: TALENTS.BLAST_WAVE_TALENT.id,
        category: SPELL_CATEGORY.ROTATIONAL_AOE,
        enabled: combatant.hasTalent(TALENTS.BLAST_WAVE_TALENT.id),
        gcd: {
          base: 1500,
        },
        cooldown: 25,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
      },
      {
        spell: TALENTS.METEOR_TALENT.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        enabled: combatant.hasTalent(TALENTS.METEOR_TALENT.id),
        gcd: {
          base: 1500,
        },
        cooldown: 45,
        castEfficiency: {
          suggestion: false,
        },
        damageSpellIds: [SPELLS.METEOR_DAMAGE.id],
      },
      {
        spell: TALENTS.ICE_NOVA_TALENT.id,
        category: SPELL_CATEGORY.ROTATIONAL,
        enabled: combatant.hasTalent(TALENTS.ICE_NOVA_TALENT.id),
        gcd: {
          base: 1500,
        },
        cooldown: 25,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
        timelineSortIndex: 9,
        //damageSpellIds: [SPELLS.ICE_NOVA_TALENT.id], // needs verification
      },

      // Cooldowns
      {
        spell: TALENTS.RUNE_OF_POWER_TALENT.id,
        buffSpellId: SPELLS.RUNE_OF_POWER_BUFF.id,
        category: SPELL_CATEGORY.COOLDOWNS,
        enabled: combatant.hasTalent(TALENTS.RUNE_OF_POWER_TALENT.id),
        gcd: {
          base: 1500,
        },
        cooldown: 45,
        castEfficiency: {
          suggestion: true,
          recommendedEfficiency: 0.9,
        },
        timelineSortIndex: 16, // Shares talent row with Mirror Image
      },
      {
        spell: SPELLS.TIME_WARP.id,
        buffSpellId: SPELLS.TIME_WARP.id,
        category: SPELL_CATEGORY.COOLDOWNS,
        gcd: null,
        cooldown: 300,
        timelineSortIndex: 18,
      },
      {
        spell: TALENTS.SHIFTING_POWER_TALENT.id,
        category: SPELL_CATEGORY.COOLDOWNS,
        enabled: combatant.hasTalent(TALENTS.SHIFTING_POWER_TALENT),
        gcd: {
          base: 1500,
        },
        cooldown: 60,
      },

      //Defensives
      {
        spell: TALENTS.ICE_BARRIER_TALENT.id,
        buffSpellId: TALENTS.ICE_BARRIER_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        enabled: combatant.hasTalent(TALENTS.ICE_BARRIER_TALENT),
        cooldown:
          combatant.hasTalent(TALENTS.ACCUMULATIVE_SHIELDING_TALENT) &&
          combatant.hasBuff(TALENTS.ICE_BARRIER_TALENT.id)
            ? 25 / (1 + combatant.getTalentRank(TALENTS.ACCUMULATIVE_SHIELDING_TALENT) * 0.1)
            : 25,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.BLAZING_BARRIER_TALENT.id,
        buffSpellId: TALENTS.BLAZING_BARRIER_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        enabled: combatant.hasTalent(TALENTS.BLAZING_BARRIER_TALENT),
        cooldown:
          combatant.hasTalent(TALENTS.ACCUMULATIVE_SHIELDING_TALENT) &&
          combatant.hasBuff(TALENTS.BLAZING_BARRIER_TALENT.id)
            ? 25 / (1 + combatant.getTalentRank(TALENTS.ACCUMULATIVE_SHIELDING_TALENT) * 0.1)
            : 25,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.PRISMATIC_BARRIER_TALENT.id,
        buffSpellId: TALENTS.PRISMATIC_BARRIER_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        enabled: combatant.hasTalent(TALENTS.PRISMATIC_BARRIER_TALENT),
        cooldown:
          combatant.hasTalent(TALENTS.ACCUMULATIVE_SHIELDING_TALENT) &&
          combatant.hasBuff(TALENTS.PRISMATIC_BARRIER_TALENT.id)
            ? 25 / (1 + combatant.getTalentRank(TALENTS.ACCUMULATIVE_SHIELDING_TALENT) * 0.1)
            : 25,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.ICE_BLOCK_TALENT.id,
        buffSpellId: TALENTS.ICE_BLOCK_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        enabled: combatant.hasTalent(TALENTS.ICE_BLOCK_TALENT),
        cooldown: 240 - combatant.getTalentRank(TALENTS.WINTERS_PROTECTION_TALENT) * 20,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.MIRROR_IMAGE_TALENT.id,
        category: SPELL_CATEGORY.DEFENSIVE,
        enabled: combatant.hasTalent(TALENTS.MIRROR_IMAGE_TALENT),
        cooldown: 120,
        gcd: {
          base: 1500,
        },
      },

      //Utility
      {
        spell: SPELLS.ARCANE_INTELLECT.id,
        category: SPELL_CATEGORY.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.FROST_NOVA.id,
        category: SPELL_CATEGORY.UTILITY,
        cooldown: 30,
        charges: 1 + combatant.getTalentRank(TALENTS.ICE_WARD_TALENT),
      },
      {
        spell: TALENTS.RING_OF_FROST_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.RING_OF_FROST_TALENT),
        cooldown: 45,
      },
      {
        spell: SPELLS.BLINK.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: !combatant.hasTalent(TALENTS.SHIMMER_TALENT.id),
        cooldown: 15 - combatant.getTalentRank(TALENTS.FLOW_OF_TIME_TALENT),
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.DISPLACEMENT_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.DISPLACEMENT_TALENT.id),
        cooldown: 45,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.SHIMMER_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.SHIMMER_TALENT.id),
        cooldown: 25 - combatant.getTalentRank(TALENTS.FLOW_OF_TIME_TALENT),
        charges: 2,
        gcd: null,
      },
      {
        spell: TALENTS.ICE_FLOES_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.ICE_FLOES_TALENT.id),
        cooldown: 20,
        charges: 3,
        gcd: null,
      },
      {
        spell: SPELLS.COUNTERSPELL.id,
        category: SPELL_CATEGORY.UTILITY,
        cooldown: 24,
        gcd: null,
      },
      {
        spell: TALENTS.REMOVE_CURSE_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.REMOVE_CURSE_TALENT),
        cooldown: 8,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: SPELLS.SLOW_FALL.id,
        buffSpellId: SPELLS.SLOW_FALL.id,
        category: SPELL_CATEGORY.UTILITY,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.SLOW_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.SLOW_TALENT),
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.SPELLSTEAL_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.SPELLSTEAL_TALENT),
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.ALTER_TIME_TALENT.id,
        buffSpellId: SPELLS.ALTER_TIME_BUFF.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.ALTER_TIME_TALENT),
        cooldown: 60 - combatant.getTalentRank(TALENTS.ALTER_TIME_TALENT) * 10,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.INVISIBILITY_TALENT.id,
        buffSpellId: SPELLS.INVISIBILITY_BUFF.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.INVISIBILITY_TALENT),
        gcd: {
          base: 1500,
        },
        cooldown: 300,
      },
      {
        spell: TALENTS.GREATER_INVISIBILITY_TALENT.id,
        buffSpellId: SPELLS.GREATER_INVISIBILITY_BUFF.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.GREATER_INVISIBILITY_TALENT),
        cooldown: 120,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: TALENTS.MASS_POLYMORPH_TALENT.id,
        category: SPELL_CATEGORY.UTILITY,
        enabled: combatant.hasTalent(TALENTS.MASS_POLYMORPH_TALENT),
        cooldown: 60,
        gcd: {
          base: 1500,
        },
      },
      {
        spell: [
          SPELLS.POLYMORPH_SHEEP.id,
          SPELLS.POLYMORPH_PIG.id,
          SPELLS.POLYMORPH_BLACK_CAT.id,
          SPELLS.POLYMORPH_MONKEY.id,
          SPELLS.POLYMORPH_RABBIT.id,
          SPELLS.POLYMORPH_POLAR_BEAR_CUB.id,
          SPELLS.POLYMORPH_PORCUPINE.id,
          SPELLS.POLYMORPH_TURTLE.id,
          SPELLS.POLYMORPH_TURKEY.id,
          SPELLS.POLYMORPH_PENGUIN.id,
          SPELLS.POLYMORPH_BUMBLEBEE.id,
          SPELLS.POLYMORPH_PEACOCK.id,
          SPELLS.POLYMORPH_DIREHORN.id,
          SPELLS.POLYMORPH_MAWRAT.id,
          SPELLS.POLYMORPH_DUCK.id,
        ],
        category: SPELL_CATEGORY.UTILITY,
        gcd: {
          base: 1500,
        },
      },
    ];
  }
}

export default Abilities;
export { Abilities as MAGE_SHARED_ABILITIES };
