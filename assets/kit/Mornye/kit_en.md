# Mornye Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Mornye`
- Skill base id: `10044`
- Localized range used: `418000000-450000000`

## Keywords

### Wide Field Observation Mode

Wide Field Observation Mode lasts for {11}s.
- Upon entering Wide Field Observation Mode, Mornye generates a Syntony Field.
- While in Wide Field Observation Mode, Mornye gains Relative Momentum.
- If Relative Momentum is below {0} when holding Normal Attack, perform Basic Attack - Wide Field Observation Mode Stage 1 to 3 in sequence. If Relative Momentum reaches {0} during this time, cast Heavy Attack - Inversion instead.
- While moving, Mornye continuously consumes STA. STA cannot be recovered while in Wide Field Observation Mode.
- When Dodging with directional input, Mornye starts to fly at speed, which lasts for up to 10s or until STA is depleted or until the Wide Field Observation Mode ends.
- When Mornye is hit or launched into mid-air, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Dodge to immediately recover from the attack, which is considered a successful Dodge. This effect can be triggered up to {12} times, which resets when Wide Field Observation Mode ends.
- {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Jump and Mornye will slowly descend. Before she lands, Basic Attack - Wide Field Observation Mode, Resonance Skill - Distributed Array, and Heavy Attack - Inversion are unavailable. If Jump is {Cus:Ipt,Touch=tapped PC=pressed Gamepad=pressed} when Mornye runs out of STA, she will exit the Wide Field Observation Mode. She will leave the Wide Field Observation Mode also when she Dodges, Jumps, or performs Mid-air Attacks.
Additionally, performing environmental interactions, using Utilities, or switching to another Resonator ends Wide Field Observation Mode. The state also ends when Mornye is no longer airborne.

### Syntony Field

- Syntony Field lasts for {1}s.
- When the Syntony Field is generated, deal Fusion DMG, considered Resonance Liberation DMG.
- Continuously restores HP for all nearby Resonators in the team within the Syntony Field, triggered once every {2}s.
- Increases the Off-Tune Buildup Rate of all nearby Resonators in the team within the Syntony Field by {3}.
- Enhances the resistance to interruption of all nearby Resonators in the team within the Syntony Field.

### High Syntony Field

- High Syntony Field lasts for {6}s.
- Increases the DEF of all nearby Resonators in the team within the High Syntony Field by {8}.
- Inherits the Syntony Field's boost to resistance to interruption and Off-Tune Buildup Rate.
- Inherits the Syntony Field's healing effect and increases the Healing Multiplier by {7}.

### Rest Mass Energy

Mornye can hold up to {0} points of Rest Mass Energy.
While in Baseline Mode, she gains Rest Mass Energy when performing Basic Attack, Heavy Attack, or Dodge Counter, or when Resonance Skill - Optimal Solution hits a target./

### Relative Momentum

Mornye can hold up to {0} points of Relative Momentum.
While in Wide Field Observation Mode, she gains Relative Momentum when Basic Attack - Wide Field Observation Mode, Dodge Counter - Wide Field Observation Mode, or Resonance Skill - Distributed Array hits the target.
Mornye cannot gain Relative Momentum during Heavy Attack - Inversion.

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

- Internal skill id: `1004401`
- Name: `Ground State Calibration`

Description

Basic Attack
Perform up to 4 consecutive attacks, dealing Fusion DMG.

Heavy Attack
Consume STA to attack the target, dealing Fusion DMG.

Basic Attack - Wide Field Observation Mode
While in Wide Field Observation Mode, Basic Attack is replaced with Basic Attack - Wide Field Observation Mode.
Perform up to 3 consecutive attacks, dealing Fusion DMG.

Mid-air Attack
Consume STA to perform Mid-air Plunging Attack, dealing Fusion DMG. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack within a certain time afterward to cast Basic Attack Stage 3.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge to attack the target, dealing Fusion DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack shortly after performing this attack to perform Basic Attack Stage 2.

Dodge Counter - Wide Field Observation Mode
While in Wide Field Observation Mode, Dodge Counter is replaced with Dodge Counter - Wide Field Observation Mode.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge to counterattack and deal Fusion DMG.
Within a certain time afterward, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack to cast Basic Attack - Wide Field Observation Mode Stage 3.

Short Summary

Basic Attack
Deal Fusion DMG.

Heavy Attack
Consume STA to deal Fusion DMG.

Mid-air Attack
Consume STA to perform Mid-air Plunging Attack, dealing Fusion DMG.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge to attack the target, dealing Fusion DMG.

### Resonance Skill

- Internal skill id: `1004402`
- Name: `Resolution`

Description

Expectation Error
Heal all nearby Resonators in the team and enter the Parry state, during which DMG taken is reduced by 100% for a time. Switching to another Resonator ends this state immediately.
If attacked while in the Parry state, exit the state and cast Resonance Skill - Optimal Solution.
If not attacked while in the Parry state, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack to exit the state and cast Basic Attack Stage 2.

Optimal Solution
Stagnate nearby targets and deal Fusion DMG, reducing the cooldown of Resonance Skill - Expectation Error by {0}s.
Switching to another Resonator ends the Stagnation effect early.

Distributed Array
While in Wide Field Observation Mode, Resonance Skill is replaced with Resonance Skill - Distributed Array.
Heal all nearby Resonators in the team and summon Hover Cannons to strike the target, dealing Fusion DMG.

Short Summary

Ground Resonance Skill
Heal all nearby Resonators and enter a parry state for a period of time. Upon a successful parry, perform a counterattack on the target and reduce the cooldown of Resonance Skill – Expectation Error.

Mid-air Resonance Skill
While in Hovering Mode, Resonance Skill is replaced with Mid-air Resonance Skill.
Heal all nearby Resonators in the team and deal Fusion DMG.

### Resonance Liberation

- Internal skill id: `1004403`
- Name: `Critical Protocol`

Description

Attack the targets within the effective range, dealing Fusion DMG.
For every {1} of Mornye's Energy Regen exceeding {0}, this skill gains an additional {2} Crit. Rate (up to {3}) and {4} Crit. DMG (up to {5}).
When casting this skill, if a Syntony Field is present, remove it and generate a High Syntony Field.
Can be performed in mid-air.

High Syntony Field
- High Syntony Field lasts for {6}s.
- Increases the DEF of all nearby Resonators in the team within the High Syntony Field by {8}.
- Inherits the Syntony Field's boost to resistance to interruption and Off-Tune Buildup Rate.
- Inherits the Syntony Field's healing effect and increases the Healing Multiplier by {7}.

Short Summary

Deal Fusion DMG.
Mornye's excessive Energy Regen increases this skill's Crit. Rate and Crit. DMG.
Casting this skill destroys the existing Field and generates a Enhanced Field.

Enhanced Field
- Lasts for {6}s.
- Continuously restores HP for the active Resonator.
- All nearby Resonators in the team gain DEF and Off-Tune Buildup Rate increase. Additionally, the nearby active Resonators in the team gain higher resistance to interruption.,

### Inherent Skill 1

- Internal skill id: `1004404`
- Name: `Blueprint`

Description

Mornye's Energy Regen is increased by {4}.
Casting Intro Skill - Convergence restores {0} points of Concerto Energy, triggered once every {1}s.
Casting Basic Attack - Wide Field Observation Mode Stage 3 restores {2} points of Concerto Energy, triggered once every {3}s.

Short Summary

Mornye's Energy Regen increases. Casting Intro Skill or Basic Attack Stage 3 in mid-air restores Concerto Energy.

### Inherent Skill 2

- Internal skill id: `1004405`
- Name: `Boundedness`

Description

Casting Resonance Skill - Expectation Error or Resonance Skill - Distributed Array grants Proof of Boundedness to all Resonators in the team:
- Proof of Boundedness lasts for {0}s and can be gained once every {1} min.
- When the active Resonator takes DMG greater than {2} of their Max HP, they instead take DMG equal to {3} of their Max HP. This effect can trigger up to <SapTag=4>{4}</SapTag> {Cus:Sap,S=time P=times SapTag=4}. Proof of Boundedness is removed after triggering it <SapTag=5>{5}</SapTag> {Cus:Sap,S=time P=times SapTag=5}.
- When the active Resonator takes a fatal blow, they are not downed by this instance of damage. This effect can trigger up to <SapTag=6>{6}</SapTag> {Cus:Sap,S=time P=times SapTag=6}. Proof of Boundedness is removed after triggering it <SapTag=7>{7}</SapTag> {Cus:Sap,S=time P=times SapTag=7}.
- When Proof of Boundedness is removed, the active Resonator restores HP equal to {8} of Mornye's DEF.

Short Summary

Casting Resonance Skill grants Proof of Boundedness to all Resonators in the team, reducing incoming DMG and preventing one instance of fatal damage within a certain time.

### Intro Skill

- Internal skill id: `1004406`
- Name: `Convergence`

Description

Attack the target to deal Fusion DMG, then jump into mid-air, clearing all Rest Mass Energy and entering Wide Field Observation Mode.

Short Summary

Deal Fusion DMG and enter Hovering Mode.

### Forte Circuit

- Internal skill id: `1004407`
- Name: `Mass-Energy Equivalence`

Description

Baseline Mode
While in her default Baseline Mode, Mornye gains Rest Mass Energy.

Heavy Attack - Geopotential Shift
When Rest Mass Energy reaches {0} points, Heavy Attack is replaced with Heavy Attack - Geopotential Shift.
Cast Heavy Attack - Geopotential Shift to deal Fusion DMG, considered Heavy Attack DMG. Afterward, Mornye jumps into mid-air, consumes all Rest Mass Energy and enters Wide Field Observation Mode.

Wide Field Observation Mode
Wide Field Observation Mode lasts for {11}s.
- Upon entering Wide Field Observation Mode, Mornye generates a Syntony Field.
- While in Wide Field Observation Mode, Mornye gains Relative Momentum.
- If Relative Momentum is below {0} when holding Normal Attack, perform Basic Attack - Wide Field Observation Mode Stage 1 to 3 in sequence. If Relative Momentum reaches {0} during this time, cast Heavy Attack - Inversion instead.
- While moving, Mornye continuously consumes STA. STA cannot be recovered while in Wide Field Observation Mode.
- When Dodging with directional input, Mornye starts to fly at speed, which lasts for up to 10s or until STA is depleted or until the Wide Field Observation Mode ends.
- When Mornye is hit or launched into mid-air, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Dodge to immediately recover from the attack, which is considered a successful Dodge. This effect can be triggered up to {12} times, which resets when Wide Field Observation Mode ends.
- {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Jump and Mornye will slowly descend. Before she lands, Basic Attack - Wide Field Observation Mode, Resonance Skill - Distributed Array, and Heavy Attack - Inversion are unavailable. If Jump is {Cus:Ipt,Touch=tapped PC=pressed Gamepad=pressed} when Mornye runs out of STA, she will exit the Wide Field Observation Mode. She will leave the Wide Field Observation Mode also when she Dodges, Jumps, or performs Mid-air Attacks.
Additionally, performing environmental interactions, using Utilities, or switching to another Resonator ends <c

Short Summary

Forte Gauge
Mornye gains Ground Mode Energy while on the ground, and Hovering Mode Energy while in the air.

Enhanced Ground Heavy Attack
With full Ground Mode Energy, Enhanced Ground Heavy Attack becomes available.
Consume all Ground Mode Energy to cast Enhanced Ground Heavy Attack, dealing Fusion DMG. Afterward, enter Hovering Mode.

Hovering Mode
Hovering Mode lasts for {11}s.
- Upon entering this mode, generate a Field, dealing Fusion DMG.

Field
- Field lasts for {1}s.
- Continuously restores HP for nearby active Resonators in the team.
- Increases the Off-Tune Buildup Rate of all nearby Resonators in the team. Increases resistance to interruption of the nearby active Resonators in the team.

Enhanced Mid-air Heavy Attack
With full Hovering Mode Energy, Enhanced Mid-air Heavy Attack becomes available.
Consume all Hovering Mode Energy to cast Enhanced Mid-air Heavy Attack, dealing Fusion DMG and Marking the target for {4}s.

Marker
Upon dealing Tune Break DMG to a Marked target, inflict an Enhanced Marker on the target for {5}s.

Enhanced Marker
All nearby Resonators in the team deal more DMG to targets affected by Tune Rupture - Interfered or Tune Strain - Interfered.

Visual Field
When a target with Marker or Enhanced Marker is defeated, within a certain period of time, whenever a Resonator in the team deals damage, Mornye Marks the targets hit.

Tune Rupture Response - Particle Jet
Mornye deals Fusion DMG, considered Tune Rupture DMG.

### Utility Passive

- Internal skill id: `1004408`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1004409`
- Name: `Recursion`

Description

Resonators in the team gain {0} All DMG Amplification for {1}s.

Short Summary

Resonators in the team gain All DMG Amplification for {1}s.

### Special Skill 10

- Internal skill id: `1004410`
- Name: `Decoupling`

Description

Mornye can respond to Tune Rupture - Interfered and Tune Strain - Interfered.
- Responding to Tune Rupture - Interfered: When any Resonator in the team deals Tune Break DMG and inflicts Tune Rupture - Interfered, Mornye casts Tune Rupture Response - Particle Jet. Each target can be damaged by this skill up to once every {0}s.
- Responding to Tune Strain - Interfered: Each stack of Tune Strain - Interfered on the target increases Mornye's total DMG against them. Each point of Mornye's Tune Break Boost increases the total DMG by {1}. While Mornye is in the team, the max stack limit of Tune Strain - Interfered on a target is increased by {2}.
Mornye can perform Tune Break against the targets with full Off-Tune Level.

Short Summary

Mornye can respond to Tune Rupture - Interfered and Tune Strain - Interfered.
Mornye can perform Tune Break against the targets with full Off-Tune Level.
