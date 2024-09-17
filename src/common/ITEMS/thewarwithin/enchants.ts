import { Enchant } from 'common/ITEMS/Item';

// For effectIds, see https://github.com/simulationcraft/simc/blob/431b448e64a6db85ec9befdf76484e50423bd3ad/engine/dbc/generated/permanent_enchant.inc

const enchants = {
  // #region Chest
  COUNCILS_INTELLECT_R1: {
    id: 223684,
    name: "Enchant Chest - Council's Intellect",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7356,
  },
  COUNCILS_INTELLECT_R2: {
    id: 223685,
    name: "Enchant Chest - Council's Intellect",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7357,
  },
  COUNCILS_INTELLECT_R3: {
    id: 223686,
    name: "Enchant Chest - Council's Intellect",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7358,
  },
  OATHSWORNS_STRENGTH_R1: {
    id: 223687,
    name: "Enchant Chest - Oathsworn's Strength",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7359,
  },
  OATHSWORNS_STRENGTH_R2: {
    id: 223688,
    name: "Enchant Chest - Oathsworn's Strength",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7360,
  },
  OATHSWORNS_STRENGTH_R3: {
    id: 223689,
    name: "Enchant Chest - Oathsworn's Strength",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7361,
  },
  STORMRIDERS_AGILITY_R1: {
    id: 223681,
    name: "Enchant Chest - Stormrider's Agility",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7353,
  },
  STORMRIDERS_AGILITY_R2: {
    id: 223682,
    name: "Enchant Chest - Stormrider's Agility",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7354,
  },
  STORMRIDERS_AGILITY_R3: {
    id: 223683,
    name: "Enchant Chest - Stormrider's Agility",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7355,
  },
  CRYSTALLINE_RADIANCE_R1: {
    id: 223690,
    name: 'Enchant Chest - Crystalline Radiance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7362,
  },
  CRYSTALLINE_RADIANCE_R2: {
    id: 223691,
    name: 'Enchant Chest - Crystalline Radiance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7363,
  },
  CRYSTALLINE_RADIANCE_R3: {
    id: 223692,
    name: 'Enchant Chest - Crystalline Radiance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7364,
  },
  // #endregion

  // #region Legs
  DUAL_LAYERED_ARMOR_KIT_R1: {
    id: 219912,
    name: 'Dual Layered Armor Kit',
    icon: 'inv_armorkit_standard',
    effectId: 7596,
  },
  DUAL_LAYERED_ARMOR_KIT_R2: {
    id: 219913,
    name: 'Dual Layered Armor Kit',
    icon: 'inv_armorkit_standard',
    effectId: 7597,
  },
  DUAL_LAYERED_ARMOR_KIT_R3: {
    id: 219914,
    name: 'Dual Layered Armor Kit',
    icon: 'inv_armorkit_standard',
    effectId: 7598,
  },
  DEFENDERS_ARMOR_KIT_R1: {
    id: 219906,
    name: "Defender's Armor Kit",
    icon: 'inv_armorkit_arathi',
    effectId: 7593,
  },
  DEFENDERS_ARMOR_KIT_R2: {
    id: 219907,
    name: "Defender's Armor Kit",
    icon: 'inv_armorkit_arathi',
    effectId: 7594,
  },
  DEFENDERS_ARMOR_KIT_R3: {
    id: 219908,
    name: "Defender's Armor Kit",
    icon: 'inv_armorkit_arathi',
    effectId: 7595,
  },
  STORMBOUND_ARMOR_KIT_R1: {
    id: 219909,
    name: 'Stormbound Armor Kit',
    icon: 'inv_armorkit_lightning_imbued',
    effectId: 7599,
  },
  STORMBOUND_ARMOR_KIT_R2: {
    id: 219910,
    name: 'Stormbound Armor Kit',
    icon: 'inv_armorkit_lightning_imbued',
    effectId: 7600,
  },
  STORMBOUND_ARMOR_KIT_R3: {
    id: 219911,
    name: 'Stormbound Armor Kit',
    icon: 'inv_armorkit_lightning_imbued',
    effectId: 7601,
  },
  // #endregion

  // #region Boots
  CAVALRYS_MARCH_R1: {
    id: 223618,
    name: "Enchant Boots - Cavalry's March",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7419,
  },
  CAVALRYS_MARCH_R2: {
    id: 223649,
    name: "Enchant Boots - Cavalry's March",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7420,
  },
  CAVALRYS_MARCH_R3: {
    id: 223650,
    name: "Enchant Boots - Cavalry's March",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7421,
  },
  SCOUTS_MARCH_R1: {
    id: 223651,
    name: "Enchant Boots - Scout's March",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7416,
  },
  SCOUTS_MARCH_R2: {
    id: 223652,
    name: "Enchant Boots - Scout's March",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7417,
  },
  SCOUTS_MARCH_R3: {
    id: 223653,
    name: "Enchant Boots - Scout's March",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7418,
  },
  DEFENDERS_MARCH_R1: {
    id: 223654,
    name: "Enchant Boots - Defender's March",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7422,
  },
  DEFENDERS_MARCH_R2: {
    id: 223655,
    name: "Enchant Boots - Defender's March",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7423,
  },
  DEFENDERS_MARCH_R3: {
    id: 223656,
    name: "Enchant Boots - Defender's March",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7424,
  },
  // #endregion

  // #region Bracers
  WHISPER_OF_ARMORED_SPEED_R1: {
    id: 223721,
    name: 'Enchant Bracer - Whisper of Armored Speed',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7392,
  },
  WHISPER_OF_ARMORED_SPEED_R2: {
    id: 223722,
    name: 'Enchant Bracer - Whisper of Armored Speed',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7393,
  },
  WHISPER_OF_ARMORED_SPEED_R3: {
    id: 223720,
    name: 'Enchant Bracer - Whisper of Armored Speed',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7394,
  },
  WHISPER_OF_ARMORED_LEECH_R1: {
    id: 223714,
    name: 'Enchant Bracer - Whisper of Armored Leech',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7386,
  },
  WHISPER_OF_ARMORED_LEECH_R2: {
    id: 223715,
    name: 'Enchant Bracer - Whisper of Armored Leech',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7387,
  },
  WHISPER_OF_ARMORED_LEECH_R3: {
    id: 223716,
    name: 'Enchant Bracer - Whisper of Armored Leech',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7388,
  },
  WHISPER_OF_ARMORED_AVOIDANCE_R1: {
    id: 223708,
    name: 'Enchant Bracer - Whisper of Armored Avoidance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7380,
  },
  WHISPER_OF_ARMORED_AVOIDANCE_R2: {
    id: 223709,
    name: 'Enchant Bracer - Whisper of Armored Avoidance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7381,
  },
  WHISPER_OF_ARMORED_AVOIDANCE_R3: {
    id: 223710,
    name: 'Enchant Bracer - Whisper of Armored Avoidance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7382,
  },
  CHANT_OF_ARMORED_SPEED_R1: {
    id: 223723,
    name: 'Enchant Bracer - Chant of Armored Speed',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7395,
  },
  CHANT_OF_ARMORED_SPEED_R2: {
    id: 223724,
    name: 'Enchant Bracer - Chant of Armored Speed',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7396,
  },
  CHANT_OF_ARMORED_SPEED_R3: {
    id: 223725,
    name: 'Enchant Bracer - Chant of Armored Speed',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7397,
  },
  CHANT_OF_ARMORED_LEECH_R1: {
    id: 223717,
    name: 'Enchant Bracer - Chant of Armored Leech',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7389,
  },
  CHANT_OF_ARMORED_LEECH_R2: {
    id: 223718,
    name: 'Enchant Bracer - Chant of Armored Leech',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7390,
  },
  CHANT_OF_ARMORED_LEECH_R3: {
    id: 223719,
    name: 'Enchant Bracer - Chant of Armored Leech',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7391,
  },
  CHANT_OF_ARMORED_AVOIDANCE_R1: {
    id: 223711,
    name: 'Enchant Bracer - Chant of Armored Avoidance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7383,
  },
  CHANT_OF_ARMORED_AVOIDANCE_R2: {
    id: 223712,
    name: 'Enchant Bracer - Chant of Armored Avoidance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7384,
  },
  CHANT_OF_ARMORED_AVOIDANCE_R3: {
    id: 223713,
    name: 'Enchant Bracer - Chant of Armored Avoidance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7385,
  },
  // #endregion

  // #region Ring
  CURSED_CRITICAL_STRIKE_R1: {
    id: 223785,
    name: 'Enchant Ring - Cursed Critical Strike',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7468,
  },
  CURSED_CRITICAL_STRIKE_R2: {
    id: 223786,
    name: 'Enchant Ring - Cursed Critical Strike',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7469,
  },
  CURSED_CRITICAL_STRIKE_R3: {
    id: 223787,
    name: 'Enchant Ring - Cursed Critical Strike',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7470,
  },
  CURSED_HASTE_R1: {
    id: 223788,
    name: 'Enchant Ring - Cursed Haste',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7471,
  },
  CURSED_HASTE_R2: {
    id: 223789,
    name: 'Enchant Ring - Cursed Haste',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7472,
  },
  CURSED_HASTE_R3: {
    id: 223790,
    name: 'Enchant Ring - Cursed Haste',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7473,
  },
  CURSED_MASTERY_R1: {
    id: 223791,
    name: 'Enchant Ring - Cursed Mastery',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7477,
  },
  CURSED_MASTERY_R2: {
    id: 223792,
    name: 'Enchant Ring - Cursed Mastery',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7478,
  },
  CURSED_MASTERY_R3: {
    id: 223793,
    name: 'Enchant Ring - Cursed Mastery',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7479,
  },
  CURSED_VERSATILITY_R1: {
    id: 223794,
    name: 'Enchant Ring - Cursed Versatility',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7474,
  },
  CURSED_VERSATILITY_R2: {
    id: 223795,
    name: 'Enchant Ring - Cursed Versatility',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7475,
  },
  CURSED_VERSATILITY_R3: {
    id: 223796,
    name: 'Enchant Ring - Cursed Versatility',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7476,
  },
  GLIMMERING_CRITICAL_STRIKE_R1: {
    id: 223657,
    name: 'Enchant Ring - Glimmering Critical Strike',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7329,
  },
  GLIMMERING_CRITICAL_STRIKE_R2: {
    id: 223658,
    name: 'Enchant Ring - Glimmering Critical Strike',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7330,
  },
  GLIMMERING_CRITICAL_STRIKE_R3: {
    id: 223659,
    name: 'Enchant Ring - Glimmering Critical Strike',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7331,
  },
  GLIMMERING_HASTE_R1: {
    id: 223663,
    name: 'Enchant Ring - Glimmering Haste',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7335,
  },
  GLIMMERING_HASTE_R2: {
    id: 223664,
    name: 'Enchant Ring - Glimmering Haste',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7336,
  },
  GLIMMERING_HASTE_R3: {
    id: 223665,
    name: 'Enchant Ring - Glimmering Haste',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7337,
  },
  GLIMMERING_MASTERY_R1: {
    id: 223666,
    name: 'Enchant Ring - Glimmering Mastery',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7341,
  },
  GLIMMERING_MASTERY_R2: {
    id: 223667,
    name: 'Enchant Ring - Glimmering Mastery',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7342,
  },
  GLIMMERING_MASTERY_R3: {
    id: 223668,
    name: 'Enchant Ring - Glimmering Mastery',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7343,
  },
  GLIMMERING_VERSATILITY_R1: {
    id: 223669,
    name: 'Enchant Ring - Glimmering Versatility',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7347,
  },
  GLIMMERING_VERSATILITY_R2: {
    id: 223670,
    name: 'Enchant Ring - Glimmering Versatility',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7348,
  },
  GLIMMERING_VERSATILITY_R3: {
    id: 223671,
    name: 'Enchant Ring - Glimmering Versatility',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7349,
  },
  RADIANT_CRITICAL_STRIKE_R1: {
    id: 223660,
    name: 'Enchant Ring - Radiant Critical Strike',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7332,
  },
  RADIANT_CRITICAL_STRIKE_R2: {
    id: 223661,
    name: 'Enchant Ring - Radiant Critical Strike',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7333,
  },
  RADIANT_CRITICAL_STRIKE_R3: {
    id: 223662,
    name: 'Enchant Ring - Radiant Critical Strike',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7334,
  },
  RADIANT_HASTE_R1: {
    id: 223672,
    name: 'Enchant Ring - Radiant Haste',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7338,
  },
  RADIANT_HASTE_R2: {
    id: 223673,
    name: 'Enchant Ring - Radiant Haste',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7339,
  },
  RADIANT_HASTE_R3: {
    id: 223674,
    name: 'Enchant Ring - Radiant Haste',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7340,
  },
  RADIANT_MASTERY_R1: {
    id: 223675,
    name: 'Enchant Ring - Radiant Mastery',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7344,
  },
  RADIANT_MASTERY_R2: {
    id: 223676,
    name: 'Enchant Ring - Radiant Mastery',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7345,
  },
  RADIANT_MASTERY_R3: {
    id: 223677,
    name: 'Enchant Ring - Radiant Mastery',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7346,
  },
  RADIANT_VERSATILITY_R1: {
    id: 223678,
    name: 'Enchant Ring - Radiant Versatility',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7350,
  },
  RADIANT_VERSATILITY_R2: {
    id: 223679,
    name: 'Enchant Ring - Radiant Versatility',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7351,
  },
  RADIANT_VERSATILITY_R3: {
    id: 223680,
    name: 'Enchant Ring - Radiant Versatility',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7352,
  },
  // #endregion

  // #region Cloak
  CHANT_OF_BURROWING_RAPIDITY_R1: {
    id: 223798,
    name: 'Enchant Cloak - Chant of Burrowing Rapidity',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7413,
  },
  CHANT_OF_BURROWING_RAPIDITY_R2: {
    id: 223799,
    name: 'Enchant Cloak - Chant of Burrowing Rapidity',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7414,
  },
  CHANT_OF_BURROWING_RAPIDITY_R3: {
    id: 223800,
    name: 'Enchant Cloak - Chant of Burrowing Rapidity',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7415,
  },
  CHANT_OF_LEECHING_FANGS_R1: {
    id: 223735,
    name: 'Enchant Cloak - Chant of Leeching Fangs',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7407,
  },
  CHANT_OF_LEECHING_FANGS_R2: {
    id: 223736,
    name: 'Enchant Cloak - Chant of Leeching Fangs',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7408,
  },
  CHANT_OF_LEECHING_FANGS_R3: {
    id: 223737,
    name: 'Enchant Cloak - Chant of Leeching Fangs',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7409,
  },
  CHANT_OF_WINGED_GRACE_R1: {
    id: 223729,
    name: 'Enchant Cloak - Chant of Winged Grace',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7401,
  },
  CHANT_OF_WINGED_GRACE_R2: {
    id: 223730,
    name: 'Enchant Cloak - Chant of Winged Grace',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7402,
  },
  CHANT_OF_WINGED_GRACE_R3: {
    id: 223731,
    name: 'Enchant Cloak - Chant of Winged Grace',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7403,
  },
  WHISPER_OF_SILKEN_AVOIDANCE_R1: {
    id: 223726,
    name: 'Enchant Cloak - Whisper of Silken Avoidance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7398,
  },
  WHISPER_OF_SILKEN_AVOIDANCE_R2: {
    id: 223727,
    name: 'Enchant Cloak - Whisper of Silken Avoidance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7399,
  },
  WHISPER_OF_SILKEN_AVOIDANCE_R3: {
    id: 223728,
    name: 'Enchant Cloak - Whisper of Silken Avoidance',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7400,
  },
  WHISPER_OF_SILKEN_LEECH_R1: {
    id: 223732,
    name: 'Enchant Cloak - Whisper of Silken Leech',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7404,
  },
  WHISPER_OF_SILKEN_LEECH_R2: {
    id: 223733,
    name: 'Enchant Cloak - Whisper of Silken Leech',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7405,
  },
  WHISPER_OF_SILKEN_LEECH_R3: {
    id: 223734,
    name: 'Enchant Cloak - Whisper of Silken Leech',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7406,
  },
  WHISPER_OF_SILKEN_SPEED_R1: {
    id: 223738,
    name: 'Enchant Cloak - Whisper of Silken Speed',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7410,
  },
  WHISPER_OF_SILKEN_SPEED_R2: {
    id: 223739,
    name: 'Enchant Cloak - Whisper of Silken Speed',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7411,
  },
  WHISPER_OF_SILKEN_SPEED_R3: {
    id: 223740,
    name: 'Enchant Cloak - Whisper of Silken Speed',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7412,
  },
  // #endregion

  // weapons
  AUTHORITY_OF_AIR_R1: {
    id: 223773,
    name: 'Enchant Weapon - Authority of Air',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7449,
  },
  AUTHORITY_OF_AIR_R2: {
    id: 223774,
    name: 'Enchant Weapon - Authority of Air',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7450,
  },
  AUTHORITY_OF_AIR_R3: {
    id: 223775,
    name: 'Enchant Weapon - Authority of Air',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7451,
  },
  AUTHORITY_OF_FIERY_RESOLVE_R1: {
    id: 223776,
    name: 'Enchant Weapon - Authority of Fiery Resolve',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7452,
  },
  AUTHORITY_OF_FIERY_RESOLVE_R2: {
    id: 223777,
    name: 'Enchant Weapon - Authority of Fiery Resolve',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7453,
  },
  AUTHORITY_OF_FIERY_RESOLVE_R3: {
    id: 223778,
    name: 'Enchant Weapon - Authority of Fiery Resolve',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7454,
  },
  AUTHORITY_OF_RADIANT_POWER_R1: {
    id: 223779,
    name: 'Enchant Weapon - Authority of Radiant Power',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7461,
  },
  AUTHORITY_OF_RADIANT_POWER_R2: {
    id: 223780,
    name: 'Enchant Weapon - Authority of Radiant Power',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7462,
  },
  AUTHORITY_OF_RADIANT_POWER_R3: {
    id: 223781,
    name: 'Enchant Weapon - Authority of Radiant Power',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7463,
  },
  AUTHORITY_OF_STORMS_R1: {
    id: 223770,
    name: 'Enchant Weapon - Authority of Storms',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7455,
  },
  AUTHORITY_OF_STORMS_R2: {
    id: 223771,
    name: 'Enchant Weapon - Authority of Storms',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7456,
  },
  AUTHORITY_OF_STORMS_R3: {
    id: 223772,
    name: 'Enchant Weapon - Authority of Storms',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7457,
  },
  AUTHORITY_OF_THE_DEPTHS_R1: {
    id: 223782,
    name: 'Enchant Weapon - Authority of the Depths',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7458,
  },
  AUTHORITY_OF_THE_DEPTHS_R2: {
    id: 223783,
    name: 'Enchant Weapon - Authority of the Depths',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7459,
  },
  AUTHORITY_OF_THE_DEPTHS_R3: {
    id: 223784,
    name: 'Enchant Weapon - Authority of the Depths',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7460,
  },
  STORMRIDERS_FURY_R1: {
    id: 223760,
    name: "Enchant Weapon - Stormrider's Fury",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7440,
  },
  STORMRIDERS_FURY_R2: {
    id: 223761,
    name: "Enchant Weapon - Stormrider's Fury",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7441,
  },
  STORMRIDERS_FURY_R3: {
    id: 223762,
    name: "Enchant Weapon - Stormrider's Fury",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7442,
  },
  OATHSWORNS_TENACITY_R1: {
    id: 223766,
    name: "Enchant Weapon - Oathsworn's Tenacity",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7446,
  },
  OATHSWORNS_TENACITY_R2: {
    id: 223767,
    name: "Enchant Weapon - Oathsworn's Tenacity",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7447,
  },
  OATHSWORNS_TENACITY_R3: {
    id: 223768,
    name: "Enchant Weapon - Oathsworn's Tenacity",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7448,
  },
  COUNCILS_GUILE_R1: {
    id: 223757,
    name: "Enchant Weapon - Council's Guile",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7437,
  },
  COUNCILS_GUILE_R2: {
    id: 223758,
    name: "Enchant Weapon - Council's Guile",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7438,
  },
  COUNCILS_GUILE_R3: {
    id: 223759,
    name: "Enchant Weapon - Council's Guile",
    icon: 'inv_misc_enchantedscroll',
    effectId: 7439,
  },
  STONEBOUND_ARTISTRY_R1: {
    id: 223763,
    name: 'Enchant Weapon - Stonebound Artistry',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7443,
  },
  STONEBOUND_ARTISTRY_R2: {
    id: 223764,
    name: 'Enchant Weapon - Stonebound Artistry',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7444,
  },
  STONEBOUND_ARTISTRY_R3: {
    id: 223765,
    name: 'Enchant Weapon - Stonebound Artistry',
    icon: 'inv_misc_enchantedscroll',
    effectId: 7445,
  },

  /* Template */
  // X_R1: {
  //   id: 0,
  //   name: '',
  //   icon: 'inv_misc_enchantedscroll',
  //   effectId: 0,
  // },
  // X_R2: {
  //   id: 0,
  //   name: '',
  //   icon: 'inv_misc_enchantedscroll',
  //   effectId: 0,
  // },
  // X_R2: {
  //   id: 0,
  //   name: '',
  //   icon: 'inv_misc_enchantedscroll',
  //   effectId: 0,
  // },
} satisfies Record<string, Enchant>;

export default enchants;
