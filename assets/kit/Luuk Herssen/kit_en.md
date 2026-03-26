# Luuk Herssen Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Luuk Herssen`
- Skill base id: `10047`
- Localized range used: `418000000-450000000`

## Keywords

### Tune Strain - Shifting

Certain Resonators can inflict Tune Strain - Shifting on the target. During this state, if the affected target is hit by Tune Break, their Tune Strain - Shifting state is replaced with Tune Strain - Interfered.

### Endnotes on the Endgame

Casting any form of Resonance Skill Aureole of Execution grants <SapTag=0>{0}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=0} of Endnotes on the Endgame, which increases the DMG Multiplier of Resonance Liberation Rewritten in Winter's Margins by {2}, stacking up to {1} times. Casting Resonance Liberation Rewritten in Winter's Margins or switching to another Resonator removes all stacks.

### Ichor Blade

Deal fixed Spectro DMG, considered Basic Attack DMG that is not affected by any DMG Bonus.
Only one Ichor Blade can exist at a time. It cannot trigger Counterattack.
Ichor Blade cannot be launched without a nearby target.
Ichor Blade disappears when Luuk Herssen casts other skills that deal damage or leaves the field.

### Tune Strain - Interfered

A target enters this state when they are hit by Tune Break under the Tune Strain - Shifting state. Resonators who can respond to Tune Strain - Interfered cause additional effects when attacking targets in this state. Tune Strain - Interfered lasts for 30s.

### Tune Break

When the target's Off-Tune Level is maxed, they enter the Mistune state:
The active Resonator in the team may perform Tune Break Skill on the target, dealing DMG and causing the target to leave the Mistune state.
If the target is of the Common Class, Resonators in the team may directly deal Tune Break DMG with some of their regular skills on hit. The target leaves the Mistune state afterward.

### Ichor Deposit

Ichor Deposit detonates automatically after {0}s, dealing Spectro DMG, considered Basic Attack DMG.

## Skills

### Basic Attack

- Internal skill id: `1004701`
- Name: `Such is Light`

Description

Basic Attack
Perform up to 4 consecutive attacks, dealing Spectro DMG.
Hurl out a whirling blade on Stage 3, which disappears when Luuk Herssen casts other skills that can deal damage or leaves the field.

Heavy Attack
Consume STA to jump into the air, dealing Spectro DMG.

Mid-air Attack
Perform up to 4 consecutive attacks in mid-air, dealing Spectro DMG. Stage 4 is a Plunging Attack at the cost of STA.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack or Jump to perform Basic Attack Stage {0} and 3 in mid-air.
Luuk Herssen attacks with Scythe: Dissection when the input is Normal Attack.
Luuk Herssen attacks with Scythe: Resection when the input is Jump. He also inflicts Tune Strain - Shifting on the target hit for {1}s and reduces DMG taken by {3} for {2}s.
As the active Resonator, while in mid-air, this skill's cycle will not be reset.
While in mid-air, hold Normal Attack to perform a Plunging Attack at the cost of STA.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge on the ground to deal Spectro DMG. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting this skill to cast Basic Attack Stage 3.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge in mid-air to flash toward the target, dealing Spectro DMG.

Short Summary

Basic Attack
Deal Spectro DMG.

Heavy Attack
Consume STA to deal Spectro DMG.

Mid-air Attack
Deal Spectro DMG.
Hold Normal Attack to perform a Plunging Attack, dealing Spectro DMG.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge to deal Spectro DMG.

### Resonance Skill

- Internal skill id: `1004702`
- Name: `Reunion of All the Fallen`

Description

Golden Reflux
Flash toward the target and deal Spectro DMG. Inflict Tune Strain - Shifting on the target hit for 25s.
Golden Reflux has 2 charges.
Can be cast in mid-air.

Aureole of Execution
Casting Basic Attack Stage 4 or Mid-air Attack Stage 3 replaces Resonance Skill with Aureole of Execution, which deals Basic Attack DMG and inflicts Tune Strain - Shifting on the target hit for 25s.
Aureole of Execution has {0} forms, including Aureole of Execution: Ring, Aureole of Execution: Breach, and Aureole of Execution: Glare.
Casting any form of Aureole of Execution grants <SapTag=1>{1}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=1} of Endnotes on the Endgame and switches Aureole of Execution to the next form in sequence.
Switching to another Resonator resets the cycle of Aureole of Execution and Resonance Skill is reset to Golden Reflux.
Can be cast in mid-air.

Aureole of Execution: Ring
Deal Spectro DMG, and reset the Mid-air Attack cycle to Stage 1.
The next Normal Attack triggers Basic Attack - Golden Impale.
Basic Attack - Golden Impale is no longer available if Dodge Counter is cast in mid-air or Luuk Herssen is switched out in the duration.

Aureole of Execution: Breach
Spin and dash forward, dealing Spectro DMG to enemies along the path and resetting the Mid-air Attack cycle to Stage 1. Then, hurl out an Ichor Blade.
The next Normal Attack triggers Basic Attack - Golden Impale.
Basic Attack - Golden Impale is no longer available if Dodge Counter is cast in air or Luuk Herssen is switched out in the duration.

Aureole of Execution: Glare
Hurl out Solid-State Ichor, dealing Spectro DMG and forming an Ichor Deposit on the ground.

Basic Attack - Golden Impale
Flash toward the target and deal Spectro DMG, considered Basic Attack DMG.

Ichor Deposit
Ichor Deposit detonates automatically after {3}s, dealing Spectro DMG, considered Basic Attack DMG.

Endnotes on the Endgame
Increase the DMG Multiplier of Resonance Liberation Rewritten in Winter's Margins by {4}, stacking up to {2} times. Casting Rewritten in Winter's Margins or switching to another Resonator removes all stacks.

Short Summary

Resonance Skill
Deal Spectro DMG and inflict Tune Strain - Shifting. The skill has 2 charges.

Enhanced Resonance Skill
Enhanced Resonance Skill becomes available right after casting Basic Attack Stage 4 or Mid-air Attack Stage 3, which deals Spectro DMG that's considered Basic Attack DMG, inflicts Tune Strain - Shifting, and increases Luuk Herssen's Resonance Liberation DMG, stacking up to 3 times.
Enhanced Resonance Skill has 3 forms, which rotate in sequence each time Enhanced Resonance Skill is cast.

### Resonance Liberation

- Internal skill id: `1004703`
- Name: `Rewritten in Winter's Margins`

Description

Deal Spectro DMG, considered Basic Attack DMG.
Can be cast in mid-air.

Short Summary

Deal Spectro DMG, considered Basic Attack DMG.

### Inherent Skill 1

- Internal skill id: `1004704`
- Name: `Pulses Under the Snow`

Description

When Resonators in the team directly damage and defeat targets, if the targets are affected by Tune Strain - Interfered:
- If Luuk Herssen has no Perpetuating Daytime, gain stacks of Perpetuating Daytime equal to the stacks of Tune Strain - Interfered.
- If Luuk Herssen already has Perpetuating Daytime, and the target's stacks of Tune Strain - Interfered exceed the current stacks of Perpetuating Daytime, increase Perpetuating Daytime's stacks to match the target's Tune Strain - Interfered stacks.

Perpetuating Daytime
- When Resonators in the team casts Tune Break, if the target is affected by Tune Strain - Shifting,  Luuk Herssen loses all stacks of Perpetuating Daytime, then apply equal stacks of Tune Strain - Interfered on the target, up to the target's current Tune Strain - Interfered stack cap. Cooldown: {1}s.
Luuk Herssen loses all stacks of Perpetuating Daytime and will not be able to obtain any new stacks when knocked out.
- Perpetuating Daytime stacks up to {0} times.

Short Summary

Luuk Herssen reserves the stacks of Tune Strain - Interfered on the target when Resonators in the team defeat a target affected by Tune Strain - Interfered.
When Resonators in the team casts Tune Break on targets affected by Tune Strain - Shifting, Luuk Herssen inflicts the reserved stacks of Tune Strain - Interfered on the target.

### Inherent Skill 2

- Internal skill id: `1004705`
- Name: `Uncaused Diagnosis`

Description

When Luuk Herssen's skills directly damage targets affected by Tune Strain - Interfered, every {0} points of Tune Break Boost he has Amplifies this instance of damage by {1}, up to {2}.
After any nearby Resonator in the team inflicts Tune Strain - Shifting on the enemies or deals Tune Break DMG, Luuk Herssen's ATK increases by {3} for {4}s.

Short Summary

Luuk Herssen's skills that directly damage the targets deal more DMG to targets affected by Tune Strain - Interfered with higher Tune Break Boost.
After any nearby Resonators in the team inflict Tune Strain - Shifting or Tune Break DMG, Luuk Herssen's ATK increases.

### Intro Skill

- Internal skill id: `1004706`
- Name: `Before Injection of Dawn`

Description

Deal Spectro DMG. Hurl out an Ichor Blade and inflict Tune Strain - Shifting on the target.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack after this skill to cast Mid-air Attack Stage 2 - Scythe: Dissection or Jump to cast Mid-air Attack Stage 2 - Scythe: Resection.

Short Summary

Deal Spectro DMG and inflict Tune Strain - Shifting.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack or Jump after casting this skill to cast Mid-air Attack Stage 2.

### Forte Circuit

- Internal skill id: `1004707`
- Name: `Spark from the Frost`

Description

Mid-air Attack - Gavel of Earthshaker
When the Solid-State Ichor of Resonance Skill Aureole of Execution: Glare is hurled out, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack in mid-air to cast Mid-air Attack - Gavel of Earthshaker.
Slam down from the air to detonate the Ichor Deposit, dea

Short Summary

Mid-air Attack - Gavel of Earthshaker
After casting Enhanced Resonance Skill - Form III, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack in mid-air to slam down, dealing Spectro DMG (considered Basic Attack DMG).

Aureate Judge
Certain skills restore Forte Gauge. When Forte Gauge is full, the DMG Multipliers increase for all Enhanced Resonance Skills.

Golden Rule
When other Resonators in the team cast Outro Skill and Luuk Herssen is the incoming Resonator, he additionally restores Forte Gauge and Concerto Energy. This effect has a cooldown of {0}s.

Dawnlit Keep
Luuk Herssen gains {2} stack of Dawnlit Keep when he stays out of combat for over {1}s or casts Intro Skill, which reduces DMG taken and grants immunity to interruptions for a time.

Radiant Reave
Hurl out a whirling blade to attack when Dodging in mid-air, dealing fixed Spectro DMG./

### Utility Passive

- Internal skill id: `1004708`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1004709`
- Name: `Bow to the Last Lighti`

Description

Deal Spectro DMG equal to {0} of Luuk Herssen's ATK.

Short Summary

Deal Spectro DMG.

### Special Skill 10

- Internal skill id: `1004710`
- Name: `Silent Debate of Light`

Description

Luuk Herssen can inflict Tune Strain - Shifting on targets.
Luuk Herssen can respond to Tune Strain - Interfered.
When responding to Tune Strain - Interfered: For each stack of Tune Strain - Interfered on the target, each point of Luuk Herssen's Tune Break Boost increases his total DMG against the target by {1}. While Luuk Herssen is in the team, the max stack limit of Tune Strain - Interfered on a target is increased by {2}.
When the target's Off-Tune Level is full, Luuk Herssen can cast Tune Break on the target.

Short Summary

Luuk Herssen can inflict Tune Strain - Shifting.
Luuk Herssen can respond to Tune Strain - Interfered.
