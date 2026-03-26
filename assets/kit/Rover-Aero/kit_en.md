# Rover-Aero Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Rover-Aero`
- Skill base id: `10032`
- Localized range used: `418000000-450000000`

## Keywords

### Windstring

Rover can hold up to 120 Windstrings.
Each stage of Mid-air Attack Cloudburst Dance restores 25 Windstrings on hit.
Casting Intro Skill restores 20 Windstrings.
Hitting a target with Basic Attack Stage 3 or 4 or Dodge Counter restores 10 Windstrings.

### Spectro Frazzle

- While Spectro Frazzle lasts, it deals periodic Spectro DMG to the target. The target loses 1 stack of the effect with each instance of damage.
- The DMG of Spectro Frazzle scales with its stacks.

### Havoc Bane

- While Havoc Bane lasts, the DEF of the inflicted target is reduced.
- Havoc Bane stacks up to 3 times by default. Each stack reduces the target's DEF by 2%.

### Fusion Burst

- When Fusion Burst is stacked to its max, all stacks will be removed to trigger an explosion, dealing Fusion DMG to the target and nearby enemies.
- Fusion Burst stacks up to 10 times by default. The higher the stacks, the more DMG dealt.

### Glacio Chafe

- Glacio Chafe deals Glacio DMG when being inflicted on the target.
- Each stack of Glacio Chafe reduces the target's movement speed.
- When Glacio Chafe is stacked to its max, the target will be frozen, and all stacks of Glacio Chafe will be removed. Struggle to accelerate your recovery from the frozen state.
- Glacio Chafe stacks up to 10 times by default. The higher the stacks, the more DMG dealt, and the longer frozen duration.

### Electro Flare

- While Electro Flare lasts, it deals periodic Eletro DMG to the target. The target loses half of the effect stacks with each instance of damage.
- At maximum stacks of Electro Flare, any new stack inflicted becomes stackable Electro Rage.
- Electro Rage increases the DMG dealt by the next Electro Flare trigger. This effect is removed once triggered.
- Electro Flare and Electro Rage stack up to 10 times by default. The higher the stacks, the more DMG dealt.

### Aero Erosion

- While Aero Erosion lasts, it deals periodic Aero DMG to the target.
- The DMG of Aero Erosion scales with its stacks.

## Skills

### Basic Attack

- Internal skill id: `1003201`
- Name: `Wind Cutter`

Description

Basic Attack
Perform up to 4 consecutive attacks, dealing Aero DMG.

Heavy Attack
Consume STA to attack the target, dealing Aero DMG.
- {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting the skill to perform Basic Attack Stage 3 directly.

Heavy Attack - Razor Wind
Hold Normal Attack after casting Basic Attack Stage 3, Dodge Counter, or Heavy Attack to cast Heavy Attack Razor Wind. Consume STA to attack the target, dealing Aero DMG.

Mid-air Attack
Consume STA to perform Plunging Attack, dealing Aero DMG.
- {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after landing to cast Basic Attack Stage 4.
- At max Windstrings, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack shortly after landing to cast Resonance Skill Unbound Flow.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge to attack the target, dealing Aero DMG.

Short Summary

Basic Attack
Deal Aero DMG.

Heavy Attack
Consume STA to deal Aero DMG.

Heavy Attack - Razor Wind
Hold Normal Attack after casting Basic Attack Stage 3, Dodge Counter, or Heavy Attack to deal Aero DMG at the cost of STA.

Mid-air Attack
Consume STA to deal Aero DMG.

Dodge Counter
Deal Aero DMG.

### Resonance Skill

- Internal skill id: `1003202`
- Name: `Illusion Breaker`

Description

Awakening Gale
Jump up into the mid-air and slash the target, dealing Aero DMG.

Skyfall Severance
While in mid-air, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill to deal Aero DMG, which removes all stacks of Spectro Frazzle, Havoc Bane, Fusion Burst, Glacio Chafe, and Electro Flare from the target hit and inflicts 1 stack of Aero Erosion for each stack removed.

Short Summary

Awakening Gale
Deal Aero DMG.

Skyfall Severance
While in mid-air, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill to deal Aero DMG, which removes all stacks of Spectro Frazzle, Havoc Bane, Fusion Burst, Glacio Chafe, and Electro Flare from the target hit and inflicts 1 stack of Aero Erosion for each stack removed.

### Resonance Liberation

- Internal skill id: `1003203`
- Name: `Omega Storm`

Description

Unleash the power of the Eye of Tempest, dealing Aero DMG and healing all nearby Resonators in the team.
Can be cast in mid-air close to the ground.

Short Summary

Deal Aero DMG and heal all nearby Resonators in the team.
Can be cast in mid-air close to the ground.

### Inherent Skill 1

- Internal skill id: `1003204`
- Name: `Sand in the Storm`

Description

Casting Intro Skill Relentless Squall increases ATK by {0} for {1}s.

Short Summary

Casting Intro Skill increases ATK by {0} for {1}s.,

### Inherent Skill 2

- Internal skill id: `1003205`
- Name: `Boundless Windsw`

Description

Increase Healing from Resonance Liberation Omega Storm by {0}.

Short Summary

Increase Healing from Resonance Liberation by {0}.

### Intro Skill

- Internal skill id: `1003206`
- Name: `Relentless Squall`

Description

Deal Aero DMG.

Short Summary

Deal Aero DMG.,

### Forte Circuit

- Internal skill id: `1003207`
- Name: `Cycle of Wind`

Description

Mid-air Attack - Cloudburst Dance
Perform up to 2 consecutive attacks, dealing Aero DMG (considered Resonance Skill DMG) and healing all nearby Resonators in the team. Cast through the following 3 ways:
- {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting Resonance Skill Awakening Gale.
- {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting Intro Skill.
- {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting Heavy Attack Razor Wind.
When casting Mid-air Attack Cloudburst Dance, hold Normal Attack to perform Mid-air Attack.

Resonance Skill - Unbound Flow
At max Windstrings, Resonance Skill Awakening Gale becomes Resonance Skill Unbound Flow: Perform up to 2 consecutive attacks. Each attack consumes 60 Windstrings, dealing Aero DMG, considered Resonance Skill DMG.
Switching to another Resonator after Stage 1 automatically triggers Stage 2 of this skill.

Windstring
Rover can hold up to 120 Windstrings.
Each stage of Mid-air Attack Cloudburst Dance restores 25 Windstrings on hit.
Casting Intro Skill restores 20 Windstrings.
Hitting a target with Basic Attack Stage 3 or 4 or Dodge Counter restores 10 Windstrings.

Short Summary

Mid-air Attack - Cloudburst Dance
After casting Resonance Skill Awakening Gale, Intro Skill, or Heavy Attack Razor Wind, Rover can cast Mid-air Attack Cloudburst Dance, dealing Aero DMG and healing all nearby Resonators in the team.

Resonance Skill - Unbound Flow
Mid-air Attack Cloudburst Dance, Intro Skill, Normal Attack, and Dodge Counter restore Windstrings.
At max Windstrings, Rover can cast Resonance Skill Unbound Flow to deal Aero DMG.
(

### Utility Passive

- Internal skill id: `1003208`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1003209`
- Name: `Storm's Echo`

Description

Grant Aeolian Realm to all nearby Resonators in the team for {0}s. Aeolian Realm effect:
- Upon hitting a target, increase the maximum stack of Aero Erosion the target can receive by {1} for {2}s. This effect is not stackable.

Short Summary

All nearby Resonators in the team can increase the maximum stacks of Aero Erosion the target can receive by {1} upon hit.
