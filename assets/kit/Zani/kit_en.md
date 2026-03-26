# Zani Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Zani`
- Skill base id: `10033`
- Localized range used: `418000000-450000000`

## Keywords

### Redundant Energy

Zani can hold up to 100 Redundant Energy.
Obtain Redundant Energy when Normal Attacks hit a target.
Obtain Redundant Energy when Intro Skill Immediate Execution hits a target.
Obtain Redundant Energy when casting Resonance Skill Standard Defense Protocol.
Obtain Redundant Energy when casting Resonance Skill Pinpoint Strike.
Cannot obtain Redundant Energy while in Inferno Mode.

### Vibration Strength

When the Vibration Strength is depleted, the enemy is Immobilized and cannot take any action for a period of time.

### Inferno Mode

Casting Resonance Liberation Rekindle sends Zani into Infernal Mode.

### Heliacal Ember

When Zani is in the team and a nearby Resonator inflicts Spectro Frazzle upon a target, immediately consume all Spectro Frazzle stacks and trigger the corresponding DMG, then convert Spectro Frazzle into equal stacks of Heliacal Ember. Every time the conversion happens, Zani obtains Blaze based on the stacks of Heliacal Ember inflicted. Heliacal Ember is capped at 60 stacks, with each stack lasting for 6s. Heliacal Ember stacks are counted toward the Spectro Frazzle stacks for the Eternal Radiance Sonata Effect.

### Blaze

Blaze is capped at 100 when not in Inferno Mode.
Blaze is capped at 150 in Inferno Mode.
Casting Resonance Skill Crisis Response Protocol grants 10 Blazes.
Every stack of Heliacal Ember converted from Spectro Frazzle grants 5 Blazes.
Casting Resonance Liberation Rekindle grants 50 Blazes.

### Spectro Frazzle

- While Spectro Frazzle lasts, it deals periodic Spectro DMG to the target. The target loses 1 stack of the effect with each instance of damage.
- The DMG of Spectro Frazzle scales with its stacks.

### Ready Stance

When Zani is under the following states, hold Resonance Skill to enter Ready Stance.
- While not in the Inferno Mode and Redundant Energy is full.
- While in the Inferno Mode.

## Skills

### Basic Attack

- Internal skill id: `1003301`
- Name: `Routine Negotiation`

Description

Basic Attack
Perform up to 4 consecutive attacks to deal Spectro DMG.
After performing Basic Attack Stage 3, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack at the right time to perform Basic Attack Breakthrough, which can be followed by Basic Attack Stage 4 by {Cus:Ipt,Touch=tapping PC=pressing Gamepad=pressing} Normal Attack again.

Heavy Attack
Consume STA to attack the target, dealing Spectro DMG. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time to perform Basic Attack Stage 3.

Mid-air Attack
Consume STA to perform a plunging attack, dealing Spectro DMG. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time to perform Basic Attack Stage 3.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time after a successful Dodge to attack the target, dealing Spectro DMG. Then {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack at the right time to cast Basic Attack Breakthrough.

Short Summary

Basic Attack
Deal Spectro DMG.

Chain Basic Attack
After Basic Attack Stage 3, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack at the right time to perform Chain Basic Attack, dealing Spectro DMG.

Heavy Attack
Deal Spectro DMG.

Mid-air Attack
Deal Spectro DMG.

Dodge Counter
Deal Spectro DMG.

### Resonance Skill

- Internal skill id: `1003302`
- Name: `Restless Watch`

Description

Standard Defense Protocol
Attack the target to deal Spectro DMG and enter a block stance. This state ends early if Zani is switched off the field. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time to perform Basic Attack Stage 3, recovering 10 points of Redundant Energy and Stagnating the target on hit.
When attacked by an enemy while in block stance, reduce this instance of damage by 100% and Stagnate nearby targets, then cast Pinpoint Strike, dealing Spectro DMG and further reducing their Vibration Strength by  {0}. DMG taken by Zani is reduced by {3} within the next {2}s.

Crisis Response Protocol
When Zani is not in Inferno Mode and has full Redundant Energy, her Resonance Skill is replaced with Resonance Skill Crisis Response Protocol.
Hold Resonance Skill to enter Ready Stance. While in Ready Stance, Zani is immune to interruption. This state ends early if Zani is switched off the field. After releasing Resonance Skill button or when the stance duration ends, consume all Redundant Energy to cast Targeted Action, dealing Spectro DMG, which is also considered Spectro Frazzle DMG.
When attacked by an enemy in while in Ready Stance, reduce this instance of damage by 100% and consume all Redundant Energy to cast Forcible Riposte, dealing Spectro DMG (also considered Spectro Frazzle DMG), Stagnating the target, and further reducing their Vibration Strength by {1}. DMG taken by Zani is reduced by {3} within the next {2}s.
Casting Targeted Action or Forcible Riposte sends Zani into Sunburst mode and inflicts a stack of Heliacal Ember upon the target on hit. The last stage of the attack recovers Blaze.

Sunburst
The Spectro Frazzle DMG dealt by Zani to the target is Amplified by {4}.

Short Summary

Resonance Skill
Deal Spectro DMG. Zani can block attacks within a certain time after casting Resonance Skill. A successful block reduces DMG taken and triggers a counterattack.

Forte Gauge - Redundant Energy
- Perform Basic Attack, Resonance Skill, or Intro Skill to obtain Redundant Energy.
- When Redundant Energy is full, Enhanced Resonance Skill becomes available.

Enhanced Resonance Skill
- Hold Resonance Skill to charge up the attack, during which Zani is immune to interruption and blocks attacks. A successful block reduces DMG taken and triggers a counterattack. Release the button in advance or fully charge up to attack the target.
- Deal Spectro DMG (also considered Spectro Frazzle DMG), inflict Heliacal Ember upon the target, and Amplify the Spectro Frazzle DMG dealt by herself.

### Resonance Liberation

- Internal skill id: `1003303`
- Name: `Between Dawn and Dusk`

Description

Rekindle
Deal Spectro DMG and enter Inferno Mode, increasing Max Blaze from {0} to {1} and granting {2} Blazes. When in Inferno Mode, the DMG Multiplier of Basic Attack is increased.

The Last Stand
When in Inferno Mode, Resonance Liberation The Last Stand becomes available when Blaze is lower than {3} or after {4}s in Inferno Mode.
Casting Resonance Liberation The Last Stand deals Spectro DMG and ends the Inferno Mode.

Short Summary

Resonance Liberation
Deal Spectro DMG and enter an Enhanced State, where the DMG Multiplier of Basic Attack is increased and Heavy Slashes and Finisher Resonance Liberation are unlocked.

Finisher Resonance Liberation
Available when Forte Gauge Blaze is lower than the tick mark or after a certain time in the Enhanced State. Deal high Spectro DMG and end the Enhanced State.

### Inherent Skill 1

- Internal skill id: `1003304`
- Name: `Quick Response`

Description

Casting Intro Skill Immediate Execution gives {0} Spectro DMG Bonus for {1}s.

Short Summary

Casting Intro Skill gives Spectro DMG Bonus.

### Inherent Skill 2

- Internal skill id: `1003305`
- Name: `Fear No Pain`

Description

When in Ready Stance, all DMG taken is reduced by {0}.

Short Summary

DMG taken is reduced while charging up.

### Intro Skill

- Internal skill id: `1003306`
- Name: `Immediate Execution`

Description

Attack the target, dealing Spectro DMG.

Short Summary

Deal Spectro DMG.

### Forte Circuit

- Internal skill id: `1003307`
- Name: `There Will Be A Light`

Description

Heliacal Ember
When Zani is in the team and a nearby Resonator inflicts Spectro Frazzle upon a target, immediately consume all Spectro Frazzle stacks and trigger the corresponding DMG, then convert Spectro Frazzle into an equal number of Heliacal Embers. Every time the conversion happens, Zani obtains Blaze based on the stacks of Heliacal Ember inflicted. Heliacal Ember is capped at {0} stacks, with each stack lasting for {1}s. Heliacal Ember stacks are counted toward the Spectro Frazzle stacks for the Eternal Radiance Sonata Effect.

Scorching Light
When Zani is in Inferno Mode, Heavy Slash - Daybreak, Heavy Slash - Dawning, Heavy Slash - Nightfall, and

Short Summary

Forte Gauge - Blaze
- When a nearby Resonator in the team inflicts Spectro Frazzle upon a target, trigger the damage effect immediately and inflict Heliacal Ember upon the target. Meanwhile, Zani restores Blaze.
- Casting Resonance Liberation  or Enhanced Resonance Skill grants Blazes.
- When in the Enhanced State and Blaze is higher than the tick mark, Heavy Slashes become available.

Heliacal Ember
Increases Outro Skill DMG. Its stacks count towards the Eternal Radiance Sonata Effect.

Heavy Slash
- {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press}  Normal Attack or hold Resonance Skill to cast.
- Hold Resonance Skill to charge up, during which Zani is immune to interruptions and blocks attacks. A successful block reduces DMG taken and triggers a counterattack. Release the button in advance or fully charge up to attack the target directly.
- Deal Spectro DMG, considered both Heavy Attak DMG and Spectro Frazzle DMG.

### Utility Passive

- Internal skill id: `1003308`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1003309`
- Name: `Beacon For the Future`

Description

Attack the target, dealing Spectro DMG equal to {0} of Zani's ATK and removing all stacks of Heliacal Ember inflicted upon the target. Each stack increases the DMG dealt by {1}. This DMG is considered Spectro Frazzle DMG. The Spectro DMG dealt by other Resonators in the team to the target marked by Heliacal Ember is Amplified by {2} for {3}s.

Short Summary

Deal Spectro DMG. Heliacal Ember stacks increase the DMG the targets taken.
This instance of damage is considered Spectro Frazzle DMG.
Amplify Spectro DMG dealt by other Resonators in the team to the target with Heliacal Ember.
