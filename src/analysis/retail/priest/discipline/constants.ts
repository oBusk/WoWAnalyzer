import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/priest';
import { SpellFilter } from 'parser/core/EventFilter';
import { TALENTS_PRIEST } from 'common/TALENTS';
export const DISCIPLINE_ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.ATONEMENT_HEAL_NON_CRIT.id,
  SPELLS.ATONEMENT_HEAL_CRIT.id,
  SPELLS.POWER_WORD_SHIELD.id,
  TALENTS_PRIEST.POWER_WORD_RADIANCE_TALENT.id,
  TALENTS_PRIEST.HALO_SHARED_TALENT.id,
  TALENTS_PRIEST.DIVINE_STAR_SHARED_TALENT.id,
  TALENTS_PRIEST.HOLY_NOVA_TALENT.id,
  TALENTS_PRIEST.PRAYER_OF_MENDING_TALENT.id,
  SPELLS.PENANCE_HEAL.id,
  TALENTS_PRIEST.RENEW_TALENT.id,
  TALENTS_PRIEST.SHADOW_COVENANT_TALENT.id,
  TALENTS_PRIEST.POWER_WORD_LIFE_TALENT.id,
  // While the following spells don't double dip in healing increases, they gain the same percentual bonus from the transfer
  SPELLS.LEECH.id,
];

export const ATONEMENT_DAMAGE_SOURCES = {
  [SPELLS.MAGIC_MELEE.id]: true, // Shadow Fiend Melee
  [SPELLS.LIGHTSPAWN_MELEE.id]: true, // Lightspawn Melee
  [SPELLS.SMITE.id]: true,
  [SPELLS.PENANCE.id]: true,
  [SPELLS.HALO_DAMAGE.id]: true,
  [SPELLS.SHADOW_WORD_PAIN.id]: true,
  [TALENTS_PRIEST.SHADOWFIEND_TALENT.id]: true,
  [TALENTS_PRIEST.PURGE_THE_WICKED_TALENT.id]: true,
  [SPELLS.PURGE_THE_WICKED_BUFF.id]: true,
  [TALENTS_PRIEST.POWER_WORD_SOLACE_TALENT.id]: true,
  [TALENTS_PRIEST.SCHISM_TALENT.id]: true,
  [SPELLS.DIVINE_STAR_DAMAGE.id]: true,
  [TALENTS.HOLY_NOVA_TALENT.id]: true,
  [SPELLS.MIND_SEAR.id]: true,
  [SPELLS.MIND_BLAST.id]: true,
  [TALENTS_PRIEST.MINDGAMES_TALENT.id]: true,
  [SPELLS.EXPIATION_DAMAGE.id]: true,
  [SPELLS.MINDGAMES_HEAL_REVERSAL.id]: true,
  [TALENTS_PRIEST.SHADOW_WORD_DEATH_TALENT.id]: true,
  [TALENTS_PRIEST.LIGHTS_WRATH_TALENT.id]: true,
  [TALENTS_PRIEST.INESCAPABLE_TORMENT_TALENT.id]: true,
};

export const ATONEMENT_DAMAGE_IDS = [
  SPELLS.MAGIC_MELEE.id,
  SPELLS.LIGHTSPAWN_MELEE.id,
  SPELLS.SMITE.id,
  SPELLS.PENANCE.id,
  SPELLS.HALO_DAMAGE.id,
  SPELLS.SHADOW_WORD_PAIN.id,
  TALENTS_PRIEST.SHADOWFIEND_TALENT.id,
  TALENTS_PRIEST.PURGE_THE_WICKED_TALENT.id,
  SPELLS.PURGE_THE_WICKED_BUFF.id,
  TALENTS_PRIEST.POWER_WORD_SOLACE_TALENT.id,
  TALENTS_PRIEST.SCHISM_TALENT.id,
  SPELLS.DIVINE_STAR_DAMAGE.id,
  TALENTS.HOLY_NOVA_TALENT.id,
  SPELLS.MIND_SEAR.id,
  SPELLS.MIND_BLAST.id,
  TALENTS_PRIEST.MINDGAMES_TALENT.id,
  SPELLS.EXPIATION_DAMAGE.id,
  SPELLS.MINDGAMES_HEAL_REVERSAL.id,
  TALENTS_PRIEST.SHADOW_WORD_DEATH_TALENT.id,
  TALENTS_PRIEST.LIGHTS_WRATH_TALENT.id,
  TALENTS_PRIEST.INESCAPABLE_TORMENT_TALENT.id,
];

export const ATONEMENT_SOURCE_FILTER: SpellFilter = [
  SPELLS.MAGIC_MELEE,
  SPELLS.LIGHTSPAWN_MELEE,
  SPELLS.SMITE,
  SPELLS.PENANCE,
  SPELLS.HALO_DAMAGE,
  SPELLS.SHADOW_WORD_PAIN,
  SPELLS.PURGE_THE_WICKED_TALENT,
  SPELLS.PURGE_THE_WICKED_BUFF,
  TALENTS_PRIEST.POWER_WORD_SOLACE_TALENT,
  TALENTS_PRIEST.SCHISM_TALENT,
  SPELLS.DIVINE_STAR_DAMAGE,
  TALENTS.HOLY_NOVA_TALENT,
  SPELLS.MIND_SEAR,
  SPELLS.MIND_BLAST,
  TALENTS_PRIEST.MINDGAMES_TALENT,
  SPELLS.MINDGAMES_HEAL_REVERSAL,
  SPELLS.ASCENDED_BLAST,
  SPELLS.ASCENDED_NOVA,
  SPELLS.ASCENDED_ERUPTION,
];

// Spells which are consumed by the holy buff of Twilight Equilibrium
export const HOLY_DAMAGE_SPELLS = [
  SPELLS.SMITE.id,
  SPELLS.PENANCE.id,
  SPELLS.HALO_DAMAGE.id,
  TALENTS_PRIEST.PURGE_THE_WICKED_TALENT.id,
  TALENTS_PRIEST.POWER_WORD_SOLACE_TALENT.id,
  SPELLS.DIVINE_STAR_DAMAGE.id,
  TALENTS_PRIEST.HOLY_NOVA_TALENT.id,
  TALENTS_PRIEST.LIGHTS_WRATH_TALENT.id,
];
// Spells which are consumed by the shadow buff of Twilight Equilibrium
export const SHADOW_DAMAGE_SPELLS = [
  SPELLS.SHADOW_WORD_PAIN.id,
  SPELLS.MIND_BLAST.id,
  TALENTS_PRIEST.MINDGAMES_TALENT.id,
  TALENTS_PRIEST.SHADOW_WORD_DEATH_TALENT.id,
  TALENTS_PRIEST.SCHISM_TALENT.id,
];

export const ATONEMENT_APPLICATORS = [
  TALENTS_PRIEST.RENEW_TALENT.id,
  SPELLS.FLASH_HEAL.id,
  TALENTS_PRIEST.POWER_WORD_RADIANCE_TALENT.id,
  SPELLS.POWER_WORD_SHIELD.id,
];

export const SPIRIT_SHELL_COEFFICIENT = 0.8;
export const ATONEMENT_COEFFICIENT = 0.5;
export const DISCIPLINE_DAMAGE_AURA_VALUE = 0.94;

export const PENANCE_COEFFICIENCT = 0.4;
export const SMITE_COEFFICIENT = 0.47;

export const POWER_WORD_SHIELD_ATONEMENT_DUR = 15000;
export const POWER_WORD_RADIANCE_ATONEMENT_DUR = 9000;
export const RENEW_ATONEMENT_DUR = 15000;
export const FLASH_HEAL_ATONEMENT_DUR = 15000;
export const PAIN_AND_SUFFERING_INCREASE = [0.08, 0.15];
export const THROES_OF_PAIN_INCREASE = [0.03, 0.05];
export const BLAZE_OF_LIGHT_INCREASE = [0.08, 0.15];
