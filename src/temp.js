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

/**
 * WPN
 * sword: warlord, footman, outlaw, navy, swordsman
 * spear: spearman, light cavalry, heavy cavalry, mountain cavalry, chariot
 * bow: archer, mounted archer
 * crossbow: crossbowman
 * staff: soldier, dancer, bear master, tiger master
 * artillery: catapult
 * fan: tactician, sage, demon, musician
 * legendary sword: geomancer, taoist, marine
 *
 * ARM
 * armor: warlord, footman, spearman, heavy cavalry, mounted archer, chariot
 * robe: tactician, geomancer, taoist, sage, demon
 * robe: archer, crossbowman, light cavalry, mountain cavalry, catapult, soldier, outlaw, dancer, navy, bear master, tiger master, marine, swordsman, musician
 *
 * ACC
 * common
 */

 /**
  * Affiliations:
  *
  * warlord: aspirant, adventurer, challenger, conqueror
  * attack DEF rate increase: +5%
  * hp boost: +3%
  * decrease tactics damage: -10%
  *
  * footman: conscript, guardsman, defender
  * DEF boost: +3%
  * HP boost: +5%
  * decrease ranged damage: -20%
  *
  * archer: bowman, longbowman, makrsman, longshot
  * AGI boost: +5%
  * attack ACC increas: +5%
  * Enhanced double attack: +20%
  *
  * crossbowman: arbalist, quarreller, sniper
  * attack boost: +3%
  * enhanced physical attack: +3%
  * attack DEF rate pierce: decrease def rate -5%
  *
  * spearman: town guard, pikeman, linesman
  * atk boost: +6%
  * phalanx strike
  * enhanced mounted attack: +5% dmg to cavalry
  *
  * light cavalry: skirmisher, lancer, charger, vanguard
  * atk boost: +6%
  * phalax strike
  * attack DEF rate pierce: decrease def rate -8%
  *
  * heavy cavalry: lamellar cavalry, scale cavalry, mail cavalry
  * DEF boost: +2%
  * Attack ACC increase: +5%
  * charge attack: x4%
  *
  * mountain cavalry: ranger, rough rider, cliff bounder, stonehoof
  * AGI boost: +5%
  * All DEF increase: +3%
  * Atk boost: +4%
  *
  * mounted archer: mounted bowman, mounted longbowman, mounted marksman, mounted longshot
  * enhanced physical attack: +3%
  * AGI boost: +3%
  * Attack ACC increase: +3%
  *
  * catapult: light catapult, heavy catapult
  * Attack acc increase: +3%
  * mrl boost: +2%
  * enhanced physical attack: +1%
  *
  * soldier: fighter, warrior, slayer
  * agi boost: +3%
  * all def rate increase: +4%
  * atk boost: +3%
  *
  * outlaw: thug, bandit, brigand
  * mrl boost: +3%
  * def boost: +3%
  * hp boost: +3%
  *
  * tactician: scribe, minister, consul, advisor
  * enhanced fire tactics: +6%
  * mp boost: +10%
  * wis boost: +3%
  *
  * geomancer: acolyte, adept, ritualist, channeler
  * enhanced supply tactics: +2%
  * decrease ranged damage: -3%
  * mp boost: +4%
  *
  * taoist: devotee, initiate, monk
  * enhanced interupt tactics: +3%
  * hp boost: +3%
  * mrl boost: +10%
  *
  * dancer: performer, bard, enchantress, songstress
  * reach awaken
  * seduce acc increase: +30%
  * enhanced seduce: ATK +20%
  *
  * chariot: light chariot, heavy chariot
  * ATK boost: +3%
  * attack acc increase: +3%
  * charge attack: x2%
  *
  * navy: cadet, first mate, captain
  * agi boost: +5%
  * attack acc increase: +5%
  * enhanced double attack: +25%
  *
  * bear master: cub, brown, grizzly
  * immobilization attack: 15%
  * mrl boost: +10%
  * def reduction attack
  *
  * tiger master: clouded, caspian, javan
  * expand aoe
  * agi boost: +4%
  * reach confuse: decrease agi
  *
  * marine: raider, buccaneer, marauder
  * enhanced water tactics: +3%
  * wis boost: +3%
  * enhanced physical attack: +10%
  *
  * sage: hermit, disciple, scholar, diviner
  * enhanced elemental tactics: +5%
  * hp boost: +3%
  * wis boost: +3%
  *
  * demon: imp
  * wis boost: +1%
  * status effect attack: 5%
  * hp boost: +5%
  */
