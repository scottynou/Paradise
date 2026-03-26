# Sigrika Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Sigrika`
- Skill base id: `10051`
- Localized range used: `418000000-450000000`

## Keywords

### Full Stop

After casting Heavy Attack - Schemata of Runes, gain {0} points of Full Stop, up to 100 points.

### Decipher

Enter the Decipher state after casting Basic Attack Stage 4 for {0}s. This effect ends early when Sigrika is switched off the field.

### Rune

Sigrika holds up to <SapTag=0>{0}</SapTag> {Cus:Sap,S=Rune P=Runes SapTag=0}. Without Full Stop, Sigrika can only hold up to <SapTag=1>{1}</SapTag> {Cus:Sap,S=Rune P=Runes SapTag=1}. When Sigrika gains a new Rune at max capacity, the existing Runes shift one slot to the left, removing the leftmost Rune. With at least <SapTag=2>{2}</SapTag> {Cus:Sap,S=point P=points SapTag=2} of Full Stop, Sigrika can hold <SapTag=3>{3}</SapTag> additional {Cus:Sap,S=Rune P=Runes SapTag=3}.
Hitting a target directly with Basic Attack - Elucidated or Dodge Counter - Decipher in the duration of the moves grants one Rune: Trust.
Hitting a target directly with Resonance Skill - BIG BOOMY BOOM! or Resonance Skill - Soliskin to the Aid in the duration of the moves grants one Rune: Answer.

### Convergent

The next time Sigrika obtains a Rune, she additionally obtains a Rune of the same type and removes Convergent.
When Sigrika holds Divergent and Convergent at the same time, Convergent takes priority.
When Sigrika holds <SapTag=0>{0}</SapTag> {Cus:Sap,S=point P=points SapTag=0} of Full Stop, Convergent doesn't take effect.

### Divergent

The next time Sigrika obtains a Rune, she additionally obtains a Rune of the opposite type and removes Divergent.
When Sigrika holds Divergent and Convergent at the same time, Convergent takes priority.
When Sigrika holds <SapTag=0>{0}</SapTag> {Cus:Sap,S=point P=points SapTag=0} of Full Stop, Divergent doesn't take effect.

### Soliskin Vitality

When any nearby Resonators in the team cast Echo Skill, Sigrika gains <SapTag=0>{0}</SapTag> {Cus:Sap,S=point P=points SapTag=0} of Soliskin Vitality, up to <SapTag=1>{1}</SapTag> {Cus:Sap,S=point P=points SapTag=1}. Echoes with the same name can only trigger this effect once. Casting Outro Skill - In This Very Moment resets the record of Echo triggering this effect.

### Innate Gift

Sigrika can hold up to <SapTag=0>{0}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=0} of Innate Gift?. Each stack grants Runic Outburst, Runic Chain Whip, Runic Soliskin and Forte Circuit - Learn My True Name {1} DMG Amplification.
This effect ends after Sigrika casts Forte Circuit - Learn My True Name or is switched off the field.

### Tune Break

When the target's Off-Tune Level is maxed, they enter the Mistune state:
The active Resonator in the team may perform Tune Break Skill on the target, dealing DMG and causing the target to leave the Mistune state.
If the target is of the Common Class, Resonators in the team may directly deal Tune Break DMG with some of their regular skills on hit. The target leaves the Mistune state afterward.

## Skills

### Basic Attack

- Internal skill id: `1005101`
- Name: `One, Two, Three`

Description

Basic Attack
Perform up to 4 consecutive attacks, dealing Aero DMG.
Enter the Decipher state for {0}s after casting Basic Attack Stage 4. This effect ends early if Sigrika is switched off the field.
When Sigrika has at least <SapTag=1>{1}</SapTag> {Cus:Sap,S=point P=points SapTag=1} of Full Stop, her Basic Attack cycle starts from Stage 2.

Basic Attack - Elucidated
While in the Decipher state, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack on the ground to cast Basic Attack - Elucidated, dealing Aero DMG (considered Echo Skill DMG).
Leave the Decipher state upon casting this skill.

Heavy Attack
Consume STA to attack the target, dealing Aero DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Heavy Attack to cast Basic Attack Stage 2.

Mid-air Attack
Consume STA to perform Plunging Attack, dealing Aero DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Plunging Attack to cast Basic Attack Stage 2.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after a successful Dodge on the ground to attack the target, dealing Aero DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Dodge Counter to cast Basic Attack Stage 4.

Dodge Counter - Decipher
While in the Decipher state, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack shortly after a successful Dodge on the ground to cast Dodge Counter - Decipher to attack the target, dealing Aero DMG (considered Echo Skill DMG).
Leave the Decipher state upon casting this skill.

Mid-air Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after a successful Dodge in mid-air to attack the target, dealing Aero DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Mid-air Dodge Counter to cast Basic Attack Stage 2.

Short Summary

Basic Attack
Deal Aero DMG.
After casting Basic Attack Stage 4, enter the Decipher state, during which Enhanced Basic Attack becomes available.

### Resonance Skill

- Internal skill id: `1005102`
- Name: `Royan Close Quarters Combat`

Description

BOOMY BOOM!
Attack the target, dealing Aero DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting BOOMY BOOM! to cast Basic Attack Stage 3.

BIG BOOMY BOOM!
While in the Decipher state, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill on the ground to cast BIG BOOMY BOOM!, dealing Aero DMG (considered Echo Skill DMG).
Leave the Decipher state upon casting this skill.

Soliskin to the Aid
While in the Decipher state, with at least <SapTag=0>{0}</SapTag> {Cus:Sap,S=point P=points SapTag=0} of Full Stop, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill on the ground to cast Soliskin to the Aid, dealing Aero DMG (considered Echo Skill DMG).
Leave the Decipher state upon casting this skill.

Short Summary

BOOMY BOOM!
Attack the target, dealing Aero DMG.

BIG BOOMY BOOM!
While in the Decipher state, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill on the ground to cast BIG BOOMY BOOM!, dealing Aero DMG.

Soliskin to the Aid
While in the Decipher state, with at least <SapTag=0>{0}</SapTag> {Cus:Sap,S=point P=points SapTag=0} of Full Stop, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Resonance Skill on the ground to cast Soliskin to the Aid, dealing Aero DMG.

### Resonance Liberation

- Internal skill id: `1005103`
- Name: `Where Trust Leads Me!`

Description

Deal Aero DMG (considered Echo Skill DMG). Gain Divergent for {0}s.

Divergent
The next time Sigrika obtains a Rune, she additionally obtains a Rune of the opposite type and removes Divergent.
When Sigrika holds Divergent and Convergent at the same time, Convergent takes priority.
When Sigrika holds <SapTag=1>{1}</SapTag> {Cus:Sap,S=point P=points SapTag=1} of Full Stop, Divergent doesn't take effect.

Short Summary

Deal Aero DMG (considered Echo Skill DMG) and grant Divergent.

### Inherent Skill 1

- Internal skill id: `1005104`
- Name: `True Names Invoked`

Description

Casting Intro Skill - Solsworn Etymology grants Convergent for {0}s.

Convergent
The next time Sigrika obtains a Rune, she additionally obtains a Rune of the same type and removes Convergent.
When Sigrika holds Divergent and Convergent at the same time, Convergent takes priority.
When Sigrika holds <SapTag=1>{1}</SapTag> {Cus:Sap,S=point P=points SapTag=1} of Full Stop, Convergent doesn't take effect.

Short Summary

Casting Intro Skill - Solsworn Etymology grants Convergent.

### Inherent Skill 2

- Internal skill id: `1005105`
- Name: `True Names Aligned`

Description

When any nearby Resonators in the team cast Echo Skill, Sigrika gains a stack of Blessing of Runes, up to {0} stacks. Echoes with the same name can only trigger this effect once.
This effect resets upon a lineup change.

Blessing of Runes
Each stack of Blessing of Runes grants the active Resonator in the team {1} Aero DMG Bonus and {2} Echo Skill DMG Bonus.
When Blessing of Runes reaches {3} stacks, Sigrika additionally gains {4} Aero DMG Bonus and Echo Skill DMG Bonus.

For every {6} of Sigrika's Energy Regen over {5}, Sigrika gains {7} Echo Skill DMG Bonus for up to {8}.

Short Summary

When any nearby Resonators in the team cast Echo Skill, the active Resonator in the team gains Aero DMG Bonus and Echo Skill DMG Bonus. Sigrika gains additional buffs.

Sigrika gains Echo Skill DMG Bonus based on her Energy Regen.

### Intro Skill

- Internal skill id: `1005106`
- Name: `Solsworn Etymology`

Description

Deal Aero DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Intro Skill to cast Basic Attack Stage 2.

Short Summary

Deal Aero DMG.

### Forte Circuit

- Internal skill id: `1005107`
- Name: `Within Infinity's Embrace`

Description

Heavy Attack - Schemata of Runes
Hold Normal Attack to consume two Runes and cast Heavy Attack - Schemata of Runes, dealing Aero DMG. Based on the types of the Runes consumed, Sigrika gains the following effects:
- When consuming Rune: Trust and Rune: Answer, this skill gains the effect of Runic Outburst.
- When consuming two Runes: Trust, this skill gains the effect of Runic Chain Whip.
- When consuming two Runes: Answer, this skill gains the effect of Runic Soliskin.
When consuming Runes, if Sigrika holds at least <SapTag=0>{0}</SapTag> {Cus:Sap,S=point P=points SapTag=0} of Soliskin Vitality, consume <SapTag=1>{1}</SapTag> {Cus:Sap,S=point P=points SapTag=1} to increase the DMG Multipliers of the current Runic Outburst, Runic Chain Whip, and Runic Soliskin by {2}. Obtain a stack of Innate Gift?.
When consuming Runes, if Soliskin Vitality is lower than <SapTag=3>{3}</SapTag> {Cus:Sap,S=point P=points SapTag=3}, consume all Soliskin Vitality

Short Summary

Rune
Hitting a target with Basic Attack - Elucidated or Dodge Counter - Decipher grants one Rune: Trust.
Hitting a target with Resonance Skill - BIG BOOMY BOOM! or Resonance Skill - Soliskin to the Aid grants one Rune: Answer.

Soliskin Vitality
When any nearby Resonators in the team cast Echo Skill, Sigrika gains Soliskin Vitality.

Heavy Attack - Schemata of Runes
Hold Normal Attack to consume two Runes, dealing Aero DMG. Based on the types of the consumed Runes, gain different enhancements and launch various enhanced attacks.
If Sigrika holds at least <SapTag=0>{0}</SapTag> {Cus:Sap,S=point P=points SapTag=0} of Soliskin Vitality, the enhanced attacks deal more DMG and Sigrika gains a stack of Innate Gift?.

Innate Gift?
Each stack of Innate Gift? grants the chained attacks of  Heavy Attack - Schemata of Runes and Forte Circuit - Learn My True Name DMG Amplification.

Full Stop
After casting Heavy Attack - Schemata of Runes, Sigrika gains Full Stop.

Forte Circuit - Learn My True Name
When Full Stop is maxed, hold Resonance Skill to cast Forte Circuit - Learn My True Name, dealing substantial Aero DMG (considered Echo Skill DMG).

### Utility Passive

- Internal skill id: `1005108`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1005109`
- Name: `In This Very Moment`

Description

Attack the target, deal Aero DMG equal to {0} of Sigrika's ATK. Gain <SapTag=1>{1}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=1} of Encapsulated for {2}s.

Encapsulated
When any nearby Resonators in the team cast Echo Skills, Stagnate the target and consume <SapTag=3>{3}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=3} of Encapsulated. Encapsulated stacks up to {4} times.
All stacks of Encapsulated are removed when Sigrika is removed from the lineup.

Short Summary

Attack the target, deal Aero DMG. Gain Encapsulated. When any nearby Resonators in the team cast Echo Skills, Stagnate the target.

### Special Skill 10

- Internal skill id: `1005110`

Description

When the target's Off-Tune Level is full, Sigrika can cast Tune Break on the target.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after casting Tune Break to cast Basic Attack Stage 3.
