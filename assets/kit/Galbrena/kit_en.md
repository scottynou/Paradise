# Galbrena Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Galbrena`
- Skill base id: `10040`
- Localized range used: `418000000-450000000`

## Keywords

### Sinflame

Galbrena can hold up to {0} points of Sinflame.
During Threshold State, Basic Attack, Heavy Attack - Volley of Death, Mid-air Attack - Ashfall Barrage, Resonance Skill - Encroach, and Intro Skill - Hellflare Overload restore Sinflame on hit.
When Sinflame reaches {1} points, Resonance Skill is replaced with Resonance Skill - Ascent of Malice.
Casting Resonance Skill - Ascent of Malice converts Sinflame into an equivalent amount of Purging Flame.

### Demon Hypostasis

Casting Resonance Skill - Ascent of Malice sends Galbrena into Demon Hypostasis.
While Demon Hypostasis lasts, Galbrena's Basic Attack, Heavy Attack - Volley of Death, Mid-air Attack - Ashfall Barrage, Dodge Counter - Blood for Blood, Resonance Skill - Encroach are replaced with Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, Dodge Counter - Purgatory Scourge and Resonance Skill - Ravage, which consume Purging Flame on hit.
Demon Hypostasis ends when Purging Flame depletes or when Galbrena stays in Demon Hypostasis for over 50s.

### Purging Flame

Galbrena can hold up to {0} points of Purging Flame.
Casting Resonance Skill - Ascent of Malice converts Sinflame into an equivalent amount of Purging Flame
While Demon Hypostasis lasts, Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, Dodge Counter - Purgatory Scourge, and Resonance Skill - Ravage consume Purging Flame on hit.

### Threshold State

By default, Galbrena is in Threshold State, and in this state, she accumulates Afterflame and Sinflame.

### Afterflame

Galbrena can hold up to {0} points of Afterflame.
In Threshold State, Galbrena restores <SapTag=1>{1}</SapTag> {Cus:Sap,S=point P=points SapTag=1} of Afterflame when nearby Resonators in the team casts Echo Skills. Echoes with the same name can only trigger this effect once. This effect resets when Galbrena exits Demon Hypostasis.
While Demon Hypostasis lasts, each point of Afterflame increases the DMG dealt through Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, Resonance Skill - Ravage, and Dodge Counter - Purgatory Scourge  by {2}, up to {3}. This effect is removed upon exiting Demon Hypostasis.
All Afterflame is removed when Galbrena exits Demon Hypostasis.,

## Skills

### Basic Attack

- Internal skill id: `1004001`
- Name: `Slayer's Trigger`

Description

Basic Attack
Perform up to 4 consecutive attacks, dealing Fusion DMG. Basic Attack Stage 1 to 3 DMG are considered as Heavy Attack DMG, and Basic Attack Stage 4 DMG as Echo Skill DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after performing Basic Attack Stage 4 to perform Basic Attack Stage 2.

Heavy Attack - Volley of Death
Consume STA to attack the target and perform up to 3 consecutive attacks, dealing Fusion DMG. Stage 3 DMG is considered as Echo Skill DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after performing Heavy Attack - Volley of Death Stage 1 to perform Basic Attack Stage 2. {Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after performing Heavy Attack - Volley of Death Stage 2 or 3 to perform Basic Attack Stage 3.

Mid-air Attack - Ashfall Barrage
While in mid-air, {Cus:Ipt,Touch=tap PC=press Gamepad=press} Normal Attack to consume STA to perform a Plunging Attack, dealing Fusion DMG, considered as Heavy Attack DMG.
While in mid-air, hold Normal Attack to continuously consume STA to launch a barrage of shots at targets below, dealing Fusion DMG, considered as Heavy Attack DMG. If Galbrena does not land when interrupted during the barrage, she cannot immediately cast this skill again. Release Normal Attack during the barrage to cast Plunging Attack.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting Plunging Attack to cast Basic Attack Stage 3.

Dodge Counter - Blood for Blood
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge to attack the target, dealing Fusion DMG, considered as Heavy Attack DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting this skill to cast Basic Attack Stage 4.

Short Summary

Basic Attack
Deal Fusion DMG.

Heavy Attack
Consume STA to deal Fusion DMG.

Mid-air Attack
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack to consume STA to perform a Plunging Attack when in mid-air, dealing Fusion DMG.
Hold Normal Attack to continuously consume STA to launch a barrage of shots at targets below, dealing Fusion DMG.

Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge to attack the target, dealing Fusion DMG.

### Resonance Skill

- Internal skill id: `1004002`
- Name: `Edge Transcended`

Description

Resonance Skill - Encroach
Dash forward and leap into the air. Flip backward upon hitting the target, dealing Fusion DMG, considered Heavy Attack DMG.

Resonance Skill - Ascent of Malice
Upon reaching 100 points of Sinflame, Resonance Skill is replaced with Resonance Skill - Ascent of Malice.
Slash at enemies with her wings, dealing Fusion DMG, considered Heavy Attack DMG. Upon casting this skill:
- Galbrena enters Demon Hypostasis.
- Sinflame is converted into an equivalent amount of Purging Flame.
- Can be followed by Basic Attack - Seraphic Execution Stage 2.

Short Summary

Resonance Skill
Charge forward, dealing Fusion DMG.

Resonance Skill - Ascent of Malice
At full Sinflame, Resonance Skill is replaced with Resonance Skill - Ascent of Malice.
Slash at enemies with her wings, dealing Fusion DMG. Upon casting this skill:
- Galbrena enters Demon Hypostasis.
- Sinflame is converted into an equivalent amount of Purging Flame.

### Resonance Liberation

- Internal skill id: `1004003`
- Name: `Hellfire Absolution`

Description

Attack the target and deal Fusion DMG, considered Echo Skill DMG. Gain {0} DMG Multiplier increase for Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, and Dodge Counter - Purgatory Scourge for {1}s while in Demon Hypostasis.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack after casting Resonance Liberation to cast Basic Atttack Stage 2. While in Demon Hypostasis, cast Basic Attack - Seraphic Execution Stage 2 instead.
Can be cast in mid-air close to the ground.

Short Summary

Attack the target and deal Fusion DMG. Gain DMG Multiplier increase for various enhanced moves during Demon Hypostasis.

### Inherent Skill 1

- Internal skill id: `1004004`
- Name: `Oathbound Hunt`

Description

1 stack of Fated End is inflicted on the target when the following skills hit: Intro Skill, Basic Attack, Basic Attack - Seraphic Execution, Dodge Counter, Heavy Attack - Volley of Death, Heavy Attack - Flamewing Verdict, Mid-air Attack, Hellstride, Resonance Skill - Encroach, Resonance Skill - Ascent of Malice, Resonance Skill - Ravage and Resonance Liberation, up to {1} stacks. Each stack Amplifies the DMG directly dealt by Galbrena's Normal Attack, Resonance Skill, Forte Circuit, Resonance Liberation, Intro Skill, and Outro Skill by {0} for {2}s. The same type of skill can trigger this effect on the same target once every {3}s.
Resonance Skill - Encroach and Resonance Skill - Ravage are considered the same type of skill.

Short Summary

Hitting enemies with various types of attacks Amplifies Galbrena's DMG. This effect is stackable.

### Inherent Skill 2

- Internal skill id: `1004005`
- Name: `Sin Feaster`

Description

Casting Basic Attack  Stage 4, Basic Attack - Seraphic Execution Stage 5, Heavy Attack - Volley of Death Stage 3, and Heavy Attack - Flamewing Verdict Stage 3 recovers {0} points of STA.

Short Summary

Casting Basic Attack, enhanced Basic Attack, Heavy Attack, and the last stage of enhanced Heavy Attack recovers Galbrena's STA.

### Intro Skill

- Internal skill id: `1004006`
- Name: `Hellflare Overload`

Description

Attack the target and deal Fusion DMG.
Hold Normal Attack after casting this skill to cast Heavy Attack - Volley of Death Stage 2. While in Demon Hypostasis, cast Heavy Attack - Flamewing Verdict Stage 2 instead.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after casting this skill to perform Basic Attack Stage 2, which is replaced with  Basic Attack - Seraphic Execution Stage 2 if Galbrena is in Demon Hypostasis.

Short Summary

Attack the target and deal Fusion DMG.

### Forte Circuit

- Internal skill id: `1004007`
- Name: `Beyond Threshold`

Description

Threshold State
By default, Galbrena is in Threshold State, and in this state, she accumulates Afterflame and Sinflame.

Demon Hypostasis
While in Demon Hypostasis, Basic Attack, Heavy Attack - Volley of Death, Mid-air Attack - Ashfall Barrage, Dodge Counter - Blood for Blood, and Resonance Skill - Encroach are replaced with Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, Dodge Counter - Purgatory Scourge, and Resonance Skill - Ravage, which consume Purging Flame on hit.
While in Demon Hypostasis, every point of Afterflame increases the DMG of Basic Attack - Seraphic Execution, Heavy Attack - Flamewing Verdict, Mid-air Attack - Hellsent Barrage, Resonance Skill - Ravage, and Dodge Counter - Purgatory Scourge by {0}, up to {1}, which is removed upon exiting Demon Hypostasis.
When Purging Flame depletes or after staying in Demon Hypostasis for over 50s, Demon Hypostasis ends automatically.

Basic Attack - Seraphic Execution
Perform up to 5 consecutive attacks, dealing Fusion DMG. Consume Purging Flame on hit. Stage 1 to 3 DMG are considered Heavy Attack DMG, and Stage 4 & 5 DMG Echo Skill DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack after casting Basic Attack - Seraphic Execution Stage 5 to cast Basic Attack - Seraphic Execution Stage 3.

Heavy Attack - Flamewing Verdict
Consume STA to attack the target and perform up to 3 consecutive attacks, dealing Fusion DMG. Consume Purging Flame on hit. Stage 3 DMG is considered Echo Skill DMG.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack after casting Heavy Attack - Flamewing Verdict Stage 1 to cast Basic Attack - Seraphic Execution Stage 2.
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack after casting Heavy Attack - Flamewing Verdict Stage 2 & 3 to cast Basic Attack - Seraphic Execution Stage 3.

Short Summary

Threshold State
By default, Galbrena is in Threshold State, and in this state, she accumulates Afterflame and Sinflame.

Demon Hypostasis
While in Demon Hypostasis, Basic Attack, Heavy Attack, Mid-air Attack, Dodge Counter, and Resonance Skill are enhanced, which consume Purging Flame on hit.
While in Demon Hypostasis, the more Afterflame Galbrena has, the more DMG enemies take from various enhanced moves.
When Purging Flame depletes, Galbrena exits Demon Hypostasis automatically.

Enhanced Basic Attack
Deal Fusion DMG.

Enhanced Heavy Attack
Consume STA to deal Fusion DMG.

Enhanced Mid-air Attack
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack to consume STA to enhance Mid-air Attack, dealing Fusion DMG.
Hold Normal Attack to continuously consume STA to launch a barrage of shots at targets, dealing Fusion DMG. Release Normal Attack to cast enhanced Plunging Attack.

Enhanced Dodge Counter
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Normal Attack right after a successful Dodge to attack the target, dealing Fusion DMG.

Enhanced Resonance Skill
Charge forward, dealing Fusion DMG.

Hellstride
{Cus:Ipt,Touch=Tap PC=Press Gamepad=Press} Dodge while in combat action to deal Fusion DMG.
This skill does not interrupt the hit counter of Basic and Heavy Attack Stages.

Burning Drive
Casting Intro Skill, Hellstride, enhanced Basic Attack Stage 4, and all Resonance Skills increases Galbrena's ATK and resistance to interruptions within a certain period of time.

Forte Gauge - Afterflame and Sinflame
While in Threshold State, Galbrena recovers Afterflame when nearby Resonators in the team cast Echo Skill. Echoes with the same name can only trigger this effect once. This effect resets when Galbrena exits Demon Hypostasis.
All Sinflame is removed upon exiting Demon Hypostasis.
While in Threshold State, hitting an enemy with various types of skills recovers Sinflame.

### Utility Passive

- Internal skill id: `1004008`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1004009`
- Name: `Ashen Pursuit`

Description

Attack the target, dealing Fusion DMG equal to 79.5%*3+556.5% of Galbrena's ATK.

Short Summary

Attack the target, dealing Fusion DMG.(
