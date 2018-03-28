
const ArtifactMeta = {
  weapon: {
    staff: {
      commanderClass: ['dancer']
    },
    fan: {

    }
  },
  armor: {},
  accessory: {}
}

const artifacts = [
  {
    name: 'xxx',
    class: 'weapon',
    type: 'staff',
    rarity: 3,
    stats: {},
    skill: {},
    contest: ''
  }
]

//equippables could be derived from ArtifactMeta
const CommanderMeta = {
  warlord: {
    equippableWeapon: [],
    equippableArmor: [],
    equippableAccessory: [],
    subclasses: {
      aspirant: {
        progression: ['aspirant', 'adventurer'],
        subtype: [
          {
            passives: ['a', 'b']
          },
          {
            passives: ['a', 'b']
          }
        ]
      }
    }
  },
  archer: {

  }
}

const commanders = [
  {
    name: 'xxx',
    class: 'warlord',
    type: '',
    subtype: 0,
    stats: {},
    skills: [],
    banner: '',
    jadeCost: 0,
    silverCost: 0,
    goldCost: 0,
    baseEnergyCost: 0,
    contest: ''
  }
]

const SkillList = [
  {
    name: '',
    description: ''
  }
]
