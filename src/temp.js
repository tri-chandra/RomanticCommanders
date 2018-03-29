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

const CommanderTypeMeta = {
  tactician: [
    {
      skill1: 'enhance fire',
      skill2: 'enhance fire',
      skill3: 'enhance fire',
    }
  ]
}

//equippables could be derived from ArtifactMeta, skill could be derived from CommanderTypeMeta
const CommanderMeta = {
  warlord: {
    equippableWeapon: [],
    equippableArmor: [],
    equippableAccessory: [],
    skill1: '',
    skill2: '',
    skill3: '',
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
