# Phrolova Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Phrolova`
- Skill base id: `10037`
- Localized range used: `418000000-450000000`

## Keywords

### Reincarnate

Basic Attack - Movement of Fate and Finality
When in Reincarnate, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack on the ground to cast Movement of Fate and Finality, which deals Havoc DMG (considered Resonance Skill DMG), Stagnates the target, and ends Reincarnate afterward.

Resonance Skill - Murmurs in a Haunting Dream
When in Reincarnate, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill on the ground to cast Murmurs in a Haunting Dream, dealing Havoc DMG (considered Resonance Skill DMG) and ending Reincarnate afterward.

### Volatile Note

Phrolova can hold up to 6 Volatile Notes. When Volatile Notes reach the max number, all Volatile Notes shift one slot to the left, and the leftmost Volatile Note - Strings or Volatile Note - Winds will be removed.
Hitting a target with Basic Attack Stage 3 or Movement of Fate and Finality grants 1 Volatile Note - Strings.
Hitting a target with Resonance Skill Whispers in a Fleeting Dream or Resonance Skill Murmurs in a Haunting Dream grants 1 Volatile Note - Winds.
When Inherent Skill - Accidental is activated, casting Suite of Quietus, Suite of Immortality, or Echo Skill turns the next Volatile Note into Volatile Note - Cadenza.
Phrolova cannot obtain Volatile Notes during Resolving Chord.

### Resolving Chord

Phrolova enters Resolving Chord after casting Scarlet Coda.
When in the Resolving Chord state, Waltz of Forsaken Depths becomes available.

### Aftersound

Max {0} stacks.
When Phrolova is not on the field, casting Enhanced Attack - Hecate: Strings, Enhanced Attack - Hecate: Winds, and Enhanced Attack - Hecate: Cadenza grants <SapTag=1>{1}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=1} of Aftersound.
When Phrolova is out of combat, all stacks of Aftersound are removed every {2}s.

### Maestro

Gain {1} ATK increase.
Phrolova floats in the air and commands Hecate to fight. Hecate will share Phrolova's stats and statuses, and damage dealt by Hecate will be considered coming from Phrolova.
During this period, Phrolova plays out the Volatile Notes in order. Each Volatile Note holds for {0}s.

## Skills

### Basic Attack

- Internal skill id: `1003701`
- Name: `Movement of Life and Death`

Description

Basic Attack
Perform up to 3 consecutive attacks, dealing Havoc DMG.
When performing Basic Attack Stage 3, enter Reincarnate state.

Heavy Attack
Consume STA to attack the target, dealing Havoc DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Basic Attack Stage 2.

Scarlet Coda
Phrolova enters the Compose state every {1}s.
When the following 3 conditions are met, Heavy Attack is replaced with Scarlet Coda.
- Has 6 Volatile Notes.
- In the Compose state.
- Not in the Resolving Chord state.

Scarlet Coda: Consume STA to deal Havoc DMG, Stagnating and pulling in nearby targets. This instance of damage is considered Resonance Skill DMG.
Each stack of Aftersound additionally increases the DMG Multiplier of this instance of damage.
Casting this skill is considered as casting Echo Skill.
Casting this skill sends Compose state into cooldown and activates the Resolving Chord state.

Mid-air Attack
Consume STA to perform a Plunging Attack, dealing Havoc DMG.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack after a successful Dodge to attack the target, dealing Havoc DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Basic Attack Stage 3.

Short Summary

Basic Attack
Deal Havoc DMG.

Heavy Attack
Deal Havoc DMG.

Enhanced Heavy Attack
When Forte Gauge is full, Enhanced Heavy Attack becomes available, dealing massive Havoc DMG (considered Resonance Skill DMG).
Aftersound increases the DMG Multiplier of this instance of damage.
Casting this skill is considered as casting Echo Skill.
This skill cannot be cast repeatedly within an interval.

Mid-air Attack
Deal Havoc DMG.

Dodge Counter
Deal Havoc DMG.

### Resonance Skill

- Internal skill id: `1003702`
- Name: `Whispers in a Fleeting Dream`

Description

Attack the target and deal Havoc DMG.
Casting this skill sends Phrolova into Reincarnate.

Short Summary

Deal Havoc DMG.

### Resonance Liberation

- Internal skill id: `1003703`
- Name: `Waltz of Forsaken Depths`

Description

Waltz of Forsaken Depths
Phrolova's max Resonance Energy is 0. Waltz of Forsaken Depths does not consume Resonance Energy.
When in the Resolving Chord state, Waltz of Forsaken Depths becomes available.
Casting this skill ends the Resolving Chord state, and Phrolova enters the Maestro state for {0}s.

Maestro
Gain {5} ATK increase.
Phrolova floats in the air and commands Hecate to fight. Hecate will share Phrolova's stats and statuses, and damage dealt by Hecate will be considered coming from Phrolova. Hecate's attacks will not remove the target's Hazy Dream state.
During this period, Phrolova plays the Volatile Notes in turn. Each Volatile Note holds for {1}s.
If Phrolova is the active Resonator on the field, she can give the following cues to Hecate. Any damage taken by Hecate in this state affects Phrolova as well.
- <color=

Short Summary

Resonance Liberation
Casting Enhanced Heavy Attack unlocks Resonance Liberation.
Casting Resonance Liberation enters Enhanced State.

Enhanced State
- When Phrolova is the active Resonator, she can command Hecate to cast Basic Attack - Hecate. Every {2} times Hecate casts Basic Attack - Hecate, the next Basic Attack - Hecate is replaced with Enhanced Attack - Hecate.
- When Phrolova is not the active Resonator, Hecate automatically casts Basic Attack - Hecate. When Resonators in the team cast Echo Skills, Hecate casts Enhanced Attack - Hecate.
- Switching back to Phrolova ends the Enhanced State.

Hecate
- Basic Attack - Hecate: Deal Havoc DMG (considered Echo Skill DMG).
- Enhanced Attack - Hecate: Deal Havoc DMG (considered Echo Skill DMG). When Prolova is not the active Resonator, casting this skill grants Aftersound.

### Inherent Skill 1

- Internal skill id: `1003704`
- Name: `Accidental`

Description

Casting Echo Skill grants increased resistance to interruption and reduces damage taken by {0} for {1}s.
After casting Suite of Quietus, Suite of Immortality, and Echo Skill, the next Volatile Note becomes Volatile Note - Cadenza.

Short Summary

Casting Echo Skill grants increased resistance to interruption and reduces damage taken.
Casting Intro Skill, Enhanced Intro Skill, and Echo Skill replaces the next Forte Gauge with Forte Gauge - Combined.

### Inherent Skill 2

- Internal skill id: `1003705`
- Name: `Octet`

Description

Obtain {0} stacks of Aftersound upon entering battle. This effect cannot be triggered again within {1}s after exiting the combat state. For every {2} stacks of Aftersound, Crit. DMG is increased by {3}.
When Aftersound reaches the max, each new stack of Aftersound increases Phrolova's Crit. DMG by {4}, up to {5}. The increased Crit. DMG is removed when Aftersound stacks are cleared.

Short Summary

Entering the combat state grants Aftersound.
Aftersound increases Crit. DMG. Gaining new Aftersound at max stacks additionally boosts Crit. DMG.

### Intro Skill

- Internal skill id: `1003706`
- Name: `Suite of Quietus`

Description

Suite of Quietus
Attack the target, dealing Havoc DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Basic Attack Stage 3.

Suite of Immortality
When in the Maestro state, the next Suite of Quietus is replaced with Suite of Immortality. This replacement is cancelled if Curtain Call is cast while in this state. Suite of Immortality deals Havoc DMG (considered Resonance Skill DMG) and Stagnates the target.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting this skill to cast Basic Attack Stage 3.

Short Summary

Intro Skill
Deal Havoc DMG. Can be followed by Basic Attack Stage 3.

Enhanced Intro Skill
In the Enhanced State, the next Intro Skill is replaced with Enhanced Intro Skill, deailng Havoc DMG (considered Resonance Skill DMG).
Enhanced Intro Skill can be followed by Basic Attack Stage 3.

### Forte Circuit

- Internal skill id: `1003707`
- Name: `Rhapsody of a New World`

Description

Basic Attack - Movement of Fate and Finality
When in Reincarnate, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack on the ground to cast Movement of Fate and Finality, which Stagnates the target, dealing Havoc DMG (considered Resonance Skill DMG) and ending Reincarnate afterward.

Resonance Skill - Murmurs in a Haunting Dream
When in Reincarnate, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill on the ground to cast Murmurs in a Haunting Dream, dealing Havoc DMG (considered Resonance Skill DMG) and ending Reincarnate afterward.

Aftersound
Phrolova can hold up to {0} stacks of Aftersound.
When Phrolova is not the active Resonator, casting Enhanced Attack - Hecate: Strings, Enhanced Attack - Hecate: Winds, and Enhanced Attack - Hecate: Cadenza grants <SapTag=1>{1}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=1} of Aftersound.
When Phrolova is out of combat, all stacks of Aftersound are removed every {2}s.

Volatile Note
Phrolova can hold up to 6 Volatile Notes. When Volatile Notes reach the max number, gaining new Volatile Notes moves all Volatile Notes one slot to the left, and the leftmost Volatile Note - Strings or Volatile Note - Winds will be removed.
Hitting a target with Basic Attack Stage 3 or Movement of Fate and Finality grants 1 Volatile Note - Strings.
Hitting a target with Resonance Skill Whispers in a Fleeting Dream or Resonance Skill Murmurs in a Haunting Dream grants 1 Volatile Note - Winds.
When Inherent Skill - Accidental is activated, casting Suite of Quietus, Suite of Immortality, or Echo Skill grants 1 Volatile Note - Cadenza.
Phrolova cannot obtain Volatile Notes during Resolving Chord.

Short Summary

Forte Gauge
Basic Attack Stage 3 and Resonance Skill can be chained into Enhanced Basic Attack or Enhanced Resonance Skill, dealing Havoc DMG, considered Resonance Skill DMG.
Casting Basic Attack Stage 3 or Enhanced Basic Attack grants Forte Gauge - Red.
Casting Resonance Skill and Enhanced Resonance Skill grants Forte Gauge - Purple.
In Enhanced State, Enhanced Attack - Hecate gains different buffs based on the color of the current Forte Gauge.
- Forte Gauge - Red: Enhanced Attack - Hecate Stagnates the targets.
- Forte Gauge - Purple: Enhanced Attack - Hecate pulls the targets in.
- Forte Gauge - Combined: Enhanced Attack - Hecate Stagnates and pulls the targets in.

### Utility Passive

- Internal skill id: `1003708`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1003709`
- Name: `Unfinished Piece`

Description

The incoming Resonator gains {0} Havoc DMG Amplification and {1} Heavy Attack DMG Amplification for {2}s or until they are switched out.
If Phrolova is in Maestro state when she casts this skill, Hecate additionally casts Enhanced Attack - Hecate <SapTag=3>{3}</SapTag> {Cus:Sap,S=time P=times SapTag=3} when Phrolova is switched off the field while in the same Maestro state duration.

Short Summary

The incoming Resonator gains Havoc DMG Amplification and Heavy Attack DMG Amplification. This effect ends early if they are switched out.
If Phrolova is in the Enhanced State when she casts this skill, Hecate casts additional Enhanced Attacks - Hecate.
