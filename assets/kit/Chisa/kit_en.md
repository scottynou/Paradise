# Chisa Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Chisa`
- Skill base id: `10042`
- Localized range used: `418000000-450000000`

## Keywords

### Ring of Chainsaw

Chisa can hold up to {0} points of Ring of Chainsaw.
Hitting a target with Normal Attack  and Resonance Skill Eye of Unraveling grants Ring of Chainsaw.
Casting Resonance Liberation Moment of Nihility grants {1} points of Ring of Chainsaw.
Casting Intro Skill Reverberance - Return grants {2} points of Ring of Chainsaw.

### Woven Myriad - Convergence

The DMG Multipliers of Sawring - Blitz, Chainsaw Mode - Dodge Counter, and Sawring - Eradication are increased by {0}.
Ring of Chainsaw consumed by Sawring- Blitz and Chainsaw Mode - Dodge Counter additionally increases the DMG Multiplier of Sawring - Eradication by {1}.
Casting Sawring - Eradication ends Woven Myriad - Convergence.

### Unseen Snare

When targets marked by Unseen Snare take direct damage from Resonators, Chisa inflicts <SapTag=0>{0}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=0} of Havoc Bane on them. This effect can be triggered up to once every {1}s.

### Thread of Bane

When dealing damage to the targets affected by Unseen Snare, ignore {0} of their DEF.

### Havoc Bane

- While Havoc Bane lasts, the DEF of the inflicted target is reduced.
- Havoc Bane stacks up to 3 times by default. Each stack reduces the target's DEF by 2%.

### Negative Statusu

Includes Spectro Frazzle, Havoc Bane, Fusion Burst, Glacio Chafe, Electro Flare and Aero Erosion.

### Electro Rage

Electro Rage increases the damage dealt by the next Electro Flare. This effect is removed once triggered.

### Negative Status DMG

Includes Spectro Frazzle DMG, Havoc Bane DMG, Fusion Burst DMG, Glacio Chafe DMG, Electro Flare DMG, and Aero Erosion DMG.

## Skills

### Basic Attack

- Internal skill id: `1004201`
- Name: `Reign of Silence`

Description

Basic Attack
Perform up to 2 consecutive attacks, dealing Havoc DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Basic Attack Stage 2 to cast Rending Lunge.

Rending Lunge
Deal Havoc DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill on the ground to cast Death Snip.
Use Normal Attack shortly after casting this skill in mid-air to cast Hanging Finality.

Death Snip
Open the scissors, dealing Havoc DMG. After a while, the scissors snip, dealing <color=D

Short Summary

Rending Lunge
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Basic Attack Stage 2 to cast Rending Lunge, dealing Havoc DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill on the ground to cast Death Snip.

Death Snip
Deal Havoc DMG and recover HP for all nearby Resonators in the team.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} or hold Normal Attack during this skill to deal additional Havoc DMG.

### Resonance Skill

- Internal skill id: `1004202`
- Name: `Fractured Composition`

Description

Eye of Unraveling
Stagnate and deal Havoc DMG.
- While not in Chainsaw Mode, after casting this skill, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack on the ground or use Normal Attack in mid-air to cast Rending Lunge. This effect is removed when Chisa enters Chainsaw Mode.
- While in Chainsaw Mode and on the ground, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack shortly after casting this skill to cast Sawring - Blitz Stage 2.
Can be cast in mid-air.

Serrated Loop
While on the ground and Ring of Chainsaw is full, Resonance Skill is replaced with Serrated Loop.
Stagnate targets, and deal Havoc DMG and pull in nearby targets.
Casting this skill sends Chisa into Chainsaw Mode and replaces Resonance Skill with Eye of Unraveling.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Sawring - Blitz Stage 2.
Hold Resonance Skill while casting this skill to continuously attack and pull in nearby targets. Release the Resonance Skill button in the duration or keep holding it for a certain period of time to cast Sawring - Blitz Stage 1.

Short Summary

Resonance Skill
Deal Havoc DMG and mark the targets.

Enhanced Resonance Skill
When Forte Gauge is full, Enhanced Resonance Skill becomes available.
Deal Havoc DMG and mark the targets.
Casting this skill sends Chisa into Chainsaw Mode.

Mark
When marked targets take damage, Chisa inflicts Havoc Bane on them.

### Resonance Liberation

- Internal skill id: `1004203`
- Name: `Moment of Nihility`

Description

Deal Havoc DMG and recover HP for all nearby Resonators in the team.
Casting this skill sends Chisa into Woven Myriad - Convergence for {0}s.
While not in Chainsaw Mode, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack shortly after casting this skill to cast Basic Attack Stage 2.
Can be cast in mid-air close to the ground.

Woven Myriad - Convergence
The DMG Multipliers of Sawring - Blitz, Chainsaw Mode - Dodge Counter, and Sawring - Eradication are increased by {1}.
The bonus DMG Multiplier for Sawring - Eradication granted by Sawring- Blitz and Chainsaw Mode - Dodge Counter when Ring of Chainsaw is consumed additionally increases by {2}.
Casting Sawring - Eradication ends Woven Myriad - Convergence.

Short Summary

Resonance Liberation
Deal Havoc DMG and recover HP for all nearby Resonators in the team.
Casting this skill sends Chisa into Enhanced Chainsaw Mode.

Enhanced Chainsaw Mode
The DMG Multipliers of Chainsaw Mode Basic Attack and Chainsaw Mode Finisher Attack are significantly increased.

### Inherent Skill 1

- Internal skill id: `1004204`
- Name: `Inescapable Fate`

Description

When a Resonator in the team defeats a target marked by Unseen Snare, the Cooldown of Chisa's Resonance Skill Eye of Unraveling is reset, triggered up to once every {0}s.

Short Summary

When a Resonator in the team defeats a marked target, Chisa's Resonance Skill Cooldown is reset.

### Inherent Skill 2

- Internal skill id: `1004205`
- Name: `All Ends Here`

Description

Casting Intro Skill Reverberance - Return or Resonance Liberation Moment of Nihility grants {0} Havoc DMG Bonus and {1} Healing Bonus for {2}s.
When Resonators in the team with Thread of Bane defeat a target marked by Unseen Snare, Chisa gains Sight of Unraveling, lasting {3}s.
While in Sight of Unraveling, Chisa inflicts Unseen Snare that lasts for {4}s on the targets damaged by Resonators in the team with Thread of Bane.

Short Summary

Casting Intro Skill or Resonance Liberation grants Havoc DMG Bonus and Healing Bonus.
When Resonators in the team with Thread of Bane defeat a marked target, Chisa gains Sight of Unraveling.
While in Sight of Unraveling, Chisa inflicts Unseen Snare on the targets damaged by Resonators in the team with Thread of Bane.(

### Intro Skill

- Internal skill id: `1004206`
- Name: `Reverberance - Return`

Description

Attack the target, dealing Havoc DMG.
While not in Chainsaw Mode, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack shortly after casting this skill to cast Basic Attack Stage 2.
While in Chainsaw Mode, use Normal Attack shortly after casting this skill to cast Sawring - Blitz Stage 2.

Short Summary

Deal Havoc DMG.

### Forte Circuit

- Internal skill id: `1004207`
- Name: `Sight of Unraveling - Oblivion`

Description

Unseen Snare
Chisa inflicts Unseen Snare on the target for {0}s in the following 4 ways:
- Hitting a target with Resonance Skill.
- Hitting a target within a certain period of time after casting Serrated Loop.
- Hitting a target with Dodge Counter - Eye of Unraveling: Retraction.
- Locking on to a target.
When targets marked by Unseen Snare take direct damage from Resonators, Chisa inflicts <SapTag=1>{1}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=1} of Havoc Bane on them. This effect can be triggered up to once every {2}s.

Thread of Bane
When dealing damage to targets affected by Unseen Snare, ignore {4} of their DEF.

Chainsaw Mode
While in Chainsaw Mode, Chisa unlocks Sawring - Blitz, Sawring - Eradication, Chainsaw Mode - Dodge Counter.
Sawring - Blitz and Chainsaw Mode - Dodge Counter consume Ring of Chainsaw on hit.

Sawring - Blitz
Sawring - Blitz chains up to 3 consecutive attacks, dealing Havoc DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack to start the combo from Sawring - Blitz Stage 1. Hold Normal Attack to start from <co

Short Summary

Forte Gauge
Chisa obtains Forte Gauge when not in Chainsaw Mode.
Chisa consumes Forte Gauge to cast Chainsaw Mode Basic Attack. The more Forte Gauge consumed, the higher DMG the next Chainsaw Mode Finisher Attack deals.

Thread of Bane
Ignore some of the marked targets' DEF when dealing damage.

Chainsaw Mode
While in Chainsaw Mode, Chainsaw Mode Basic Attack and Chainsaw Mode Finisher Attack become available.

Chainsaw Mode Basic Attack
Deal Havoc DMG, considered Resonance Liberation DMG.

Chainsaw Mode Finisher Attack
Deal a massive amount of Havoc DMG (considered Resonance Liberation DMG) and grant Shields to all nearby Resonators in the team.
Casting this skill ends Chainsaw Mode.

### Utility Passive

- Internal skill id: `1004208`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1004209`
- Name: `Unraveling - Law Zero`

Description

Grant Resonant Thread of Closure to all nearby Resonators in the team for {0}s.
While in Resonant Thread of Closure:
- When an attack hits, increase the max stacks of Negative Status and Electro Rage the target can receive by {1} for {2}s. Unstackable.
- Inflicting Negative Status or dealing Negative Status DMG grants Thread of Bane for {3}s.

Short Summary

All Resonators in the nearby team obtain the following effects:
- When an attack hits, increase the max stacks of Negative Status and Electro Rage the target can receive.
- Inflicting Negative Status or dealing Negative Status DMG grants Thread of Bane.

Thread of Bane
Ignore some of the marked targets' DEF when dealing damage.
