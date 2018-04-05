const e = {
  warlord: 'warlord',
  footman: 'footman',
  archer: 'archer',
  crossbowman: 'crossbowman',
  spearman: 'spearman',
  lightCavalry: 'lightCavalry',
  heavyCavalry: 'heavyCavalry',
  mountainCavalry: 'mountainCavalry',
  mountedArcher: 'mountedArcher',
  catapult: 'catapult',
  soldier: 'soldier',
  outlaw: 'outlaw',
  tactician: 'tactician',
  geomancer: 'geomancer',
  taoist: 'taoist',
  dancer: 'dancer',
  chariot: 'chariot',
  navy: 'navy',
  bearMaster: 'bearMaster',
  tigerMaster: 'tigerMaster',
  marine: 'marine',
  sage: 'sage',
  demon: 'demon',

  swordsman: 'swordsman',
  musician: 'musician',

  sword: 'sword',
  spear: 'spear',
  bow: 'bow',
  crossbow: 'crossbow',
  staff: 'staff',
  artillery: 'artillery',
  fan: 'fan',
  legendarySword: 'legendarySword',

  armor: 'armor',
  robe1: 'robe1',
  robe2: 'robe2',

  any: 'any'
}

const mapper = {
  warlord: 'Warlord',
  footman: 'Footman',
  archer: 'Archer',
  crossbowman: 'Crossbowman',
  spearman: 'Spearman',
  lightCavalry: 'Light Cavalry',
  heavyCavalry: 'Heavy Cavalry',
  mountainCavalry: 'Mountain Cavalry',
  mountedArcher: 'Mounted Archer',
  catapult: 'Catapult',
  soldier: 'Soldier',
  outlaw: 'Outlaw',
  tactician: 'Tactician',
  geomancer: 'Geomancer',
  taoist: 'Taoist',
  dancer: 'Dancer',
  chariot: 'Chariot',
  navy: 'Navy',
  bearMaster: 'Bear Master',
  tigerMaster: 'Tiger Master',
  marine: 'Marine',
  sage: 'Sage',
  demon: 'Demon',

  swordsman: 'Swordsman',
  musician: 'Musician',

  sword: 'Sword',
  spear: 'Spear',
  bow: 'Bow',
  crossbow: 'Crossbow',
  staff: 'Staff',
  artillery: 'Artillery',
  fan: 'Fan',
  legendarySword: 'Legendary Sword',

  armor: 'Armor',
  robe1: 'Robe',
  robe2: 'Robe',

  any: 'Common'
}

const store = {
  state: {
    literals: e,
    mapper: mapper,
    artifactMeta: {
      weapon:{
        [e.sword]: {
          equippableBy: [e.warlord, e.footman, e.outlaw, e.navy, e.swordsman]
        },
        [e.spear]: {
          equippableBy: [e.spearman, e.lightCavalry, e.heavyCavalry, e.mountainCavalry, e.chariot]
        },
        [e.bow]: {
          equippableBy: [e.archer, e.mountedArcher]
        },
        [e.crossbow]: {
          equippableBy: [e.crossbowman]
        },
        [e.staff]: {
          equippableBy: [e.soldier, e.dancer, e.bearMaster, e.tigerMaster]
        },
        [e.artillery]: {
          equippableBy: [e.catapult]
        },
        [e.fan]: {
          equippableBy: [e.tactician, e.sage, e.demon, e.musician]
        },
        [e.legendarySword]: {
          equippableBy: [e.geomancer, e.taoist, e.marine]
        },
      },
      armor: {
        armor: {
          equippableBy: [e.warlord, e.footman, e.spearman, e.heavyCavalry, e.mountedArcher, e.chariot]
        },
        robe1: {
          equippableBy: [e.tactician, e.geomancer, e.taoist, e.sage, e.demon]
        },
        robe2: {
          equippableBy: [e.archer, e.crossbowman, e.lightCavalry, e.mountainCavalry, e.catapult,
            e.soldier, e.outlaw, e.dancer, e.navy, e.bearMaster, e.tigerMaster, e.marine, e.swordsman, e.musician]
        }
      },
      accessory: {
        any: {
          equippableBy: [
            e.warlord, e.footman, e.spearman, e.heavyCavalry, e.mountedArcher, e.chariot,
            e.tactician, e.geomancer, e.taoist, e.sage, e.demon,
            e.archer, e.crossbowman, e.lightCavalry, e.mountainCavalry, e.catapult,
            e.soldier, e.outlaw, e.dancer, e.navy, e.bearMaster, e.tigerMaster, e.marine, e.swordsman, e.musician
          ]
        }
      }
    },
    commanderMeta: {
      [e.warlord]: {
        stages: ['Aspirant', 'Adventurer', 'Challenger', 'Conqueror', '?'],
        weapon: e.sword,
        armor: e.armor,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.footman]: {
        stages: ['Conscript', 'Guardsman', 'Defender', '?', '?'],
        weapon: e.sword,
        armor: e.armor,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.archer]: {
        stages: ['Bowman', 'Longbowman', 'Marksman', 'Longshot', '?'],
        weapon: e.bow,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.crossbowman]: {
        stages: ['Arbalist', 'Quarreller', 'Sniper', '?', '?'],
        weapon: e.crossbow,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.spearman]: {
        stages: ['Town Guard', 'Pikeman', 'Linesman', '?', '?'],
        weapon: e.spear,
        armor: e.armor,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.lightCavalry]: {
        stages: ['Skirmisher', 'Lancer', 'Charger', 'Vanguard', '?'],
        weapon: e.spear,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.heavyCavalry]: {
        stages: ['Lamellar Cavalry', 'Scale Cavalry', 'Mail Cavalry', '?', '?'],
        weapon: e.spear,
        armor: e.armor,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.mountainCavalry]: {
        stages: ['Ranger', 'Rough Rider', 'Cliff Bounder', 'Stonehoof', '?'],
        weapon: e.spear,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.mountedArcher]: {
        stages: ['Mounted Bowman', 'Mounted Longbowman', 'Mounted Marksman', 'Mounted Longshot', 'Mounted ?'],
        weapon: e.bow,
        armor: e.armor,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.catapult]: {
        stages: ['Light Catapult', 'Heavy Catapult', '?', '?', '?'],
        weapon: e.artillery,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.soldier]: {
        stages: ['Fighter', 'Warrior', 'Slayer', '?', '?'],
        weapon: e.staff,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.outlaw]: {
        stages: ['Thug', 'Bandit', 'Brigand', '?', '?'],
        weapon: e.sword,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.tactician]: {
        stages: ['Scribe', 'Minister', 'Consul', 'Advisor', '?'],
        weapon: e.fan,
        armor: e.robe1,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.geomancer]: {
        stages: ['Acolyte', 'Adept', 'Ritualist', 'Channeler', '?'],
        weapon: e.legendarySword,
        armor: e.robe1,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.taoist]: {
        stages: ['Devotee', 'Initiate', 'Monk', '?', '?'],
        weapon: e.legendarySword,
        armor: e.robe1,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.dancer]: {
        stages: ['Performer', 'Bard', 'Enchantress', 'Songstress', '?'],
        weapon: e.staff,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.chariot]: {
        stages: ['Light Chariot', 'Heavy Chariot', '?', '?', '?'],
        weapon: e.spear,
        armor: e.armor,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.navy]: {
        stages: ['Cadet', 'First Mate', 'Captain', '?', '?'],
        weapon: e.sword,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.bearMaster]: {
        stages: ['Cub', 'Brown', 'Grizzly', '?', '?'],
        weapon: e.staff,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.tigerMaster]: {
        stages: ['Clouded', 'Caspian', 'Javan', '?', '?'],
        weapon: e.staff,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.marine]: {
        stages: ['Raider', 'Buccaneer', 'Marauder', '?', '?'],
        weapon: e.legendarySword,
        armor: e.robe2,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.sage]: {
        stages: ['Hermit', 'Disciple', 'Scholar', 'Diviner', 'Celestial'],
        weapon: e.fan,
        armor: e.robe1,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      },
      [e.demon]: {
        stages: ['Imp', '?', '?', '?', '?'],
        weapon: e.fan,
        armor: e.robe1,
        accessory: e.any,
        skill1: '',
        skill3: '',
        skill5: ''
      }
    },
    skillMeta: {

    }
  },

  getters: {
    literals(state) {
      return state.literals
    },
    mapper(state) {
      return state.mapper
    },
    artifactMeta(state) {
      return (c, t) => {
        if (state.artifactMeta[c]) {
          return state.artifactMeta[c][t]
        } else {
          return undefined
        }
      }
    },
    commanderMeta(state) {
      return (c) => {
        return state.commanderMeta[c]
      }
    }
  },

  mutations: {

  },

  actions: {

  }
}

export default store
