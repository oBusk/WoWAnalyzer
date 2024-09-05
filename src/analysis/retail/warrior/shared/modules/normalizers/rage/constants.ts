/**
 * All rage values in events, _except_ "resourceChange" and "waste" values,
 * are x10 scaled. This factor is used to get back to the display value,
 * or to normalize the exceptions to the same scale.
 */
export const RAGE_SCALE_FACTOR = 0.1;

export const WARMACHINE_FURY_INCREASE = 0.2;
export const WARMACHINE_ARMS_INCREASE = 0.1;
export const WARMACHINE_PROT_INCREASE = 0.5;

export const SEASONED_SOLDIER_RAGE_INCREASE = 0.1;

export const RECKLESSNESS_INCREASE = 1;
// Since TWW pre-patch, Warlords Torment triggers a longer lasting recklessness, but with a lower rage increase
export const WARLORDS_TORMENT_RECKLESSNESS_INCREASE = 0.25;

const BASE_RAGE_GENERATION = 1.75;

/**
 * Rage generation per second for all specs.
 *
 * This data is based on SimulationCraft data.
 *
 * https://github.com/simulationcraft/simc/blob/1817c80712ebf9d54a4a3aa4e95a05c774fed6f4/engine/class_modules/sc_warrior.cpp#L1916-L1948
 */
export const AUTO_ATTACK_RAGE_PS = Object.freeze({
  ARMS: {
    // From SimulationCraft
    MH: BASE_RAGE_GENERATION * 3.5,
    OH: Number.MIN_SAFE_INTEGER,
  },
  FURY: {
    // From SimulationCraft
    MH: Number(BASE_RAGE_GENERATION),
    // Off-hand is half of main-hand
    OH: Number(BASE_RAGE_GENERATION) * 0.5,
  },
  PROTECTION: {
    // From SimulationCraft
    MH: BASE_RAGE_GENERATION * 0.44,
    OH: Number.MIN_SAFE_INTEGER,
  },
} as const);

export const DEFAULT_SPEED_2H = 3.6;
export const DEFAULT_SPEED_1H = 2.6;
