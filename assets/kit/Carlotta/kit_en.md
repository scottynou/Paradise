# Carlotta Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Carlotta`
- Skill base id: `10028`
- Localized range used: `418000000-450000000`

## Keywords

### Moldable Crystal

Carlotta can hold up to 6 Moldable Crystals.
- Cannot gain Moldable Crystal while in Twilight Tango triggered by Resonance Liberation.
- Restore 3 Moldable Crystals upon casting Basic Attack Stage 2.
- Restore 3 Moldable Crystals upon casting Heavy Attack.
- Restore 3 Moldable Crystals upon casting Mid-air Attack Customary Greetings.
- Restore 3 Moldable Crystals upon casting Intro Skill Wintertime Aria.
- Restore 3 Moldable Crystals upon casting Resonance Skill Art of Violence.
- Restore 3 Moldable Crystals upon a successful Dodge.

### Substance

Carlotta can hold up to 120 points of Substance.
- Cannot gain Substance while in Twilight Tango triggered by Resonance Liberation.
- Restore 30 points of Substance upon casting Intro Skill Wintertime Aria.
- Restore 10 points of Substance for every 1 Moldable Crystal consumed upon casting Resonance Skill Chromatic Splendor.
- Restore 10 points of Substance for every 1 Moldable Crystal consumed upon casting Basic Attack Necessary Measures.
- Consume 1 Moldable Crystal and restore 10 points of Substance upon casting Dodge Counter.

### Deconstruction

Dealing DMG to targets inflicted with Deconstruction ignores 18% of their DEF.

## Skills

### Basic Attack

- Internal skill id: `1002801`
- Name: `Silent Execution`

Description

Basic Attack
Perform up to 2 consecutive strikes, dealing Glacio DMG.

Basic Attack - Necessary Measures
With Moldable Crystals, Carlotta's Basic Attack is replaced with Necessary Measures.
Chain up to 3 strikes, dealing Glacio DMG. Each strike of Necessary Measures consumes <SapTag=1>{1}</SapTag> Moldable {Cus:Sap,S=Crystal P=Crystals SapTag=1}.

Heavy Attack
Deliver a charged attack at the target at the cost of STA, dealing Glacio DMG.

Heavy Attack - Containment Tactics
When Carlotta's Substance is full, her Heavy Attack will be replaced with Containment Tactics: consume all Substance to deal Glacio DMG and reduce the cooldown of Resonance Skill Art of Violence by {3}s.

Mid-air Attack
Perform a Plunging Attack at the cost of STA, dealing Glacio DMG. Using Basic Attack shortly after the landing will cast Customary Greetings.

Mid-air Attack - Customary Greetings
Flip over the target and deliver a surprise shot, dealing Glacio DMG.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after a successful Dodge to deliver a riposte shot, dealing Glacio DMG. This consumes <SapTag=6>{6}</SapTag> Moldable {Cus:Sap,S=Crystal P=Crystals SapTag=6}.

Short Summary

Basic Attack
Deal Glacio DMG.

Basic Attack - Necessary Measures
With Moldable Crystals, Carlotta's Basic Attack is replaced with Necessary Measures, dealing Glacio DMG.
Each strike of Necessary Measures consumes <SapTag=1>{1}</SapTag> Moldable {Cus:Sap,S=Crystal P=Crystals SapTag=1}.

Heavy Attack
Perform a charged attack that deals Glacio DMG.

Heavy Attack - Containment Tactics
When Carlotta's Substance is full, her Heavy Attack will be replaced with Containment Tactics: consume all Substance to deal Glacio DMG and reduce the cooldown of Resonance Skill.

Mid-air Attack
Perform a Plunging Attack that deals Glacio DMG. Using Basic Attack shortly after the landing will cast Customary Greetings.

Mid-air Attack - Customary Greetings
Deal Glacio DMG.

Dodge Counter
Deal Glacio DMG. This consumes <SapTag=6>{6}</SapTag> Moldable {Cus:Sap,S=Crystal P=Crystals SapTag=6}.

### Resonance Skill

- Internal skill id: `1002802`
- Name: `Art of Violence`

Description

Deal Glacio DMG and inflict Dispersion on the target. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Resonance Skill again shortly after to cast Chromatic Splendor.

Dispersion
Targets with Dispersion are immobilized for {1}s.

Chromatic Splendor
Consume all Moldable Crystals and deal Glacio DMG.
The Resonance Skill enters cooldown after a while if Chromatic Splendor is not cast or Carlotta is switched off the field.

Short Summary

Deal Glacio DMG and inflict Dispersion on the target. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Resonance Skill again shortly after to cast Chromatic Splendor.

Dispersion
Targets with Dispersion are immobilized.

Chromatic Splendor
Consume all Moldable Crystals and deal Glacio DMG.
The Resonance Skill enters cooldown after a while if Chromatic Splendor is not cast or Carlotta is switched off the field.

### Resonance Liberation

- Internal skill id: `1002803`
- Name: `Era of New Wave`

Description

Deal Glacio DMG to all targets in an area (considered Resonance Skill DMG) and inflict Deconstruction on targets hit, then activate Twilight Tango.
Can be cast in mid-air close to the ground.

Deconstruction
Dealing DMG to targets inflicted with Deconstruction ignores {1} of their DEF.

Twilight Tango
While in Twilight Tango, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack or Resonance Liberation to cast Death Knell.
Each Death Knell grants <SapTag=3>{3}</SapTag> Meta {Cus:Sap,S=Vector P=Vectors SapTag=3}.
With {4} Meta Vectors, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack or Resonance Liberation to cast Fatal Finale.
- All Substance is removed when activating and ending Twilight Tango. Cannot perform Basic Attack Necessary Measures, Heavy Attack Containment Tactics, and Heavy Attack Imminent Oblivion while in Twilight Tango.

Death Knell
Carlotta fires powerful shots with her musket and summons {5} crystal shards to attack the target, dealing Glacio DMG, considered Resonance Skill DMG.
- Carlotta moves in the direction of the movement input with each shot of Death Knell.

Fatal Finale
Deal Glacio DMG to an area, considered Resonance Skill DMG.
- Twilight Tango ends after casting Fatal Finale.

Short Summary

Deal Glacio DMG and inflict Deconstruction, then activate Twilight Tango.
Can be cast in mid-air.

Deconstruction
Dealing DMG to targets inflicted with Deconstruction ignores {1} of their DEF.

Twilight Tango
While in Twilight Tango, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack or Resonance Liberation to cast Death Knell.
Each Death Knell grants <SapTag=3>{3}</SapTag> Meta {Cus:Sap,S=Vector P=Vectors SapTag=3}.
With {4} Meta Vectors, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack or Resonance Liberation to cast Fatal Finale.
- All Substance is removed when activating and ending Twilight Tango. Cannot cast Basic Attack Necessary Measures, Heavy Attack Containment Tactics, and Heavy Attack Imminent Oblivion while in Twilight Tango.

Death Knell
Deal Glacio DMG.
- Carlotta moves in the direction of the movement input with each shot of Death Knell.

Fatal Finale
Deal Glacio DMG to an area, considered Resonance Skill DMG.
- Twilight Tango ends after casting Fatal Finale.

### Inherent Skill 1

- Internal skill id: `1002804`
- Name: `Flawless Purity`

Description

After casting Resonance Skill Chromatic Splendor, Carlotta can perform Mid-air Attacks while being immune to any DMG or interruptions before the Mid-air Attack deals DMG.
When Carlotta is on the team, the active Resonator's Flight STA cost is reduced by {0}.

Short Summary

After casting Resonance Skill Chromatic Splendor, Carlotta can perform Mid-air Attacks while being immune to any DMG or interruptions before the Mid-air Attack deals DMG.
When Carlotta is on the team, the active Resonator's Flight STA cost is reduced by {0}.

### Inherent Skill 2

- Internal skill id: `1002805`
- Name: `Ars Gratia Artis`

Description

Intro Skill Wintertime Aria, Resonance Skill Chromatic Splendor, Resonance Liberation Death Knell, and Heavy Attack Imminent Oblivion can inflict Deconstruction.

Short Summary

Intro Skill Wintertime Aria, Resonance Skill Chromatic Splendor, Resonance Liberation Death Knell, and Heavy Attack Imminent Oblivion can inflict Deconstruction.

### Intro Skill

- Internal skill id: `1002806`
- Name: `Wintertime Aria`

Description

Attack the target, dealing Glacio DMG.

Short Summary

Attack the target, dealing Glacio DMG.

### Forte Circuit

- Internal skill id: `1002807`
- Name: `Lethal Repertoire`

Description

Heavy Attack - Imminent Oblivion
Carlotta activates Tinted Crystal every {0}s.
When Substance is full and Tinted Crystal is activated, hold Normal Attack to consume all Substance and cast Heavy Attack Imminent Oblivion, after which Tinted Crystal enters cooldown.
Deal Glacio DMG (considered Resonance Skill DMG), and reduce the cooldown of Resonance Skill Art of Violence by {1}s.

Final Bow
When Substance is full, enter the Final Bow state.
Increase the DMG Multiplier of Resonance Liberation Era of New Wave, Resonance Liberation Death Knell, and Resonance Liberation Fatal Finale by {14}. This effect ends when Carlotta is switched off the field during Twilight Tango or when Twilight Tango ends.

Substance
Carlotta can hold up to {2} points of Substance.
Cannot gain Substance while in Twilight Tango triggered by Resonance Liberation.
Restore {3} points of Substance upon casting Intro Skill Wintertime Aria.
Restore {5} points of Substance for every {4} Moldable Crystal consumed upon casting Resonance Skill Chromatic Splendor.
Restore {5} points of Substance for every {4} Moldable Crystal consumed upon casting Basic Attack Necessary Measures.
Consume {4} Moldable Crystal and restore {12} points of Substance upon casting Dodge Counter.

Moldable Crystal
Carlotta can hold up to {6} Moldable Crystals.
Cannot gain Moldable Crystal while in Twilight Tango triggered by Resonance Liberation.
Restore {7} Moldable Crystals upon casting Basic Attack Stage 2.
Restore {11} Moldable Crystals upon casting Heavy Attack.
Restore {8} Moldable Crystals upon casting Mid-air Attack Customary Greetings.
Restore {13} Moldable Crystals upon casting Intro Skill Wintertime Aria.
Restore {9} Moldable Crystals upon casting Resonance Skill Art of Violence.
Restore {10} Moldable Crystals upon a successful Dodge.

Short Summary

Heavy Attack - Imminent Oblivion
Carlotta activates Tinted Crystal every {0}s.
When Substance is full and Tinted Crystal is activated, hold Normal Attack to consume all Substance and cast Heavy Attack Imminent Oblivion, after which Tinted Crystal enters cooldown.
Deal Glacio DMG and reduce the cooldown of Resonance Skill Art of Violence by {1}s.

Final Bow
When Substance is full, enter the Final Bow state.
Increase the DMG Multiplier of Resonance Liberation Era of New Wave , Resonance Liberation Death Knell, and Resonance Liberation Fatal Finale by {14}. This effect ends when Carlotta is switched off the field during Twilight Tango or when Twilight Tango ends.

Substance
Carlotta can hold up to {2} points of Substance.
Cannot obtain Substance when in Twilight Tango.
Substance can be obtained in the following ways: Intro Skill Wintertime Aria, consuming Moldable Crystals via Resonance Skill Chromatic Splendor, Basic Attack Necessary Measures, and Dodge Counter.

Moldable Crystal
Carlotta can hold up to {6} Crystals.
Cannot gain Moldable Crystals while in Twilight Tango.
Moldable Crystal can be obtained in the following ways: Intro Skill, Basic Attack Stage 2, Heavy Attack, Mid-air Attack Customary Greetings, Resonance Skill Art of Violence, and a successful Dodge.

### Utility Passive

- Internal skill id: `1002808`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1002809`
- Name: `Closing Remarkx`

Description

Attack the target, dealing Glacio DMG equal to {0} of Carlotta's ATK.

Short Summary

Attack the target, dealing Glacio DMG equal to {0} of Carlotta's ATK.
