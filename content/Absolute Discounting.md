---
title: Absolute Discounting
draft: false
tags:
---
Absolute discounting is a [[N-gram Model Smoothing|smoothing technique for n-gram models]].

Absolute discounting involves subtracting some fixed amount $\lambda$ from the frequencies of each n-gram in our training corpus. 

For each n-gram, we take the amount of the frequency which was discounted and assign it to a dummy token.

 - For example, if we used a bigram model, the frequency of the bigram $c(w_{2}|w_{1})$ would be subtracted by $\lambda$ and this quantity would then be assigned to the dummy token $c(\lambda,w_{1})$. We can then normalise these frequencies to retain a valid [[Probability Distribution|[probability distribution]]]

We can then assign new probability values $P_{e}$ to each n-gram in our corpus, including the unseen n-grams, using the following formula:

$$
P_{e}(w_{n}|w_{1},\dots,w_{n-1})=P_{d}(w_{n}|w_{1},\dots,w_{n-1})+P_{d}(\lambda|w_{1},\dots,w_{n-1})\times P(w_{n}|w_{2},\dots,w_{n-1})
$$

---
## References

1. 