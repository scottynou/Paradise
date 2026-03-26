# Lynae Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Lynae`
- Skill base id: `10045`
- Localized range used: `418000000-450000000`

## Keywords

### Kaleidoscopic Parade

Casting Basic Attack - Spark Collision sends Lynae into Kaleidoscopic Parade. In this state, Lynae moves faster and continuously recovers Lumiflow when she moves on the ground or casts Kaleidoscopic Parade - Basic Attack, Kaleidoscopic Parade - Ground Heavy Attack, Kaleidoscopic Parade - Mid-air Heavy Attack, Kaleidoscopic Parade - Mid-air Attack, Additive Color, Dodge, Intro Skill, or Basic Attack - To a Vivid Tomorrow!

### Spray Paint

When Inherent Skill Colors Never Fade! is activated, Lynae leaves Spray Paint on the ground after casting Basic Attack - Visual Impact, which continuously inflicts Photochromic Flux on targets within the Spray Paint area.

### Photochromic Flux

Inflict Photochromic Flux when hitting a target with Basic Attack - Polychrome Leap, Basic Attack - Iridescent Splash, Basic Attack - Visual Impact and Intro Skill - Time to Show Some Colors!. Photochromic Flux inflicts Tune Rupture - Shifting/Tune Strain - Shifting on targets for 25s when Lynae is in Resonance Mode - Tune Rupture/Resonance Mode - Tune Strain.

### Lumiflow

Max 120 points.
During Kaleidoscopic Parade:
- Restore 20% of Lumiflow per second when Lynae is moving on the ground/climbing, or performs a successful Dodge on the ground, or within a certain time during Kaleidoscopic Parade - Basic Attack, Kaleidoscopic Parade - Ground Heavy Attack, Kaleidoscopic Parade - Mid-air Heavy Attack, Kaleidoscopic Parade - Dodge Counter, Additive Color, ground Dodge, Intro Skill, or Basic Attack - To a Vivid Tomorrow!.
- Lumiflow starts to deplete by 20% per second while Lynae is staying still on the ground/climbing/swimming or off the field, or after a certain time following the use of the skills listed above.
- Lumiflow does not change while Lynae is not in any of the states described above.
Exiting Kaleidoscopic Parade removes all Lumiflow.
With 120 points of Lumiflow, Lynae's roller skating speed further increases. Speed Skating consumes STA over time.

### Optical Sampling Stage

Lynae is in Optical Sampling Stage by default. In this state, Overflow recovers during Basic Attack,  Lynae-Style Palettes, Mid-air Attack, and Dodge Counter, or when Intro Skill is cast.

### Overflow

Max 120 points.
While in Optical Sampling Stage, Overflow recovers during Basic Attack, Lynae-Style Palettes, Mid-air Attack, and Dodge Counter, or when Intro Skill is cast.
When Overflow is full, Basic Attack - Spark Collision becomes available.
Casting Basic Attack - Spark Collision removes all Overflow.

### True Color

Max 3 points.
While in combat, Polychrome Leap grants 1 point of True Color each time it's cast. With 3 points of True Color, Basic Attack - Iridescent Splash and Basic Attack - Visual Impact become available.
Exiting Kaleidoscopic Parade removes all True Color.

### Tune Rupture - Shifting

Certain Resonators can inflict Tune Rupture - Shifting on the target. During this state, if the affected target is hit by Tune Break, their Tune Rupture - Shifting state is replaced with Tune Rupture - Interfered.

### Tune Strain - Shifting

Certain Resonators can inflict Tune Strain - Shifting on the target. During this state, if the affected target is hit by Tune Break, their Tune Strain - Shifting state is replaced with Tune Strain - Interfered.

### Tune Rupture - Interfered

A target enters this state when they are hit by Tune Break under the Tune Rupture - Shifting state. Resonators who can respond to Tune Rupture- Interfered cause additional effects when attacking targets in this state. Tune Rupture- Interfered lasts for 8s.

### Tune Strain - Interfered

A target enters this state when they are hit by Tune Break under the Tune Strain - Shifting state. Resonators who can respond to Tune Strain - Interfered cause additional effects when attacking targets in this state. Tune Strain - Interfered lasts for 30s.

### Tune Break

When the target's Off-Tune Level is maxed, they enter the Mistune state:
The active Resonator in the team may perform Tune Break Skill on the target, dealing DMG and causing the target to leave the Mistune state.
If the target is of the Common Class, Resonators in the team may directly deal Tune Break DMG with some of their regular skills on hit. The target leaves the Mistune state afterward.

## Skills

### Basic Attack

- Internal skill id: `1004501`
- Name: `Chroma Drift`

Description

Basic Attack
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} or hold Normal Attack to perform up to 3 consecutive attacks, dealing Spectro DMG.

Mid-air Attack
Consume STA to perform Plunging Attack, dealing Spectro DMG.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press

Short Summary

Charging State
While in Default State with full Overflow, hold Normal Attack to enter a charging state and then release to dash toward the target.

Roller Skate Heavy Attack
While in Roller Skating Mode, hold Normal Attack on the ground to continuously cast Ground Heavy Attack and deliver a finisher blow upon release. Hold Normal Attack in mid-air to cast Mid-air Heavy Attack.

### Resonance Skill

- Internal skill id: `1004502`
- Name: `Lynae-Style Palettes`

Description

Lynae-Style Palettes
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Resonance Skill to deal Spectro DMG.
While in Kaleidoscopic Parade, hold Resonance Skill to attack the target, dealing Spectro DMG and exiting the Kaleidoscopic Parade.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time after this skill to cast Basic Attack Stage 2.
Lynae-Style Palettes and Additive Color share a cooldown.

Additive Color
During Kaleidoscopic Parade, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill on the ground to attack the target, dealing Spectro DMG.
Within a certain time during the skill, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack to cast Kaleidoscopic Parade - Basic Attack Stage 2.
Lynae-Style Palettes and Additive Color share a cooldown.

Short Summary

Resonance Skill
Deal Spectro DMG.

Roller Skate Resonance Skill
Deal Spectro DMG.

### Resonance Liberation

- Internal skill id: `1004503`
- Name: `Prismatic Overblast`

Description

Deal Spectro DMG. Casting this skill increases the DMG dealt by all nearby Resonators in the team by {0} for {1}s.

Basic Attack - To a Vivid Tomorrow!
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time after casting Resonance Liberation - Prismatic Overblast to cast Basic Attack - To a Vivid Tomorrow!, dealing Spectro DMG.
While in Kaleidoscopic Parade, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack within a certain time during the skill to cast Kaleidoscopic Parade - Basic Attack Stage 2.

Short Summary

Casting this skill increases the DMG dealt by all nearby Resonators in the team.

Motorbike Chain Attack
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time after casting Resonance Liberation to cast a chain attack using the motorbike.

### Inherent Skill 1

- Internal skill id: `1004504`
- Name: `Colors Never Fade!`

Description

After casting Basic Attack - Visual Impact, Lynae leaves Spray Paint on the ground and continuously inflicts Photochromic Flux on targets within the Spray Paint for {1}s, triggered once every {0}s. When Spray Paint is on the ground, switching to another Resonance Mode doesn't affect the Photochromic Flux effects inflicted by the Spray Paint.

With Lynae in the team, the expedition motorbike's Energy Tank expands by 600 points. Lynae enters Kaleidoscopic Parade automatically while on the expedition motorbike and restores 20% of Lumiflow per second.

Short Summary

After casting Enhanced Roller Skate Plunge Attack, Lynae leaves Spray Paint on the ground and continuously inflicts Photochromic Flux on targets within the range of the Spray Paint.

Expedition motorbike's Energy Tank is expanded. Lynae automatically enters Roller Skating Mode when driving the expedition motorbike.

### Inherent Skill 2

- Internal skill id: `1004505`
- Name: `"Adaptive Optics: Everyday Applications`

Description

Casting Intro Skill - Time to Show Some Colors! increases Lynae's Spectro DMG Bonus by {1} for {0}s.

During Kaleidoscopic Parade, if Lynae isn't in combat, dodging without directional input grants her Optic Camo for {2}s, which will be removed when Lynae casts any skill other than dodging or is switched off the field. Performing environmental, gameplay or functional interactions, or entering combat, removes the Optic Camo. With Optic Camo, Lynae may enter the enemy's aggro range without triggering combat.

Short Summary

Casting Intro Skill increases Lynae's Spectro DMG Bonus.

While in Roller Skating Mode, dodging without directional input will apply Optic Camo. With Optic Camo, Lynae may enter the enemy's aggro range without engaging.

### Intro Skill

- Internal skill id: `1004506`
- Name: `Time to Show Some Colors!`

Description

Deal Spectro DMG, inflicting Photochromic Flux on targets hit.
While in Optical Sampling Stage, casting this skill recovers {0} points of Overflow.

Short Summary

Recover Overflow and inflict Photochromic Flux on targets.

### Forte Circuit

- Internal skill id: `1004507`
- Name: `Chromaticity Modeling`

Description

Optical Sampling Stage
Lynae is in Optical Sampling Stage by default. While in this state, Overflow recovers during certain skills.

Kaleidoscopic Parade
Casting Basic Attack - Spark Collision sends Lynae into Kaleidoscopic Parade. In this state, Lynae continuously recovers Lumiflow while moving on the ground or during certain periods of certain skills. Lynae will not Walk during this state, and her Running and Sprinting will be replaced by the faster Free Skating and Speed Skating.

Basic Attack - Polychrome Leap
While in Kaleidoscopic Parade, with at least 1/3 of the max Lumiflow, Jump is replaced by Basic Attack - Polychrome Leap.
Consume 1/3 of the max Lumiflow to deal Spectro DMG. Inflict Photochromic Flux on targets hit. Successful Dodges can be triggered within a certain time during this skill. While airborne, Basic Attack - Polychrome Leap chains up to 3 stages. Switching to another Resonator resets the combo.
While in combat, each stage of Basic Attack - Polychrome Leap cast recovers 1 point of True Color.
Within a certain time after Basic Attack - Polychrome Leap Stage 1 {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack on the ground to cast Kaleidoscopic Parade - Basic Attack Stage 2.
Casting Basic Attack - Polychrome Leap Stage 2 also pulls in nearby targets.

Basic Attack - Iridescent Splash
During Kaleidoscopic Parade, when Lynae is in mid-air with 3 points of True Color, and Basic Attack - Visual Impact is on cooldown, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack or Resonance Skill to deal Spectro DMG and inflict Photochromic Flux on targets hit.
This skill consumes 3 points of True Color.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time during this skill to cast Kaleidoscopic Parade - Basic Attack Stage 2.

Basic Attack - Visual Impact
During Kaleidoscopic Parade, when Lynae is in mid-air with 3 points of True Color, and this skill is not on cooldown, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack or Resonance Skill to deal Spectro DMG and inflict Photochromic Flux on targets hit.
This skill consumes 3 points of True Color and grants all nearby Resonators in the team {0} points of Tune Break Boost for {1}s.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time du

Short Summary

Roller Skating Mode
After the Charging State, Lynae enters Roller Skating Mode and unlocks new moves.

Basic Attack - Polychrome Leap
During Roller Skating Mode, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Jump and consume 1/3 of the max Lumiflow to perform a leap attack, dealing Spectro DMG. Inflict Photochromic Flux on targets hit. Can be cast up to 3 consecutive times.

Roller Skate Plunge Chain Attack
During Roller Skating Mode, while in mid-air with max True Color, if Enhanced Roller Skate Plunge Attack is not on cooldown, cast Enhanced Roller Skate Plunge Attack, otherwise cast Roller Skate Plunge Attack instead. Inflict Photochromic Flux on targets hit.
Casting Enhanced Roller Skate Plunge Attack increases the Tune Break Boost for all nearby Resonators in the team.

Resonance Mode
Photochromic Flux inflicts Tune Rupture - Shifting or Tune Strain - Shifting on targets based on the current Resonance Mode.

Overflow
While in Default State, attacks recover Overflow.

Lumiflow
While in Roller Skating Mode, moving or attacking continuously restores Lumiflow.

True Color
While in combat, each Basic Attack - Polychrome Leap grants 1 point of True Color.

### Utility Passive

- Internal skill id: `1004508`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1004509`
- Name: `Let's Hit the Road!`

Description

Attack the target and deal {0} Spectro DMG. The next incoming Resonator gain {1} All DMG Amplification and {2} Resonance Liberation DMG Amplification for 14s or until they are switched out.
Lynae leaves the Kaleidoscopic Parade state upon casting Outro Skill.

Short Summary

Attack the target and deal Spectro DMG. The next incoming Resonator has their All DMG and Resonance Liberation DMG Amplified. Switching Resonators ends the effect early.
Casting Outro Skill exits Roller Skating Mode.

### Special Skill 10

- Internal skill id: `1004510`
- Name: `Spectral Analysis`

Description

Lynae can inflict Tune Rupture - Shifting or Tune Strain - Shifting on targets.
Lynae can respond to Tune Rupture - Interfered and Tune Strain - Interfered.
- Responding to Tune Rupture - Interfered: When any Resonator in the team deals Tune Break DMG and inflicts the Tune Rupture - Interfered state, Lynae casts Tune Rupture Response - Spectral Analysis. Each target can be damaged by this skill up to once every 8s.
- Responding to Tune Strain - Interfered: For each stack of Tune Strain - Interfered on the target, each point of Lynae's Tune Break Boost increases her total DMG against that target by {1}. When Lynae is in the team, the target's max stack limit of Tune Strain - Interfered is increased by 1.
When the target's Off-Tune Level is full, Lynae can cast Tune Break on the target.

Short Summary

Lynae can inflict Tune Rupture - Shifting or Tune Strain - Shifting on targets.
Lynae can respond to Tune Rupture - Interfered and Tune Strain - Interfered.,
