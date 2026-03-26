# Aemeath Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Aemeath`
- Skill base id: `10046`
- Localized range used: `418000000-450000000`

## Keywords

### Instant Response

While in Instant Response, Heavy Attack - Aemeath and Heavy Attack - Mech take less time to charge up fully.
- When in Instant Response and Heavenfall Edict: Unbound at the same time, casting Heavy Attack - Aemeath Charged II or Heavy Attack - Mech Charged II restores {0} points of Synchronization Rate.
- If Inherent Skill Before All Sounds is activated, while in Instant Response, Heavy Attack - Aemeath and Heavy Attack - Mech gain {2} DMG Amplification.

### Stardust Resonance

Stardust Resonance enhances the effect of Resonance Skill Seraphic Duet based on Aemeath's current Resonance Mode:
- While in Resonance Mode - Tune Rupture, now up to {0} instances of Tune Rupture DMG can be triggered during Resonance Skill Seraphic Duet.
- While in Resonance Mode - Fusion Burst, the DMG Multiplier of Fusion Burst that is actively triggered during Resonance Skill Seraphic Duet against the main target of Fusion Burst is increased by {1}. This DMG Multiplier increase effect is stackable with that provided by Fusion Trail.

### Heavenfall Edict: Unbound

Heavenfall Edict: Overdrive is replaced with Heavenfall Edict: Finale.
When in Heavenfall Edict: Unbound and Resonance Rate reaches the limit, enter Instant Response. Instant Response is removed when the Heavenfall Edict: Unbound state ends.

### Seraphic Duet

Includes Seraphic Duet: Overture and Seraphic Duet: Encore.

### Rupturous Trail

- When in Resonance Mode - Tune Rupture, Resonance Skill Seraphic Duet removes Rupturous Trail stacks on nearby targets and additionally deals {2} instances of Tune Rupture DMG, each time to a random target within range. For each stack of Rupturous Trail removed from a target, the DMG Multiplier of Tune Rupture triggered by Seraphic Duet against the target is increased by {0}. This effect lasts for {1}s. The target's Off-Tune Level does not affect the triggering of these instances of Tune Rupture DMG.

### Fusion Trail

- When in Resonance Mode - Fusion Burst, Resonance Skill Seraphic Duet removes the Fusion Trail stacks on targets if they are inflicted with Fusion Trail, and trigger the Fusion Trail on the target based on its max stack limit without removing its stacks. Each stack of Fusion Trail removed from the target increases the DMG Multiplier of Fusion Trail on the main target by {0}.

### Resonance Rate

Resonance Rate is capped at {0} points.
- Casting Resonance Skill Seraphic Duet recovers {1} point of Resonance Rate.
- Casting Resonance Liberation Heavenfall Edict: Overdrive recovers {2} point of Resonance Rate.
- When in Starlume Acceleration, casting Resonance Liberation Heavenfall Edict: Overdrive additionally recovers {3} point of Resonance Rate.(

### Synchronization Rate

Synchronization Rate is capped at {0} points.
- Dealing damage with Basic Attack - Aemeath, Mid-air Attack - Aemeath, Dodge Counter - Aemeath, Basic Attack - Mech, Mid-air Attack - Mech, Dodge Counter - Mech, Resonance Skill Sync Strike: Armament Merge, and Resonance Skill Sync Strike: Call of Dawn recovers Synchronization Rate.
- Casting Intro Skill Songs Across the Universe or Debut of Meteoric Radiance recovers {1} points of Synchronization Rate.
- Casting Resonance Liberation Heavenfall Edict: Overdrive recovers {2} points of Synchronization Rate.
- When in Instant Response and Heavenfall Edict: Unbound at the same time, casting Heavy Attack - Aemeath Charged II or Heavy Attack - Mech Charged II recovers {3} points of Synchronization Rate.

### Tune Rupture - Shifting

Certain Resonators can inflict Tune Rupture - Shifting on the target. During this state, if the affected target is hit by Tune Break, their Tune Rupture - Shifting state is replaced with Tune Rupture - Interfered.

### Fusion Burst

- When Fusion Burst is stacked to its max, all stacks will be removed to trigger an explosion, dealing Fusion DMG to the target and nearby enemies.
- Fusion Burst stacks up to 10 times by default. The higher the stacks, the more DMG dealt.

### Starlume Acceleration

When in Starlume Acceleration, casting Resonance Liberation Heavenfall Edict: Overdrive additionally recovers Resonance Rate.

### Tune Break

When the target's Off-Tune Level is maxed, they enter the Mistune state:
The active Resonator in the team may perform Tune Break Skill on the target, dealing DMG and causing the target to leave the Mistune state.
If the target is of the Common Class, Resonators in the team may directly deal Tune Break DMG with some of their regular skills on hit. The target leaves the Mistune state afterward.

### Tune Rupture - Interfered

A target enters this state when they are hit by Tune Break under the Tune Rupture - Shifting state. Resonators who can respond to Tune Rupture- Interfered cause additional effects when attacking targets in this state. Tune Rupture- Interfered lasts for 8s.

## Skills

### Basic Attack

- Internal skill id: `1004601`
- Name: `Infinity Calibration`

Description

Basic Attack - Aemeath
Perform up to 4 consecutive attacks, dealing Fusion DMG.

Heavy Attack - Aemeath
Hold Normal Attack to charge the attack by consuming STA, release to cast Heavy Attack - Aemeath: Charged I, dealing Fusion DMG.
Hold Normal Attack longer to cast Heavy Attack - Aemeath: Charged II, dealing higher Fusion DMG.
When in Instant Response, Heavy Attack - Aemeath: Charged II charges more quickly. Casting Heavy Attack - Aemeath: Charged II, Heavy Attack - Mech: Charged II, or Resonance Liberation Heavenfall Edict: Finale ends Instant Response.
This Skill DMG is considered Resonance Liberation DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Heavy Attack - Aemeath: Charged I to cast Basic Attack - Aemeath Stage 2.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Heavy Attack - Aemeath: Charged II to cast Basic Attack - Aemeath Stage 3.

Mid-air Attack - Aemeath
Consume STA to perform a Plunging Attack, dealing Fusion DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Basic Attack - Aemeath Stage 2.

Dodge Counter - Aemeath
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after a successful Dodge to attack the target, dealing Fusion DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Basic Attack - Aemeath Stage 4.

Short Summary

Basic Attack
Deal Fusion DMG.

Heavy Attack
Deal Fusion DMG. Hold Normal Attack to charge the attack, dealing increased Fusion DMG.
This Skill DMG is considered Resonance Liberation DMG.

### Resonance Skill

- Internal skill id: `1004602`
- Name: `Shared Voyage`

Description

Form Switch
Aemeath can switch forms between herself and her Mech. The Mech inherits Aemeath's Stats and unlocks new moves.
Aemeath automatically casts Basic Attack - Stage 1 upon casting Form Switch.
While in the Mech form, Aemeath casts Mid-air Attack automatically upon casting Form Switch in mid-air.
</size

Short Summary

Form Switch
Aemeath can switch forms between herself and her Mech. The Mech inherits Aemeath's Stats and unlocks new moves.

Sync Strike
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Resonance Skill shortly after casting Basic Attack - Stage 2, 3 & 4 to cast Sync Strike, dealing Fusion DMG and switching to the other form.

### Resonance Liberation

- Internal skill id: `1004603`
- Name: `Towards the Daybreak`

Description

Heavenfall Edict - Overdrive
Deal Fusion DMG. Switch into Mech form after casting this skill.
Can be cast in mid-air close to the ground.
Casting this skill grants the following effects:
- Enter Stardust Resonance for {0}s.
- Enter Heavenfall Edict: Unbound for {1}s.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Basic Attack - Mech Stage 2.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Resonance Skill to perform Resonance Skill Form Switch shortly after casting this skill to cast Basic Attack - Aemeath Stage 2.
The next Seraphic Duet cast within {2}s after casting this skill doesn't consume Rupturous Trail/Fusion Trail.

Stardust Resonance
Enhance the effect of Resonance Skill Seraphic Duet.
This effect ends after Seraphic Duet is cast {3} times.

Heavenfall Edict - Unbound
Heavenfall Edict - Overdrive is replaced with Heavenfall Edict - Finale.
When in Heavenfall Edict - Unbound and Resonance Rate reaches the limit, enter Instant Response. Instant Response is removed when the Heavenfall Edict - Unbound state ends.

Heavenfall Edict - Finale
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Resonance Skill or Resonance Liberation to cast Heavenfall Edict: Finale when the following conditions are met:
- Be in the Heavenfall Edict: Unbound state.
- Synchronization Rate reaches the limit.
- Resonance Rate reaches the limit.
Casting this skill depletes all Synchronization Rate and Resonance Rate, dealing Fusion DMG, and ends the Heavenfall Edict: Unbound state and Seraphic Duo state.
Switch back to Aemeath after casting this skill.
Can be cast in mid-air close to the ground.

Short Summary

Resonance Liberation
Deal Fusion DMG. Switch into the Mech form after casting this skill and unlock the Resonance Liberation Finisher.
Casting this skill sends Aemeath into the Enhanced Sync Attack Boost state.

When Resonance Liberation Finisher is unlocked and Resonance Rate reaches the limit, enter the Heavy Attack Boost state. In this state, Heavy Attack charges faster and recovers Synchronization Rate to the max.

Enhanced Sync Attack Boost
The next {0} Enhanced Sync Attacks grant the following effects:
- When in Resonance Mode - Tune Rupture, Enhanced Sync Attack increases the additional instances of Tune Rupture DMG dealt.
- When in Resonance Mode - Fusion Burst, the DMG Multiplier of Fusion Burst triggered by Enhanced Sync Attack is additionally increased against the main target.

Resonance Liberation Finisher
When both Synchronization Rate and Resonance Rate reach the limit, Resonance Liberation Finisher becomes available, dealing massive Fusion DMG and switching back to Aemeath form.

### Inherent Skill 1

- Internal skill id: `1004604`
- Name: `Before All Sounds`

Description

In Instant Response, Heavy Attack - Aemeath and Heavy Attack - Mech gain {0} DMG Amplification.

Short Summary

In Heavy Attack Boost state, Heavy Attack gains DMG Amplification.

### Inherent Skill 2

- Internal skill id: `1004605`
- Name: `Between the Stars`

Description

In Resonance Mode - Tune Rupture, when Resonators in the team inflict Tune Rupture - Shifting or deal Tune Rupture DMG, Aemeath's Crit. DMG increases by {0}, up to {1} times. Each Resonator can only trigger this effect once.
With {2} stacks, Resonance Liberation Heavenfall Edict: Finale DMG is Amplified by {3}.
Resonators joining the team or switching Resonance Mode resets this effect.

In Resonance Mode - Fusion Burst, when Resonators in the team inflict Fusion Burst, Aemeath's Crit. DMG increases by {4}, up to {5} times. Each Resonator can only trigger this effect once.
With {6} stacks, Resonance Liberation Heavenfall Edict: Finale DMG is Amplified by {7}.
Resonators joining the team or switching Resonance Mode resets this effect.

Short Summary

In Resonance Mode - Tune Rupture, Aemeath's Crit. DMG increases when Resonators in the team inflict Tune Rupture - Shifting or deal Tune Rupture DMG. Each Resonator can only trigger this effect once. After triggering this effect {0} times, Resonance Liberation Finisher DMG is Amplified.

In Resonance Mode - Fusion Burst, Aemeath's Crit. DMG increases when Resonators in the team inflict Fusion Burst. Each Resonator can only trigger this effect once. After triggering this effect {1} times, Resonance Liberation Finisher DMG is Amplified.

### Intro Skill

- Internal skill id: `1004606`
- Name: `Overture of Departure`

Description

Songs Across the Universe
Deal Fusion DMG.
Cast this skill to enter Starlume Acceleration for {0}s.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Basic Attack - Aemeath Stage 3.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Resonance Skill and cast Resonance Skill Form Switch shortly after casting this skill to cast  Basic Attack - Mech Stage 3 automatically.

Debut of Meteoric Radiance
In the Mech form, Songs Across the Universe is replaced with Debut of Meteoric Radiance.
Deal Fusion DMG.
Casting this skill grants Starlume Acceleration for {0}s.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Basic Attack - Mech Stage 3.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Resonance Skill and cast Resonance Skill Form Switch shortly after casting this skill to cast Basic Attack - Aemeath Stage 3 automatically.

Starlume Acceleration
In Starlume Acceleration, casting Resonance Liberation Heavenfall Edict: Overdrive addtionally restores Resonance Rate.
Casting Resonance Liberation Heavenfall Edict: Overdrive ends Starlume Acceleration.

Short Summary

Deal Fusion DMG.
After casting this skill, the next Resonance Liberation additionallty recovers Resonance Rate.

### Forte Circuit

- Internal skill id: `1004607`
- Name: `To Sculpt the Silence`

Description

Seraphic Duo
When casting Basic Attack - Aemeath Stage 4 or Basic Attack - Mech Stage 4, enter Seraphic Duo for {1}s.

Resonance Skill - Seraphic Duet: Overture
When Aemeath is in Seraphic Duo and the Synchronization Rate is no less than {0} points, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill to cast Resonance Skill Seraphic Duet: Overture at the cost of {29} points of Synchronization Rate, dealing Fusion DMG, considered Resonance Liberation DMG.
Can be cast in mid-air close to the ground.
Switch into the Mech form after casting this skill and exit Seraphic Duo. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain period of time to cast Basic Attack - Mech Stage 2.

Resonance Skill - Seraphic Duet: Encore
In the Mech form, when in Seraphic Duo an

Short Summary

Synchronization Rate
- Recover Synchronization Rate when specific skills deal damage or Aemeath casts Intro Skill or Resonance Liberation.
If Synchronization Rate is no less than {0} points, Enhanced Sync Attack is available within a short duration after casting Basic Attack Stage 4.

Resonance Mode
- In Resonance Mode - Tune Rupture, when Resonators in the team respond to Tune Rupture - Interfered, inflict Rupturous Trail.
- In Resonance Mode - Fusion Burst, when Resonators in the team inflict Fusion Burst, inflict Fusion Trail.

Enhanced Sync Attack
Deal Fusion DMG. This DMG is considered Resonance Liberation DMG.
- When in Resonance Mode - Tune Rupture, deal more instances of Tune Rupture DMG, each time to a random target within range. The DMG increases with the number of the stacks of Rupturous Trail on the target.
- When in Resonance Mode - Fusion Burst, trigger Fusion Burst based on the max stack limit of Fusion Burst without removing its stacks. The DMG Multiplier against the main target is increased based on the stacks of Fusion Trail on the target.

Resonance Rate
Enhanced Sync Attack and Resonance Liberation recover Resonance Rate.

### Utility Passive

- Internal skill id: `1004608`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1004609`
- Name: `Silent Protection`

Description

When casting this skill, the following effects are triggered based on the Resonance Mode Aemeath is in:
- In Resonance Mode - Tune Rupture: all Resonators in the team except Aemeath gain {0} All-DMG Amplification for {1}s. The All-DMG Amplification effect is increased to {2} for Resonators who inflict Tune Rupture - Shifting.
- In Resonance Mode - Fusion Burst: all Resonators in the team except Aemeath gain {0} All-DMG Amplification for {1}s. The All-DMG Amplification effect is increased to {2} for Resonators who inflict Fusion Burst.
Casting this skill resets the effects above.

Short Summary

When casting this skill, the following effects are triggered based on the Resonance Mode Aemeath is in:
- In Resonance Mode - Tune Rupture: all Resonators in the team except Aemeath gain All-DMG Amplification. The All-DMG Amplification effect further increases for Resonators who inflict Tune Rupture - Shifting.
- In Resonance Mode - Fusion Burst: all Resonators in the team except Aemeath gain All-DMG Amplification. The All-DMG Amplification effect further increases for Resonators who inflict Fusion Burst.

### Special Skill 10

- Internal skill id: `1004610`
- Name: `Unlanded Melody`

Description

When the target's Off-Tune Level is full, Aemeath can cast Tune Break on the target.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Tune Break to cast Basic Attack Stage 3.

Responding to Tune Rupture - Interfered: when Resonators in the team trigger Tune Break on the target and cause them to be affected by Tune Rupture - Interfered, Aemeath triggers Tune Rupture Response - Starburst. The same target can only be damaged by this skill once every {0}s.

Short Summary

When the target's Off-Tune Level is full, Aemeath can cast Tune Break on the target.

When in Resonance Mode - Tune Rupture, Aemeath gains the following effects:
- Aemeath can inflict Tune Rupture - Shifting on the target.
- Aemeath can respond to Tune Rupture - Shifting.
