# Cartethyia Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Cartethyia`
- Skill base id: `10035`
- Localized range used: `418000000-450000000`

## Keywords

### Aero Erosion

- While Aero Erosion lasts, it deals periodic Aero DMG to the target.
- The DMG of Aero Erosion scales with its stacks.

### Sword of Divinity's Shadow

Casting Mid-air Attack - Cartethyia recalls all Sword Shadows and, based on the number and types of the Sword Shadows recalled, perform the specific forms of Plunging Attack and obtain the corresponding Heart of Virtue, Mandate of Divinity, and Power of Discord.

### Sword of Discord's Shadow

Casting Mid-air Attack - Cartethyia recalls all Sword Shadows and, based on the number and types of the Sword Shadows recalled, perform the specific forms of Plunging Attack and obtain the corresponding Heart of Virtue, Mandate of Divinity, and Power of Discord.,

### Heart of Virtue

When Fleurdelys has Heart of Virtue in Manifest:
- Basic Attack - Fleurdelys Stage 4 will generate a force field to Stagnate the targets within the range.
- Fleurdelys's resistance to interruption increases.
- Heart of Virtue is removed when Manifest ends.

### Mandate of Divinity

When Fleurdelys has Mandate of Divinity in Manifest:
Aero Erosion DMG is Amplified by 50% and its damage interval is decreased by 50% for enemies within a certain distance from Fleurdelys.
Mandate of Divinity is removed when Manifest ends.

### Power of Discord

When Fleurdelys has Power of Discord in Manifest, gain the following effect:
When casting Basic Attack - Fleurdelys Stage 5, Mid-air Attack - Fleurdelys Stage 2, Enhanced Heavy Attack - Fleurdelys, or after Resonance Skill - May Tempest Break the Tides deals damage, raise the Aero Erosion stacks on all nearby targets to the highest count among the targets.
Power of Discord is removed when Manifest ends.

### Sword of Virtue's Shadow

Casting Mid-air Attack - Cartethyia recalls all Sword Shadows and, based on the number and types of the Sword Shadows recalled, perform the specific forms of Plunging Attack and obtain the corresponding Heart of Virtue, Mandate of Divinity, and Power of Discord

### Conviction

When Conviction reaches 120 points, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Liberation to cast Resonance Liberation - Blade of Howling Squall.

### Negative Statusu

Includes Spectro Frazzle, Havoc Bane, Fusion Burst, Glacio Chafe, Electro Flare and Aero Erosion.

## Skills

### Basic Attack

- Internal skill id: `1003501`
- Name: `Sword to Carve My Forms`

Description

Basic Attack - Cartethyia
Perform up to 4 consecutive attacks, dealing Aero DMG.
Following Basic Attack - Cartethyia Stage 4, inflict 1 stack of Aero Erosion on targets hit and summon Sword of Divinity's Shadow.
Up to 1 Sword of Divinity's Shadow may exist at the same time, lasting for 20s.

Heavy Attack - Cartethyia
Consume STA to attack the target, dealing Aero DMG and summoning Sword of Discord's Shadow. Can be performed in mid-air.
Up to 1 Sword of Discord's Shadow may exist at the same time, lasting for 20s.
This instance of DMG is considered Basic Attack DMG.

Mid-air Attack - Cartethyia
Release Normal Attack button while airborne to perform Plunging Attack at the cost of STA, dealing Aero DMG, also considered Aero Erosion DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after the Plunging Attack to perform Basic Attack - Cartethyia Stage 2.
Casting Mid-air Attack - Cartethyia recalls all Sword Shadows. Based on the types and number of  Sword Shadows recalled, perform different forms of Plunging Attack and obtain the corresponding Heart of Virtue, Mandate of Divinity, and Power of Discord.

Dodge Counter - Cartethyia
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after a successful Dodge to attack the target, dealing Aero DMG.

Short Summary

Basic Attack - Cartethyia
Deal Aero DMG and inflict Aero Erosion on the target. Summon Sword Shadow II.

Heavy Attack - Cartethyia
Deal Aero DMG and summon Sword Shadow I.
This instance of DMG is considered Basic Attack DMG.

Mid-air Attack - Cartethyia
Deal Aero DMG and recall all Sword Shadows.
This instance of DMG is also considered Aero Erosion DMG.

Dodge Counter - Cartethyia
Deal Aero DMG.

### Resonance Skill

- Internal skill id: `1003502`
- Name: `Sword to Bear Their Names`

Description

Resonance Skill - Cartethyia
Attack the target, launch nearby enemies, and then plunge them to the ground, dealing Aero DMG and inflicting 2 stacks of Aero Erosion on the targets hit. This instance of DMG is considered Basic Attack DMG. Can be performed in mid-air.
Following Cartethyia - Resonance Skill, summon Sword of Virtue's Shadow.
Up to 1 Sword of Virtue's Shadow may exist at the same time, lasting for 20s.

Short Summary

Resonance Skill - Cartethyia
Deal Aero DMG and inflict Aero Erosion on the target. Summon Sword Shadow III.
This instance of DMG is considered Basic Attack DMG.

### Resonance Liberation

- Internal skill id: `1003503`
- Name: `A Knight's Heartfelt Prayers`

Description

Resonance Liberation - A Knight's Heartfelt Prayers
By reducing HP to 50% of the Max HP, Cartethyia transforms into Fleurdelys, unlocking new moves and entering the Manifest state for 12s.
Can be performed in mid-air.
Entering Manifest clears all Conviction.
As Fleurdelys, Basic Attack - Fleurdelys Stage 5, Mid-air Attack - Fleurdelys Stage 2, and Resonance Skill - May Tempest Break the Tides instantly trigger 1 instance of Aero Erosion DMG and reduce the Aero Erosion stack on the target hit by 1.
- Ending the state will not clear Resonance Energy.
- No HP cost when HP is below 50%.

Fleurdelys's attacks restore Conviction on hit. When Conviction reaches 120 points, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Liberation to cast Resonance Liberation - Blade of Howling Squall.

When Conviction is below 120 points, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Liberation to transform back into Cartethyia. When in Manifest, casting Resonance Liberation - A Knight's Heartfelt Prayers as Cartethyia consumes no Resonance Energy.

When Fleurdelys</colo

Short Summary

Resonance Liberation - Cartethyia
At the cost of HP, transform into Fleurdelys and enter Manifest, during which certain attacks immediately trigger Aero Erosion DMG.

Manifest
When in Manifest, Fleurdelys gains the following effects corresponding to the different types of Sword Shadow recalled.
- Sword Shadow I: Certain attacks propagate the highest stacks of Aero Erosion on targets hit to all nearby targets.
- Sword Shadow II: The damage interval of Aero Erosion DMG is reduced and the Aero Erosion DMG taken by the target is Amplified.
- Sword Shadow III: Certain attacks Stagnate the enemy. Gain increased resistance to interruption.

Resonance Liberation Finisher
Restore HP and deal a massive amount of Aero DMG.

### Inherent Skill 1

- Internal skill id: `1003504`
- Name: `A Heart's Truest Wishes`

Description

The healing received by all Resonators other than Cartethyia/Fleurdelys in the team is increased by 20% and their resistance to interruption is enhanced. If Rover: Aero is in the team, Rover: Aero additionally restores 25 Windstrings upon casting Omega Storm.

Short Summary

The healing received by Resonators in the team is increased and their resistance to interruption is enhanced. If Rover: Aero is in the team, Rover: Aero restores extra Forte Gauge upon casting Resonance Liberation.

### Inherent Skill 2

- Internal skill id: `1003505`
- Name: `Wind's Indelible Imprint`

Description

Targets with 1 to 3 stacks of Aero Erosion take 30% more DMG from Cartethyia and Fleurdelys. Targets with more than 3 stacks of Aero Erosion additionally take 10% more DMG from Cartethyia and Fleurdelys for each stack of Aero Erosion they have, up to 3 stacks.

Short Summary

DMG dealt is Amplified according to the stacks of Aero Erosion on the target.

### Intro Skill

- Internal skill id: `1003506`
- Name: `Sword to Mark Tide's Trace`

Description

Cartethyia - Sword to Mark Tide's Trace
Deal Aero DMG and inflict 2 stacks of Aero Erosion on targets hit. Summon Sword of Discord's Shadow.
Up to 1 Sword of Discord's Shadow may exist at the same time, lasting 20s.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after Cartethyia - Sword to Mark Tide's Trace to perform Basic Attack - Cartethyia Stage 2.

Fleurdelys - Sword to Call for Freedom
Thrust forward to impale the target, dealing Aero DMG and restoring Conviction.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after Fleurdelys - Sword to Call for Freedom to cast Basic Attack - Fleurdelys Stage 2.

Short Summary

Intro Skill - Cartethyia
Deal Aero DMG and inflict Aero Erosion on the target. Summon Sword Shadow I.

Intro Skill - Fleurdelys
Deal Aero DMG.

### Forte Circuit

- Internal skill id: `1003507`
- Name: `Tempest`

Description

Cartethyia unlocks new moves when she transforms into Fleurdelys:

Basic Attack - Fleurdelys
Basic Attack - Cartethyia is replaced by Basic Attack - Fleurdelys.
Perform up to 5 consecutive attacks, dealing Aero DMG and restoring Conviction on hit.

Mid-air Attack - Fleurdelys</

Short Summary

Fleurdelys
Transform into Fleurdelys and unlock new moves.
When in Manifest, Cartethyia is able to freely transform between herself and Fleurdelys.

Forte Gauge
As Fleurdelys, attacks restore Forte Gauge.
When Forte Gauge is full, Resonance Liberation Finisher is available.

### Utility Passive

- Internal skill id: `1003508`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1003509`
- Name: `Wind's Divine Blessing`

Description

Aero DMG dealt by the active Resonator in the team other than Cartethyia/Fleurdelys to targets with Negative Statuses is Amplified by 17.5% for 20s.

Short Summary

Aero DMG dealt by other active Resonators in the team to targets with Negative Statuses is Amplified.
