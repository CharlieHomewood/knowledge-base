---
title: Character n-gram F-Score (chrF)
draft: false
tags:
---
The character [[N-gram|n-gram]] F-Score (chrF) is a metric used to evaluate the quality of a translation made by a machine-translation system. chrF considers translated text on a character level, rather than at word level. 

## Formula 

$$
\text{chrF}\beta=(1+\beta)^{2}\frac{\text{chrP}\cdot\text{chrR}}{\beta^{2}\cdot\text{chrP}\cdot\text{chrR}}
$$

Where:
 - $\beta$ is a weighting parameter used to determine how important the [[Recall|recall]] component should be.
 - $\text{chrP}$ is the character-level [[Precision|precision]], defined as the average number of character $n$-grams in the candidate translation which occur across the reference translations.
 - $\text{chrR}$ is the character-level recall, defined as the average number of character $n$-grams in the reference translations which occur in the candidate translation.

---
## References

1. 