# Iuno Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Iuno`
- Skill base id: `10038`
- Localized range used: `418000000-450000000`

## Keywords

### Lunar Cycle

Iuno can switch between Half Moon and New Moon states.
Half Moon: Attacks recover Forte Gauge on hit.
New Moon: Basic Attack, Resonance Skill, and Dodge Counter consume Forte Gauge to increase this skill's DMG Multiplier.

### Blessing of the Wan Light

The receiving Resonator gains 4% all DMG Amplification for 10s, stacking up to 10 times. Gaining new stacks resets the duration. This effect ends early if the receiving Resonator is switched off the field.

### Sentience

Iuno can hold up to 100 points of Sentience.
Casting Intro Skill restores 40 points of Sentience.
Casting Resonance Liberation restores 60 points of Sentience.
Casting Closing Refrain or Unfinished Refrain restores 25 points of Sentience.
When Iuno is in Lunar Cycle, Moonring - Basic Attack,  Moonring - Dodge Counter, and Mid-air Attack restore Sentience on hit.

## Skills

### Basic Attack

- Internal skill id: `1003801`
- Name: `Moon Steps`

Description

Moonring - Basic Attack
Perform up to 3 consecutive attacks with the Moonring, dealing Aero DMG.

Mid-air Attack
Consume STA to perform a Plunging Attack, dealing Aero DMG.

Moonring - Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after a successful Dodge to attack the target with Moonring, dealing Aero DMG. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack again shortly after performing this skill to cast Moonring - Basic Attack Stage 3.

Moonbow - Basic Attack
Enter Lunar Cycle - New Moon by casting Heavy Attack - Flux: Moonring. When in this state, Iuno will attack with Moonbow.
Perform up to 3 consecutive attacks with the Moonbow, dealing Aero DMG, considered as Resonance Liberation DMG.
Can be cast in mid-air.

Moonbow - Dodge Counter
When in Lunar Cycle - New Moon, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack shortly after a successful Dodge to attack the target with Moonbow, dealing Aero DMG, considered as Resonance Liberation DMG.
When in Lunar Cycle - New Moon, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack again shortly after performing this skill to cast Moonbow - Basic Attack Stage 3.
Can be cast in mid-air.

Short Summary

Basic Attack
Attack with the Moonring, dealing Aero DMG.

Mid-air Attack
Deal Aero DMG.

Dodge Counter
Attack with the Moonring, dealing Aero DMG.

Moonbow - Basic Attack
Iuno will enter Lunar Cycle - New Moon by casting Heavy Attack - Flux: Moonring. When in this state, Iuno will attack with Moonbow.
Attack with the Moonbow, dealing Aero DMG.

Moonbow - Dodge Counter
Attack with the Moonbow, dealing Aero DMG.

### Resonance Skill

- Internal skill id: `1003802`
- Name: `Foresight Fugue`

Description

Pulse of Origins
Dash forward, dealing Aero DMG.

Closing Refrain
When not in Lunar Cycle, casting Moonring - Basic Attack Stage 3, Intro Skill, or Pulse of Origins replaces Iuno's Resonance Skill with Closing Refrain for 5s.
Casting Closing Refrain unleashes a flurry of strikes, dealing Aero DMG, and activates Lunar Cycle.

Unfinished Refrain
When in Lunar Cycle - Half Moon, Iuno's Resonance Skill is replaced with Unfinished Refrain.
Casting Unfinished Refrain unleashes a flurry of strikes, dealing Aero DMG.
Unfinished Refrain shares the same Cooldown as Closing Refrain.

Arc Beyond the Edge
When Iuno is in Lunar Cycle - New Moon, her Resonance Skill is replaced with Arc Beyond the Edge, which has 2 initial charges.
Casting Arc Beyond the Edge causes Iuno to shift position and deal Aero DMG, considered as Resonance Liberation DMG.
- Directional input can be used to extend the travel distance. If Iuno is hit or launched into mid-air, casting Arc Beyond the Edge immediately makes her recover from the attack.
Can be cast in mid-air.

Short Summary

Pulse of Origins
Deal Aero DMG.

Closing Refrain
After casting Basic Attack Stage 3, Intro Skill, or Pulse of Origins, Iuno's Resonance Skill is replaced with Closing Refrain.
Casting Closing Refrain deals Aero DMG and activates Lunar Cycle.

Unfinished Refrain
When in Lunar Cycle - Half Moon, Iuno's Resonance Skill is replaced with Unfinished Refrain.
Casting Unfinished Refrain deals Aero DMG.

Arc Beyond the Edge
When in Lunar Phase - New Moon, Iuno's Resonance Skill is replaced with Arc Beyond the Edge.
Casting Arc Beyond the Edge deals Aero DMG.

### Resonance Liberation

- Internal skill id: `1003803`
- Name: `Beneath Lunar Tides`

Description

Deal Aero DMG and activate the Lunar Cycle state.
Can be cast in mid-air.

Short Summary

Deal Aero DMG and activate the Lunar Cycle state.

### Inherent Skill 1

- Internal skill id: `1003804`
- Name: `Waxing Ascent`

Description

Every time Iuno casts Basic Attack, Heavy Attack, Dodge Counter, Resonance Skill, Resonance Liberation, or Intro Skill, she gains {0} Shield equal to {1} of her ATK for {2}s. This Shield will not be passed on to the incoming Resonator.

Short Summary

Every time Iuno casts Basic Attack, Heavy Attack, Dodge Counter, Resonance Skill, Resonance Liberation, or Intro Skill, she gains {0} Shield equal to {1} of her ATK for {2}s. This Shield will not be passed on to the incoming Resonator.(

### Inherent Skill 2

- Internal skill id: `1003805`
- Name: `Derivation`

Description

When Iuno casts Intro Skill or Resonance Liberation, she immediately gains {0} stacks of Blessing of the Wan Light.

Short Summary

When Iuno casts Intro Skill or Resonance Liberation, she immediately gains {0} stacks of Blessing of the Wan Light.

### Intro Skill

- Internal skill id: `1003806`
- Name: `Illuminated Manifestation`

Description

Deal Aero DMG.

Short Summary

Deal Aero DMG.

### Forte Circuit

- Internal skill id: `1003807`
- Name: `Ebb and Flow`

Description

Lunar Cycle
Iuno can activate Lunar Cycle by casting Resonance Skill - Closing Refrain or Resonance Liberation.
Lunar Cycle has two states: Half Moon and New Moon. By default, Iuno enters the Half Moon state when activating Lunar Cycle and can switch between the two states by casting Heavy Attack - Flux.
When in Lunar Cycle:
- Iuno's Jump is replaced with Heavy Attack - Flux. STA won't recover when Iuno is in mid-air.
- Iuno's movement becomes Meandering, which consumes STA continuously in mid-air to move in a unique manner.
- Performing environmental interactions, using Utilities, or holding Jump will end Lunar Cycle.

Lunar Cycle - Half Moon
Iuno attacks using the Moonring, restoring Sentience on hit.
She can use Heavy Attack - Flux: Moonbow to deal Aero DMG (considered as Resonance Liberation DMG) and switch to Lunar Cycle - New Moon.
Heavy Attack - Flux: Moonbow can be cast in mid-air.

Lunar Cycle - New Moon
Iuno attacks using the Moonbow. While in this state, casting Moonbow - Basic Attack, Resonance Skill - Arc Beyond the Edge, or Moonbow - Dodge Counter consumes Sentience to increase the skill's DMG Multiplier, restore additional Concerto Energy, and heal nearby Resonators in the team.
Iuno can use Heavy Attack - Flux: Moonring to deal Aero DMG (considered as Resonance Liberation DMG) and switch to Lunar Cycle - Half Moon.
Heavy Attack - Flux: Moonring can be cast in mid-air.

Heavy Attack - Absolute Fullness
When Iuno's Concerto Energy is full, her Heavy Attack is replaced with Absolute Fullness.
Casting Absolute Fullness ends Lunar Cycle, provides healing for nearby Resonators in the team, deals Aero DMG to nearby targets (considered as Resonance Liberation DMG), and conjures a Full Moon domain at her location. This effect can be triggered once every 25s.
Can be cast in mid-air.

Full Moon Domain
Resonators inside the domain periodically restore  HP and STA.
Gaining a Shield inside the domain grants 1 stack of Blessing of the Wan Light. This effect can be triggered once every 0.5s.

Blessing of the Wan Light
The receiving Resonator gains 4% all DMG Amplification for 10s, stacking up to 10 times. Gaining new stacks resets the duration. This effect ends early if the receiving Resonator is switched off the field.

Sentience
Iuno can hold up to 100 points of Sentience.
Casting Intro Skill restores 40 points of Sentience.
Casting Resonance Liberation restores 60 points of Sentience.
Casting Closing Refrain or Unfinished Refrain restores 25 points of Sentience.
When Iuno is in Lunar Cycle, Moonring - Basic Attack, Moonring - Dodge Counter, and Mid-air Attack restore Sentience on hit.

Short Summary

Lunar Cycle
Iuno can activate Lunar Cycle by casting Resonance Skill - Closing Refrain or Resonance Liberation.
Lunar Cycle has two states: Half Moon and New Moon. Iuno switches states when she Jumps.
Half Moon: Attack with Moonring, restoring Sentience on hit.
New Moon: Attack with Moonbow, consuming Sentience to increase DMG, restore additional Concerto Energy, and heal nearby Resonators in the team.

Heavy Attack - Absolute Fullness
When Iuno's Concerto Energy is full, her Heavy Attack is replaced with Absolute Fullness.
Casting Absolute Fullness heals nearby Resonators, deals Aero DMG to targets nearby and conjures a Full Moon Domain at her location.
Resonators inside the Full Moon Domain periodically restore HP and STA. Gaining a Shield inside the domain grants 1 stack of Blessing of the Wan Light, which grants 4% all DMG Amplification for the receiving Resonator, stacking up to 10 times.

Sentience
Iuno restores Sentience upon casting Intro Skill, Resonance Liberation Closing Refrain or Unfinished Refrain.
When Iuno hits a target in Half Moon, she restores Sentience.

### Utility Passive

- Internal skill id: `1003808`
- Name: `S`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Skill Placeholder

### Outro Skill

- Internal skill id: `1003809`
- Name: `From Gloom to Gleam`

Description

Attack the target to deal {0} Aero DMG. The incoming Resonator gains {1} Heavy Attack DMG Amplification for {2}s. This effect ends early if they are switched off the field.
Casting Outro Skill won't interrupt Heavy Attack - Absolute Fullness, and the Outro Skill effect still applies.

Short Summary

Deal {0} Aero DMG. The incoming Resonator gains {1} Heavy Attack DMG Amplification. This effect ends early if they are switched off the field.
