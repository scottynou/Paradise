# Phoebe Kit (English)

- Source pak: `c:\Program Files\Wuthering Waves\Wuthering Waves Game\Client\Saved\Resources\3.2.0\Resource\3.2.9\pakchunk2-WindowsNoEditor_P.pak`
- Character folder: `Phoebe`
- Skill base id: `10030`
- Localized range used: `418000000-450000000`

## Keywords

### Ring of Mirrors

- When Phoebe is outside of the Ring of Mirrors, any Basic Attack or Dodge Counter that hits the Ring of Mirrors will refract Holy Light, which deals Spectro DMG to targets inside the Ring of Mirrors and pulls them to the center of the ring. The DMG dealt is considered Basic Attack DMG. Can be triggered once every 0.5s.
- When Phoebe is inside the Ring of Mirrors, Basic Attack becomes Basic Attack Chamuel's Star, which performs up to 3 consecutive attacks, dealing Spectro DMG, considered as Basic Attack DMG.

### Spectro Frazzle

- While Spectro Frazzle lasts, it deals periodic Spectro DMG to the target. The target loses 1 stack of the effect with each instance of damage.
- The DMG of Spectro Frazzle scales with its stacks.

## Skills

### Basic Attack

- Internal skill id: `1003001`
- Name: `O Come Divine Light`

Description

Basic Attack
Perform up to 3 consecutive attacks of Holy Light, dealing Spectro DMG.

Heavy Attack
Consume STA to attack the target, dealing Spectro DMG.

Mid-air Attack
Consume STA to ride the staff and dive down from mid-air to attack the target, dealing Spectro DMG.

Mid-air Heavy Attack
Consume STA to ride on the staff for a distance.
- Can be re-cast after a Mid-Air Dodge or using Grapple.

Dodge Counter
After a successful Dodge, quickly use Basic Attack to attack the target, dealing Spectro DMG.
- When Phoebe is inside the Ring of Mirrors, Dodge Counter becomes Chamuel's Star: Dodge Counter.,

Short Summary

Basic Attack
Deal Spectro DMG.

Heavy Attack
Deal Spectro DMG.

Mid-air Attack
Consume STA to deal Spectro DMG.

Mid-air Heavy Attack
Consume STA to ride on the staff for a distance.

Dodge Counter
Deal Spectro DMG.

### Resonance Skill

- Internal skill id: `1003002`
- Name: `To Where Light Shines`

Description

Summon a Ring of Mirrors at the target location, making the target hit stagnate for {2}s and dealing Spectro DMG. The stagnation effect can be applied to 12 targets max for each Ring of Mirrors. Using Resonance Skill again shortly after the summoning teleports Phoebe to the Ring of Mirrors' location, dealing Spectro DMG.
Unable to teleport if Phoebe is too far from the Ring of Mirrors.

Ring of Mirrors
- Ring of Mirrors lasts for {0}s. When Phoebe summons a new Ring of Mirrors, the existing Ring of Mirrors disappears.
- When Phoebe is outside of the Ring of Mirrors, a Basic Attack or Dodge Counter that hits the Ring of Mirrors will refract Holy Light, which deals Spectro DMG to targets inside the Ring of Mirrors and pulls the targets hit to the center of the ring. The DMG dealt is considered Basic Attack DMG. Can be triggered once every {1}s.
- When Phoebe is inside the Ring of Mirrors, Basic Attack becomes Basic Attack Chamuel's Star, which performs up to 3 consecutive attacks, dealing Spectro DMG, considered Basic Attack DMG.

Short Summary

Summon a Ring of Mirrors at the target location, making the target hit stagnate and dealing Spectro DMG. Using Resonance Skill again shortly after the summoning teleports Phoebe to the Ring of Mirrors' location, dealing Spectro DMG.

Ring of Mirrors
- Ring of Mirrors lasts for {0}s. When Phoebe summons a new Ring of Mirrors, the existing Ring of Mirrors disappears.
- When Phoebe is outside of the Ring of Mirrors, a Basic Attack or Dodge Counter that hits the Ring of Mirrors will deal extra DMG and pull the targets hit to the center of the Ring of Mirrors.
- When Phoebe is inside the Ring of Mirrors, Basic Attack becomes Basic Attack Chamuel's Star, dealing Spectro DMG.

### Resonance Liberation

- Internal skill id: `1003003`
- Name: `Dawn of Enlightenment`

Description

Phoebe concentrates the light in her hands into the Mirror of Enlightenment and smashes it, dealing Spectro DMG.
- Absolution Enhancement: Increase DMG Multiplier by {0}.
- Confession Enhancement: Apply <SapTag=1>{1}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=1} of Spectro Frazzle to targets hit.

Short Summary

Deal Spectro DMG.
- Absolution Enhancement: Increase DMG Multiplier.
- Confession Enhancement: Apply Spectro Frazzle to targets hit.

### Inherent Skill 1

- Internal skill id: `1003004`
- Name: `Presence`

Description

Mid-air Heavy Attack can be cast <SapTag=0>{0}</SapTag> more {Cus:Sap,S=time P=times SapTag=0}.

Short Summary

Mid-air Heavy Attack can be cast <SapTag=0>{0}</SapTag> more {Cus:Sap,S=time P=times SapTag=0}.

### Inherent Skill 2

- Internal skill id: `1003005`
- Name: `Revelation`

Description

When in the Absolution status and Confession status, Spectro DMG Bonus is increased by {0}.

Short Summary

When in the Absolution status and Confession status, Spectro DMG Bonus is increased by {0}.

### Intro Skill

- Internal skill id: `1003006`
- Name: `Golden Grace`

Description

Knock back nearby targets and deal Spectro DMG.

Short Summary

Deal Spectro DMG.

### Forte Circuit

- Internal skill id: `1003007`
- Name: `Radiant Invocation`

Description

When Phoebe's Prayer is full, consume all Prayer to cast one of the following skills:
- Hold Basic Attack to cast Heavy Attack Absolution Litany, dealing Spectro DMG and applying {0} stack of Spectro Frazzle to the targets hit. Phoebe enters Absolution status, which allows her to deal more damage.
- Hold Resonance Skill to cast Resonance Skill Utter Confession, dealing Spectro DMG and applying {0} stack of Spectro Frazzle to the targets hit. Phoebe enters Confession status, which allows her to better exploit Spectro Frazzle.
- Absolution and Confession cannot coexist. Entering into one will end the other.
- When Divine Voice is not exhausted, Phoebe is unable to cast Heavy Attack Absolution Litany and Resonance Skill Utter Confession.
- When Divine Voice is exhausted, Phoebe will not exit the Absolution or Confession status.

Heavy Attack: Starflash
When Phoebe has Divine Voice, casting Basic Attack Stage 3 or Dodge Counter replaces the next Heavy Attack with Heavy Attack: Starflash, which deals Spectro DMG at the cost of {2} Divine Voice.
- Absolution Enhancement: Reduce the cost of Divine Voice by {3}. When the targets hit have Spectro Frazzle, the skill gains {4} DMG Amplification.
- Confession Enhancement: Apply {5} stacks of Spectro Frazzle to the targets hit.

Prayer
Phoebe can hold up to {6} Prayer.
Phoebe automatically gains {7} Prayer every second.

Divine Voice
Phoebe can hold up to {8} Divine Voice.
Casting Heavy Attack Absolution Litany or Resonance Skill Utter Confession restores {9} Divine Voice.

Short Summary

When Phoebe's Prayer is full, consume all Prayer to cast one of the following skills:
- Hold Basic Attack to cast Heavy Attack Absolution Litany, dealing Spectro DMG and applying Spectro Frazzle to the targets hit. Phoebe enters Absolution that focuses more on dealing direct DMG.
- Hold Resonance Skill to cast Resonance Skill Utter Confession, dealing Spectro DMG and applying <SapTag=0>{0}</SapTag> {Cus:Sap,S=stack P=stacks SapTag=0} of Spectro Frazzle to the targets hit. Phoebe enters Confession that focuses more on Spectro Frazzle.

Heavy Attack: Starflash
When Phoebe has Divine Voice, casting Basic Attack 3 or Dodge Counter replaces the next Heavy Attack with Heavy Attack: Starflash, which deals Spectro DMG at the cost of {2} Divine Voice.
- Absolution Enhancement: Reduce the cost of Divine Voice by {3}. When the targets hit have Spectro Frazzle, the skill deals more DMG.
- Confession Enhancement: Apply Spectro Frazzle to the targets hit.

Prayer
Phoebe can hold up to {6} Prayer.
Phoebe automatically gains {7} Prayer every second.

Divine Voice
Phoebe can hold up to {8} Divine Voice.
Heavy Attack Absolution Litany or Resonance Skill Utter Confession restores Divine Voice.

### Utility Passive

- Internal skill id: `1003008`
- Name: `Skillful Cooking`

Description

Has a chance to produce special dishes when cooking.

Short Summary

Has a chance to produce special dishes when cooking.

### Outro Skill

- Internal skill id: `1003009`
- Name: `Attentive Heart`

Description

Deal Spectro DMG equal to {0} of Phoebe's ATK to nearby targets.
- Absolution Enhancement: Increase DMG Multiplier by {1}.
- Confession Enhancement: Grant Silent Prayer to the Resonator on the field, reducing the Spectro RES of nearby targets by {2} and granting {3} Spectro Frazzle DMG Amplification. When Spectro Frazzle inflicts DMG, extend Spectro Frazzle's damage interval by {4}. This effect lasts {5}s or until Phoebe switches to Absolution status.

Short Summary

Deal Spectro DMG equal to {0} of Phoebe's ATK.
- Absolution Enhancement: Increase DMG Multiplier.
- Confession Enhancement: Reduce the Spectro RES of targets in a certain range by {2} and grant {3} Spectro Frazzle DMG Amplification. When Spectro Frazzle inflicts DMG, extend Spectro Frazzle's damage interval by {4}. This effect lasts {5}s or until Phoebe switches to Absolution status.
