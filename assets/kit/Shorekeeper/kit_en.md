# Shorekeeper Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Shorekeeper`
- Skill base id: `10025`
- Localized range used: `418000000-450000000`

## Keywords

### Collapsed Core

Hitting a target with a Normal Attack generates a Collapsed Core, which transforms into a Flare Star Butterfly after 6s. Flare Star Butterflies automatically track and attack a target, dealing Spectro DMG. If there are already 5 Collapsed Cores, Shorekeeper's next Basic Attack hit will instantly convert a Collapsed Core into a Flare Star Butterfly.

### Stellarealm

Generate a Stellarealm to restore HP for all party members within its effective range continuously. This effect can be triggered once every 3s.

## Skills

### Basic Attack

- Internal skill id: `1002501`
- Name: `Origin Calculus`

Description

Basic Attack
Perform up to 4 consecutive attacks, dealing Spectro DMG. Each hit generates 1 Collapsed Core.

Heavy Attack
Hold the Normal Attack Button to enter Unbound Form, which consumes STA continuously. While in this form, Shorekeeper will:
- Generate a segment of Deductive Data every second;
- Automatically collect nearby plant collectibles.
Using up all STA or actions such as casting Basic Attack will end the Unbound Form and deal Spectro DMG to the target. Each accumulated segment of Deductive Data will convert into a segment of Empirical Data and generate a Collapsed Core.

Mid-air Attack
Consume STA to perform a Plunging Attack. Each hit generates 1 Collapsed Core. Quickly Press the Normal Attack Button after the Plunging Attack to perform Basic Attack Stage 2.

Dodge Counter
Press the Normal Attack Button after a successful Dodge to attack a target, dealing Spectro DMG.

Short Summary

Basic Attack
Deal Spectro DMG. Each hit generates 1 Collapsed Core.

Heavy Attack
Continuously consume STA to enter Unbound Form. In this form, Shorekeeper will:
- Generate a segment of Deductive Data every second;
- Automatically collect nearby plant collectibles.
- Using up all STA or actions such as casting Basic Attack will end Unbound Form and deal Spectro DMG to the target. Each accumulated segment of Deductive Data will convert into a segment of Empirical Data and generate a Collapsed Core.

Mid-air Attack
Consume STA to attack the target, generating 1 Collapsed Core on hit. Quickly follow up with Basic Attack to perform Basic Attack 2.

Dodge Counter
Deal Spectro DMG.

### Resonance Skill

- Internal skill id: `1002502`
- Name: `Chaos Theory`

Description

Restore HP for all nearby party members and summon 5 Dim Star Butterflies, which automatically track and attack a target, dealing Spectro DMG. Follow up with Basic Attack in time to start the Basic Attack cycle from Stage 2.
Can be performed in mid-air.

Short Summary

Heal all nearby party members and summon 5 Dim Star Butterflies, which automatically track and attack a target, dealing Spectro DMG. Follow up with Basic Attack to perform Basic Attack 2.
Can be cast in mid-air.

### Resonance Liberation

- Internal skill id: `1002503`
- Name: `End Loop`

Description

Outer Stellarealm
Generate the Outer Stellarealm to restore HP for all party members within its effective range continuously. This effect can be triggered once every 3s.

Inner Stellarealm
When a party member uses Intro Skill within the Outer Stellarealm, it evolves into the Inner Stellarealm. Within the effective range of the Inner Stellarealm, for every {0} of Shorekeeper's Energy Regen, all party members gain a {1} increase of Crit. Rate, up to {2}.
Inner Stellarealm has all the effects of the Outer Stellarealm.

Supernal Stellarealm
When a party member uses Intro Skill within the Inner Stellarealm, it evolves into the Supernal Stellarealm. Within the effective range of the Supernal Stellarealm, for every {3} of Shorekeeper's Energy Regen, all party members gain a {4} increase of Crit. DMG, up to {5}.
Supernal Stellarealm has all the effects of the Inner Stellarealm.

Short Summary

Outer Stellarealm
Generate the Outer Stellarealm to continuously heal all party members within its effective range.

Inner Stellarealm
When a party member uses Intro Skill within the Outer Stellarealm, it evolves into the Inner Stellarealm. Crit. Rate is increased for all party members within range of the Inner Stellarealm.
Inner Stellarealm has all the effects of the Outer Stellarealm.

Supernal Stellarealm
When a party member uses Intro Skill within the Inner Stellarealm, it evolves into the Supernal Stellarealm. Crit. DMG is increased for all party members within range of the Supernal Stellarealm.
Supernal Stellarealm has all the effects of the Outer Stellarealm and Inner Stellarealm.

### Inherent Skill 1

- Internal skill id: `1002504`
- Name: `Life Entwined`

Description

When a Resonator other than Shorekeeper takes a fatal blow, they will not be knocked out and will instead be healed for {0} of Shorekeeper's HP while Shorekeeper loses the same amount of HP. Shorekeeper's HP will not go below 1 from this effect. This effect can be triggered once every 10 minutes.

Short Summary

When a Resonator other than Shorekeeper takes a fatal blow, they will not be knocked out but will instead regain {0} of Shorekeeper's HP while Shorekeeper herself loses that much HP. Shorekeeper's HP will not go below 1 from this effect. This effect can be triggered once every 10 minutes.

### Inherent Skill 2

- Internal skill id: `1002505`
- Name: `Self Gravitation`

Description

When the on-field Resonator is within range of a Stellarealm, Shorekeeper's Energy Regen is increased by {0}, and Rover's Energy Regen is also increased by {1} if Rover is on the team.

Short Summary

When the on-field Resonator is within range of a Stellarealm, Shorekeeper's Energy Regen is increased by {0}, and Rover's Energy Regen is also increased by {1} if Rover is on the team.

### Intro Skill

- Internal skill id: `1002506`
- Name: `Proof of Existence`

Description

Enlightenment
Shorekeeper appears to restore HP for all nearby party members and summon 5 Dim Star Butterflies, which automatically track and attack a target, dealing Spectro DMG. This is considered Resonance Skill DMG.

Discernment
When a Supernal Stellarealm is generated, Shorekeeper's first Intro Skill triggered in its duration will be replaced with Intro Skill Discernment.  Casting Discernment ends the current Stellarealm, restores HP for all nearby party members, and deals Spectro DMG to the targets. This attack is guaranteed to be a Critical Hit dealing Resonance Liberation DMG. The Intro Skill Discernment can only be triggered once each time a Supernal Stellarealm is generated.

Short Summary

Enlightenment
Heal all nearby party members and summon 5 Dim Star Butterflies, which automatically track and attack a target, dealing Spectro DMG. This damage is considered Resonance Skill DMG.

Discernment
While Supernal Stellarealm is active, Shorekeeper's Intro Skill Enlightenment becomes Intro Skill Discernment. Casting Discernment ends the existing Stellarealm, restores HP for all nearby party members, and deals Spectro DMG. This attack is guaranteed to be Critical, dealing Resonance Liberation DMG. Intro Skill Discernment can only be triggered once each time a Supernal Stellarealm is generated.

### Forte Circuit

- Internal skill id: `1002507`
- Name: `Astral Chord`

Description

Flare Star Butterfly
Hitting a target with a Normal Attack generates a Collapsed Core, which transforms into a Flare Star Butterfly after {0}s. Flare Star Butterflies automatically track and attack a target, dealing Spectro DMG. If there are already {1} Collapsed Cores, Shorekeeper's next Basic Attack hit will instantly convert a Collapsed Core into a Flare Star Butterfly.

Illation
When Shorekeeper has 5 segments of Empirical Data, casting Heavy Attack will consume all segments to pull in nearby targets, dealing Spectro DMG. Meanwhile, all generated Collapsed Cores will instantly transform into Flare Star Butterflies.

Transmutation
When Shorekeeper has 5 segments of Empirical Data, casting Mid-air Attack will consume all segments to deal Spectro DMG. Meanwhile, all generated Collapsed Cores will instantly transform into Flare Star Butterflies. Quickly press the Normal Attack Button afterward to perform Basic Attack Stage 2.

Empirical Data
Shorekeeper can hold up to 5 segments of Empirical Data.
- Obtain 1 segment of Empirical Data when Basic Attack Stage 1, 2, or 4 hits a target.
- Obtain 2 segments of Empirical Data when Basic Attack Stage 3 hits a target.
- Obtain 1 segment of Empirical Data when Mid-air Attack hits a target.
- Obtain 1 segment of Empirical Data when Dodge Counter hits a target.

Short Summary

Flare Star Butterfly
Hitting a target with a Normal Attack generates a Collapsed Core, which transforms into a Flare Star Butterfly after {0}s. Flare Star Butterflies automatically track and attack a target, dealing Spectro DMG. If there are {1} on-field Collapsed Cores, Shorekeeper's next Basic Attack will instantly convert a Collapsed Core into a Flare Star Butterfly.

Illation
When Shorekeeper has 5 segments of Empirical Data, casting Heavy Attack will consume all segments to pull in nearby targets, dealing Spectro DMG. Meanwhile, all generated Collapsed Cores will instantly transform into Flare Star Butterflies.

Transmutation
When Shorekeeper has 5 segments of Empirical Data, casting Mid-air Attack will consume all segments to deal Spectro DMG. Meanwhile, all generated Collapsed Cores will instantly transform into Flare Star Butterflies. Quickly follow up with Basic Attack to perform Basic Attack 2.

Empirical Data
Shorekeeper can hold up to 5 segments of Empirical Data.
Shorekeeper gains Empirical Data through Normal Attack.

### Utility Passive

- Internal skill id: `1002508`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1002509`
- Name: `Binary Butterfly`

Description

Shorekeeper summons 1 Flare Star Butterfly and 1 Dim Star Butterfly to circle the Resonator on the field for up to {0}s, granting the following effects:
- If the Resonator on the field is hit or launched, tapping the Dodge Button allows the Resonator to immediately recover from the interruption, triggering a successful Dodge. The Resonator launched in the air can land on the ground standing if they are close to the ground. This effect can be triggered up to {1} time(s).
- All nearby party members' DMG is Amplified by {2}.

Short Summary

Shorekeeper summons 1 Flare Star Butterfly and 1 Dim Star Butterfly to circle the Resonator on the field, granting the following effects:
- If the Resonator on the field is hit or launched, using Dodge allows the Resonator to immediately trigger a successful Dodge. The launched Resonator can land on their feet if they're close to the ground. This effect can be triggered up to {1} time(s).
- All party members' DMG is Amplified by {2}.
