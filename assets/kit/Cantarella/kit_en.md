# Cantarella Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Cantarella`
- Skill base id: `10031`
- Localized range used: `418000000-450000000`

## Keywords

### Mirage

- Basic Attack becomes Basic Attack Phantom Sting. Perform up to 3 consecutive attacks, dealing Havoc DMG. Can be cast in mid-air. When cast mid-air, Basic Attack Phantom Sting consumes STA, and the combo does not reset when Cantarella is airborne.
- Hitting the target with Basic Attack Phantom Sting consumes 1 point of Trance to obtain 1 point of Shiver and heal all nearby Resonators in the team.
- The third stage of Basic Attack Phantom Sting triggers 3 Coordinated Attacks, dealing Havoc DMG.
- Mid-air Attack becomes Abysmal Vortex. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Jump to perform a Plunging Attack at the cost of STA, dealing Havoc DMG.
- Dodge Counter becomes Dodge Counter Shadowy Sweep. Attack the target, dealing Havoc DMG. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting the skill to cast Basic Attack Phantom Sting Stage 2.
- When Mid-air Attack Abysmal Vortex or Dodge Counter Shadowy Sweep hits a target, consume 1 point of Trance to obtain 1 point of Shiver and heal all nearby Resonators in the team.
- Mirage lasts for 8s.
- Mirage ends when Trance is depleted.

## Skills

### Basic Attack

- Internal skill id: `1003101`
- Name: `Illusion Collapse`

Description

Basic Attack
Perform up to 3 consecutive attacks, dealing Havoc DMG.

Heavy Attack
Consume STA to attack the target, dealing Havoc DMG.

Heavy Attack - Delusive Dive
When Cantarella has Trance, Heavy Attack becomes Delusive Dive, dealing Havoc DMG to the target, and then Cantarella enters Mirage. While in Mirage, casting Delusive Dive does not activate Mirage again.
Can be cast in water.

Mid-air Attack
Consume STA to perform Plunging Attack, dealing Havoc DMG.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge to attack the target, dealing Havoc DMG.

Short Summary

Basic Attack
Deal Havoc DMG.

Heavy Attack
Consume STA to deal Havoc DMG.

Heavy Attack - Delusive Dive
With Trance, Heavy Attack becomes Delusive Dive. Deal Havoc DMG and enter Mirage.

Mid-air Attack
Consume STA to deal Havoc DMG.

Dodge Counter
Deal Havoc DMG.,

### Resonance Skill

- Internal skill id: `1003102`
- Name: `Dance with Shadows`

Description

Graceful Step
Attack the target, dealing Havoc DMG.

Flickering Reverie
When in Mirage, Resonance Skill becomes Flickering Reverie, which is considered an Echo Skill when being cast. Attack the target, dealing Havoc DMG, and send them into Hazy Dream.
Can be cast in mid-air.

Hazy Dream
Reduce the target's movement speed for {0}s. When the target takes damage, Jolt is triggered once, removing Hazy Dream to deal Havoc DMG, considered Basic Attack DMG.
Attacks by other Resonators in the team will not Jolt a target influenced by Hazy Dream and will remove the Hazy Dream.
Coordinated Attacks and damage from Utilities will not Jolt a target.

Short Summary

Graceful Step
Deal Havoc DMG.

Flickering Reverie
When in Mirage, Resonance Skill becomes Flickering Reverie. Casting this skill is also considered as casting Echo Skill.
Deal Havoc DMG and send the target into Hazy Dream.

Hazy Dream
Reduce the target's movement speed. When the target takes damage, Jolt is triggered once, dealing Havoc DMG.

### Resonance Liberation

- Internal skill id: `1003103`
- Name: `Beneath the Sea`

Description

Flowing Suffocation
Attack the target, dealing Havoc DMG (considered Basic Attack DMG). Grant Diffusion to all Resonators in the team. Casting this skill is also considered as casting Echo Skill.
Can be cast in mid-air close to the ground.

Diffusion
When the Resonator on the field deals damage to a target, summon Dreamweavers to perform Coordinated Attack, dealing Havoc DMG (considered as Basic Attack DMG).
- Within {0}s after the Resonator deals damage, summon <SapTag=1>{1}</SapTag> {Cus:Sap,S=Dreamweaver P=Dreamweavers SapTag=1} per second. This effect can be triggered once per second. Damage dealt by Dreamweavers cannot trigger this effect.
- Up to <SapTag=2>{2}</SapTag> {Cus:Sap,S=Dreamweaver P=Dreamweavers SapTag=2} can be summoned each second, max {3} Dreamweavers in total.
- This effect lasts for {4}s or until reaching the maximum number of Dreamweavers.

Short Summary

Flowing Suffocation
Deal Havoc DMG and grant Diffusion to all Resonators in the team.
Casting this skill is also considered as casting Echo Skill.

Diffusion
When the active Resonator deals damage, summon Dreamweavers to perform Coordinated Attack, dealing Havoc DMG, considered Basic Attack DMG.
- Each time dealing damage summons <SapTag=0>{0}</SapTag> {Cus:Sap,S=Dreamweaver P=Dreamweavers SapTag=0}, up to {1} Dreamweavers in total. Dreamweavers can appear up to once per second.

### Inherent Skill 1

- Internal skill id: `1003104`
- Name: `"Cure"=`

Description

Increase Healing Bonus by {0}.

### Inherent Skill 2

- Internal skill id: `1003105`
- Name: `"Poison`

Description

Casting Echo Skill gives {0} Havoc DMG Bonus for {1}s, stacking up to {2} times.

### Intro Skill

- Internal skill id: `1003106`
- Name: `Cruise`

Description

Ripple
Attack the target, dealing Havoc DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to start the Basic Attack combo from Basic Attack Stage 3.

Tidal Surge
When in Mirage, Intro Skill becomes Tidal Surge, which triggers 3 coordinated attacks on hit, dealing Havoc DMG. Casting Tidal Surge resets the combo of Basic Attack Phantom Sting.

Short Summary

Ripple
Deal Havoc DMG.

Tidal Surge
When in Mirage, Intro Skill becomes Tidal Surge, dealing Havoc DMG.

### Forte Circuit

- Internal skill id: `1003107`
- Name: `Between Illusion and Reality`

Description

Mirage
- Basic Attack becomes Basic Attack Phantom Sting. Perform up to 3 consecutive attacks, dealing Havoc DMG. Can be cast in mid-air. When cast mid-air, Basic Attack Phantom Sting consumes STA, and the combo does not reset when Cantarella is airborne.
- Hitting the target with Basic Attack Phantom Sting consumes {0} point of Trance to obtain {1} point of Shiver and heal all nearby Resonators in the team.
- The third stage of Basic Attack Phantom Sting triggers 3 Coordinated Attacks, dealing Havoc DMG.
- Mid-air Attack becomes Abysmal Vortex. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Jump to perform a Plunging Attack at the cost of STA, dealing Havoc DMG.
- Dodge Counter becomes Dodge Counter Shadowy Sweep. Attack the target, dealing Havoc DMG. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting the skill to cast Basic Attack Phantom Sting Stage 2.
- When Mid-air Attack Abysmal Vortex or Dodge Counter Shadowy Sweep hits a target, consume {0} point of Trance to obtain {1} point of Shiver and heal all nearby Resonators in the team.
- Mirage lasts for {2}s.
- Mirage ends when Trance is depleted.

Forte Circuit - Perception Drain
If Cantarella has {3} points of Shiver when in Mirage, Resonance Skill becomes Perception Drain.
Consume all Shiver to attack the target, dealing Havoc DMG, considered Basic Attack DMG. Send the target into Hazy Dream and heal all Resonators in the team.
Casting this skill is also considered as casting Echo Skill.
Can be cast in mid-air.

Abyssal Rebirth
After casting Intro Skill, Cantarella enters Abyssal Rebirth, which lasts for {5}s and can be activated once every 25s. In the duration, for up to 6 times, when Resonators in the team cast Echo Skill, Cantarella recovers {4} points of Concerto Energy. Echoes with the same name can only trigger this effect once.
When in water, Cantarella's swimming speed increases and STA cost decreases.

Trance
- Cantarella can hold up to {6} points of Trance.
- Casting Intro Skill recovers {7} point of Trance.
- Hitting a target with Basic Attack Stage 3 recovers {8} point of Trance.
- Casting Resonance Skill Graceful Step recovers {9} point of Trance.
- Casting Resonance Liberation Flowing Suffocation recovers {10} points of Trance.
- When in the water, recover {12} point of Trance every {11}s.

Shiver
- Cantarella can hold up to {13} points of Shiver.
- Hitting the target with Basic Attack Phantom Sting recovers {14} point of Shiver.
- When Mid-air Attack Abysmal Vortex or Dodge Counter Shadowy Sweep hits a target, restore {15} point of Shiver.

Short Summary

Mirage
- Basic Attack becomes Basic Attack Phantom Sting. Perform up to 3 consecutive attacks, dealing Havoc DMG.
- Hitting the target with Basic Attack Phantom Sting consumes {0} point of Trance to obtain {1} point of Shiver and heal all nearby Resonators in the team.
- Mid-air Attack becomes Abysmal Vortex. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Jump to deal Havoc DMG at the cost of STA.
- Dodge Counter becomes Dodge Counter Shadowy Sweep, dealing Havoc DMG.
- When Mid-air Attack Abysmal Vortex or Dodge Counter Shadowy Sweep hits a target, consume {0} point of Trance to obtain {1} point of Shiver and heal all nearby Resonators in the team.
- Mirage ends when Trance is depleted.

Forte Circuit - Perception Drain
Having {3} points of Shiver when in Mirage replaces Resonance Skill with Perception Drain.
Deal Havoc DMG, considered Basic Attack DMG. Send the target into Hazy Dream and heal all Resonators in the team.
Casting this skill is also considered as casting Echo Skill.

Abyssal Rebirth
After casting Intro Skill, Cantarella recovers {4} points of Concerto Energy every time Resonators in the team cast Echo Skill, up to 6 times. Echoes with the same name can only trigger this effect once.

Trance
Cantarella can hold up to {6} points of Trance.
Casting Intro Skill recovers {7} point of Trance.
Hitting the target with Basic Attack Stage 3 recovers {8} point of Trance.
Casting Resonance Skill Graceful Step recovers {9} point of Trance.
Casting Resonance Liberation Flowing Suffocation recovers {10} points of Trance.
When in the water, recover {12} point of Trance every {11}s.

Shiver
- Cantarella can hold up to {13} points of Shiver.
- Hitting the target with Basic Attack Phantom Sting recovers {14} point of Shiver.
- When Mid-air Attack Abysmal Vortex or Dodge Counter Shadowy Sweep hits a target, restore {15} point of Shiver.

### Utility Passive

- Internal skill id: `1003108`

Description

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1003109`
- Name: `Gentle Tentacles`

Description

Amplify the incoming Resonator's Havoc DMG by {0} and Resonance Skill DMG by {1} for {2}s. Switching Resonators ends this effect.
