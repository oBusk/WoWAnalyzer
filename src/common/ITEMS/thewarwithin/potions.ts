import Item from '../Item';

const potions = {
  ALGARI_HEALING_POTION_R1: {
    id: 211878,
    name: 'Algari Healing Potion',
    icon: 'inv_flask_red',
  },
  ALGARI_HEALING_POTION_R2: {
    id: 211879,
    name: 'Algari Healing Potion',
    icon: 'inv_flask_red',
  },
  ALGARI_HEALING_POTION_R3: {
    id: 211880,
    name: 'Algari Healing Potion',
    icon: 'inv_flask_red',
  },
  ALGARI_MANA_POTION_R1: {
    id: 212239,
    name: 'Algari Mana Potion',
    icon: 'inv_flask_blue',
  },
  ALGARI_MANA_POTION_R2: {
    id: 212240,
    name: 'Algari Mana Potion',
    icon: 'inv_flask_blue',
  },
  ALGARI_MANA_POTION_R3: {
    id: 212241,
    name: 'Algari Mana Potion',
    icon: 'inv_flask_blue',
  },
  CAVEDWELLERS_DELIGHT_R1: {
    id: 212242,
    name: "Cavedweller's Delight",
    icon: 'inv_alchemy_elixir_06',
  },
  CAVEDWELLERS_DELIGHT_R2: {
    id: 212243,
    name: "Cavedweller's Delight",
    icon: 'inv_alchemy_elixir_06',
  },
  CAVEDWELLERS_DELIGHT_R3: {
    id: 212244,
    name: "Cavedweller's Delight",
    icon: 'inv_alchemy_elixir_06',
  },
  DRAUGHT_OF_SHOCKING_REVELATIONS_R1: {
    id: 212251,
    name: 'Draught of Shocking Revelations',
    icon: 'inv_potion_62',
  },
  DRAUGHT_OF_SHOCKING_REVELATIONS_R2: {
    id: 212252,
    name: 'Draught of Shocking Revelations',
    icon: 'inv_potion_62',
  },
  DRAUGHT_OF_SHOCKING_REVELATIONS_R3: {
    id: 212253,
    name: 'Draught of Shocking Revelations',
    icon: 'inv_potion_62',
  },
  DRAUGHT_OF_SILENT_FOOTFALLS_R1: {
    id: 212248,
    name: 'Draught of Silent Footfalls',
    icon: 'inv_potion_139',
  },
  DRAUGHT_OF_SILENT_FOOTFALLS_R2: {
    id: 212249,
    name: 'Draught of Silent Footfalls',
    icon: 'inv_potion_139',
  },
  DRAUGHT_OF_SILENT_FOOTFALLS_R3: {
    id: 212250,
    name: 'Draught of Silent Footfalls',
    icon: 'inv_potion_139',
  },
  FRONTLINE_POTION_R1: {
    id: 212260,
    name: 'Frontline Potion',
    icon: 'inv_alchemy_potion_empty',
  },
  FRONTLINE_POTION_R2: {
    id: 212261,
    name: 'Frontline Potion',
    icon: 'inv_alchemy_potion_empty',
  },
  FRONTLINE_POTION_R3: {
    id: 212262,
    name: 'Frontline Potion',
    icon: 'inv_alchemy_potion_empty',
  },
  GROTESQUE_VIAL_R1: {
    id: 212254,
    name: 'Grotesque Vial',
    icon: 'inv_summerfest_firepotion',
  },
  GROTESQUE_VIAL_R2: {
    id: 212255,
    name: 'Grotesque Vial',
    icon: 'inv_summerfest_firepotion',
  },
  GROTESQUE_VIAL_R3: {
    id: 212256,
    name: 'Grotesque Vial',
    icon: 'inv_summerfest_firepotion',
  },
  POTION_OF_THE_REBORN_CHEETAH_R1: {
    id: 212266,
    name: 'Potion of the Reborn Cheetah',
    icon: 'inv_misc_potionseta',
  },
  POTION_OF_THE_REBORN_CHEETAH_R2: {
    id: 212267,
    name: 'Potion of the Reborn Cheetah',
    icon: 'inv_misc_potionseta',
  },
  POTION_OF_THE_REBORN_CHEETAH_R3: {
    id: 212268,
    name: 'Potion of the Reborn Cheetah',
    icon: 'inv_misc_potionseta',
  },
  POTION_OF_UNWAVERING_FOCUS_R1: {
    id: 212257,
    name: 'Potion of Unwavering Focus',
    icon: 'inv_potion_16',
  },
  POTION_OF_UNWAVERING_FOCUS_R2: {
    id: 212258,
    name: 'Potion of Unwavering Focus',
    icon: 'inv_potion_16',
  },
  POTION_OF_UNWAVERING_FOCUS_R3: {
    id: 212259,
    name: 'Potion of Unwavering Focus',
    icon: 'inv_potion_16',
  },
  SLUMBERING_SOUL_SERUM_R1: {
    id: 212245,
    name: 'Slumbering Soul Serum',
    icon: 'inv_flask_green',
  },
  SLUMBERING_SOUL_SERUM_R2: {
    id: 212246,
    name: 'Slumbering Soul Serum',
    icon: 'inv_flask_green',
  },
  SLUMBERING_SOUL_SERUM_R3: {
    id: 212247,
    name: 'Slumbering Soul Serum',
    icon: 'inv_flask_green',
  },
  TEMPERED_POTION_R1: {
    id: 212263,
    name: 'Tempered Potion',
    icon: 'trade_alchemy_potiona4',
  },
  TEMPERED_POTION_R2: {
    id: 212264,
    name: 'Tempered Potion',
    icon: 'trade_alchemy_potiona4',
  },
  TEMPERED_POTION_R3: {
    id: 212265,
    name: 'Tempered Potion',
    icon: 'trade_alchemy_potiona4',
  },
} satisfies Record<string, Item>;

export default potions;
