# Lupa Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Lupa`
- Skill base id: `10036`
- Localized range used: `418000000-450000000`

## Keywords

### Wolflame

Wolflame
Lupa can hold up to 100 points of Wolflame.
- Restore Wolflame when Normal Attacks hit the target.
- Restore Wolflame while casting Resonance Skill.
- Restore Wolflame while casting Resonance Liberation.

### Wolfaith

Wolfaith
Lupa can hold up to 2 points of Wolfaith.
Wolfaith lasts for 10s. The duration is reset when Wolfaith is restored. At the end of its duration, each remaining point of Wolfaith yields 50 points of Wolflame.
Gain1 point of Wolfaith when casting Heavy Attack - Wolf's Gnawing, Heavy Attack - Wolf's Claw, or Mid-air Attack - Firestrike.

### Pack Hunt

Pack Hunt
Resonators with Pack Hunt gain a 6% ATK increase, and 10% Fusion DMG Bonus when they attack Overlord Class or Calamity Class targets (Both are non-stackable). If there are 3 Fusion Resonators in the team, the Fusion DMG Bonus against Overlord Class or Calamity Class targets additionally increases by 10%. When the active Resonator casts Intro Skill, Pack Hunt is enhanced, granting an additional 6% ATK increase to all Resonators in the team, up to a maximum of 18%.
If Lupa's Pack Hunt reaches its cap within its duration, she enters Wild Hunt and Intro Skill - Nowhere to Run! becomes available. Wild Hunt can be triggered once during Pack Hunt.

### Glory

Resonance Liberation - Glory
Casting Resonance Liberation Fire-Kissed Glory grants Glory. Within 35s:
Attacks of all Resonators in the team ignore 3% Fusion RES. For each Fusion Resonator in the team other than Lupa, this effect increases by 3%, up to the maximum of 9%. When there are 3 Fusion Resonators in the team, Resonators' attacks further ignore 6% Fusion RES.

### Burning Matchpoint

Normal Attacks increase Wolflame Regen by 500% on hit. Cannot perform Resonance Skill Shewolf's Hunt and Resonance Skill Feral Fang in this state.

## Skills

### Basic Attack

- Internal skill id: `1003601`
- Name: `Flaming Star`

Description

Basic Attack
Perform up to 4 consecutive attacks, dealing Fusion DMG.
- After Basic Attack Stage 3, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack in the right time to cast Mid-air Attack Stage 1.
- After Dodge Counter, Basic Attack Starfall, Resonance Skill Shewolf's Hunt, or Resonance Sk

Short Summary

Basic Attack
Deal Fusion DMG.

Heavy Attack
Deal Fusion DMG.

Enhanced Heavy Attack
When Wolflame reaches certain points, perform Enhanced Heavy Attack, dealing Fusion DMG.

Mid-air Attack
Deal Fusion DMG.

Enhanced Mid-air Attack
When Wolflame reaches certain points, perform Enhanced Mid-air Attack, dealing Fusion DMG (considered Heavy Attack DMG).

Chain Basic Attack
Deal Fusion DMG.

Dodge Counter
Deal Fusion DMG.

### Resonance Skill

- Internal skill id: `1003602`
- Name: `Shewolf's Hunt`

Description

Lupa hurls her Wildfire Banner at the target, dealing Fusion DMG and restoring {0} points of Wolflame. Mark the target for {1}s. After performing Resonance Skill Shewolf's Hunt, Lupa can perform Feral Fang within a certain period of time.
Can be performed in mid-air close to the ground.
- Hold Resonance Skill to leap into the air, then {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack in time to cast Mid-air Attack Stage 1.

Resonance Skill - Feral Fang
Lupa locks onto a target, dealing Fusion DMG and restoring {2} points of Wolflame. The DMG Multiplier to marked targets is increased by {3}. Resonance Skill - Feral Fang enters cooldown if not cast in time or when Lupa is switched out.
Can be performed in mid-air close to the ground.

Short Summary

Resonance Skill
Deal Fusion DMG and mark the target.
After performing Resonance Skill, Lupa can perform Chain Resonance Skill within a certain period of time.

Chain Resonance Skill
Deal Fusion DMG. The marked target takes additional DMG.

### Resonance Liberation

- Internal skill id: `1003603`
- Name: `Fire-Kissed Glory`

Description

Attack the target and deal Fusion DMG. Performing this attack consumes all Wolfaith and restores {0} points of Wolflame. Use Basic Attack or Resonance Skill in time to cast Resonance Skill Foebreaker.
Can be performed in mid-air close to the ground.
Performing this skill strengthens all Resonators in the team. Within {1}s:
- All Resonators in the team gain Pack Hunt effect.
- If the active Resonator is hit or launched into the air, they immediately recover and are considered to have successfully dodged the attack when they are on the ground. Can be triggered up to 3 times.

Pack Hunt
Resonators with Pack Hunt gain a {2} ATK increase, and {3} Fusion DMG Bonus when they attack Overlord Class or Calamity Class targets (Both are non-stackable). If there are {7} Fusion Resonators in the team, the Fusion DMG Bonus against Overlord Class or Calamity Class targets additionally increases by {8}. When the active Resonator casts Intro Skill, Pack Hunt is enhanced, granting an additional {4} ATK increase to all Resonators in the team, up to a maximum of {5}.
If Lupa's Pack Hunt reaches its cap within its duration, she enters Wild Hunt and Intro Skill Nowhere to Run! becomes available. Wild Hunt can be triggered once per Pack Hunt.

Resonance Skill - Foebreaker
Consume all Wolflame to perform Foebreaker, dealing Fusion DMG and entering Burning Matchpoint state.

Burning Matchpoint
Normal Attacks retore {6} more Wolflame on hit. Cannot perform Resonance Skill Shewolf's Hunt and Resonance Skill Feral Fang in this state.

Short Summary

Resonance Liberation
All Resonators in the team gain Pack Hunt. Consume all Wolfaith to deal Fusion DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack or Resonance Skill in time to perform Foebreaker.
After casting Resonance Liberation, all Resonators in the team gain Pack Hunt and additional ATK Bonus. If the active Resonator is hit or launched into the air, they immediately recover. When the active Resonator performs Intro Skill, Pack Hunt is enhanced, providing further ATK Bonus, up to 2 times. When Resonators with Pack Hunt attack Overlord Class or Calamity Class targets, they gain extra Fusion DMG Bonus.

Foebreaker
Consume all Woflame to deal Fusion DMG and enter Enhanced State.

Enhanced State
Normal Attacks restore more Wolflame on hit. Cannot perform Resonance Skill and Chain Resonance Skill in this state.,

### Inherent Skill 1

- Internal skill id: `1003604`
- Name: `Remember My Name`

Description

After dashing for {0}s, Lupa enters Sprint state. The next Basic Attack is replaced with Basic Attack - Starfall.
Gain increased resistance to interruptions while casting Heavy Attack - Wolf's Gnawing, Heavy Attack - Wolf's Claw, and Mid-air Attack - Firestrike.

Short Summary

Enter Sprint state after dashing for a while. The next Basic Attack is replaced with Chain Basic Attack.
Gain increased resistance to interruptions while casting Enhanced Heavy Attacks and Enhanced Mid-air Attack.

### Inherent Skill 2

- Internal skill id: `1003605`
- Name: `Applause of Victory`

Description

Defeating a marked target resets the cooldown of Resonance Skill Shewolf's Hunt.

Resonance Liberation - Glory
Casting Resonance Liberation Fire-Kissed Glory grants Glory. Within {0}s:
Attacks of all Resonators in the team ignore {1} of the target's Fusion RES. For each Fusion Resonator in the team other than Lupa, this effect increases by {2}, up to the maximum of {3}. When there are {4} Fusion Resonators in the team, Resonators' attacks further ignore {5} Fusion RES.

Short Summary

Defeating a marked target resets Resonance Skill cooldown.
Performing Resonance Liberation grants all Resonators in the team Glory:
Their attacks ignore a certain amount of Fusion RES. The effect is enhanced with more Fusion Resonators in the team.

### Intro Skill

- Internal skill id: `1003606`
- Name: `Try Focusing, Eh`

Description

Attack the target, dealing Fusion DMG. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack following Intro Skill Try Focusing, Eh? to cast Mid-air Attack Stage 3.

Nowhere to Run!
When Lupa enters the Wild Hunt state, her next Intro Skill is replaced with Nowhere to Run!. Casting Nowhere to Run! removes the Pack Hunt and Glory effects on all Resonators in the team, dealing Fusion DMG (considered Resonance Liberation DMG).

Short Summary

Intro Skill
Deal Fusion DMG.

Enhanced Intro Skill
When Pack Hunt reaches its cap, Lupa can perform Enhanced Intro Skill.
Casting this skill removes Pack Hunt and Glory on all Resonators in the team, dealing a large amount of Fusion DMG, which is considered Resonance Liberation DMG.,

### Forte Circuit

- Internal skill id: `1003607`
- Name: `Ignis Lupa`

Description

Wildfire Banner
Lupa's ATK is increased by {0} for {1}s when performing the following actions:
- Casting Resonance Skill Feral Fang.
- Casting Heavy Attack - Wolf's Gnawing, Heavy Attack - Wolf's Claw, or Mid-air Attack - Firestrike.
- Casting Resonance Liberation Fire-Kissed Glory.
- Casting Dance With the Wolf and Dance With the Wolf: Climax.

Resonance Skill - Dance With the Wolf
When Wolfaith reaches {2} points, Resonance Skill is replaced with Dance With the Wolf. Performing Dance With the Wolf consumes all Wolfaith, dealing Fusion DMG (considered Resonance Liberation DMG).
Can be performed in mid-air close to the ground.

Resonance Skill - Dance With the Wolf: Climax
When Wolfaith reaches {3} points in the Burning Matchpoint state, Resonance Skill is replaced with Dance With the Wolf: Climax. Performing Dance With the Wolf: Climax consumes all Wolfaith, dealing Fusion DMG (considered Resonance Liberation DMG). Burning Matchpoint is removed when the skill ends.
Can be performed in mid-air close to the ground.

Resonance Skill - Set the Arena Ablaze
Within {4}s after performing Dance With the Wolf or Dance With the Wolf: Climax, Lupa will remain on the field after switching to another Resonator and back up the active Resonator when they perform Resonance Liberation, dealing Fusion DMG (considered Resonance Skill DMG). This effect can only be triggered once in its duration.

Wolflame
Lupa can hold up to {5} points of Wolflame.
- Restore Wolflame when Normal Attacks hit the target.
- Restore Wolflame while casting Resonance Skill.
- Restore Wolflame while casting Resonance Liberation.

Wolfaith
Lupa can hold up to {6} points of Wolfaith.
Wolfaith lasts for {7}s. The duration is reset when Wolfaith is restored. At the end of its duration, each remaining point of Wolfaith becomes {8} points of Wolflame.
- Restore {9} point of Wolfaith when casting Heavy Attack - Wolf's Gnawing, Heavy Attack - Wolf's Claw, or Mid-air Attack - Firestrike.

Short Summary

ATK is increased when casting Enhanced Heavy Attacks, Enhanced Mid-air Attack, Resonance Liberation, Chain Resonance Skill, Enhanced Resonance Skill, and Resonance Skill Finisher.

Forte Gauge: Wolflame and Wolfaith
Normal Attacks, Resonance Skill, Chain Resonance Skill, and Resonance Liberation grant Wolflame.
When Wolflame reaches certain points, Enhanced Heavy Attacks and Enhanced Mid-air Attack become available, granting Wolfaith.
When Wolfaith is full, Enhanced Resonance Skill becomes available, which deals Fusion DMG, considered Resonance Liberation DMG.
When Wolfaith is full and Enhanced State is active, Resonance Skill Finisher becomes available, which deals Fusion DMG, considered Resonance Liberation DMG, and ends Enhanced State.

Assisted Attack
Within a certain period after Lupa performs Enhanced Resonance Skill or Resonance Skill Finisher, Lupa will assist the active Resonator in their assault when they perform Resonance Liberation, dealing Fusion DMG, considered Resonance Skill DMG.

### Utility Passive

- Internal skill id: `1003608`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1003609`
- Name: `Stand by Me, Warrior`

Description

The incoming Resonator will have their Fusion DMG Amplified by {0} and Basic Attack DMG Amplified by {1} for {2}s or until the Resonator is switched out.

Short Summary

The incoming Resonator will have their Fusion DMG and Basic Attack DMG Amplified. Switching out the Resonator ends the effect./
