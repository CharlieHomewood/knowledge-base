---
title: Pointwise Mutual Information
draft: false
tags:
---
Pointwise mutual information (PMI) indicates the amount of information that is gained by seeing two events occur compared to what would be expected if they were entirely independent.

In [[Natural Language Processing|natural language processing]], we can find the PMI of seeing a word and some feature occurring together in a text.

## Formula

For some feature $f$ and some word $w$, their PMI is found by taking the number of times the feature and the word occur together in a text, multiplying this by the total number of word-feature occurrences for all word-feature pairs and then dividing this by the product of the number of occurrences of the word and the number of occurrences of the feature:

$$
I(f,w)=\log\frac{P(f|w)}{P(f)}=\log\frac{P(f \cap w)}{P(f)\times P(w)}=\log\frac{\text{freq}(f,w)\times\text{freq}_{\text{tot}}}{\text{freq}_{\text{word}}\times\text{freq}_{\text{feature}}}
$$

## Positive PMI

If frequencies are $0$, we would have an undefined value. Thus, we can instead return $0$ in the case when $I(f,w) <= 0$:

$$
\text{PPMI}(f,w)=\begin{cases} I(f,w) & I(f,w) > 0 \\ 0 & \text{otherwise} \end{cases}
$$

---
## References

1. 