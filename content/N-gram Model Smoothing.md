---
title: N-gram Model Smoothing
draft: false
tags:
---
In [[Natural Language Processing|natural language processing]], [[N-gram Models|N-gram model]] smoothing refers to a technique to enable n-gram models to adapt to unseen n-grams in the test corpus.

Ordinary N-gram models suffer from overfitting as the test corpus (and any real-world corpus it is applied to) will almost-surely contain words n-grams which have not been seen in the training corpus. Such a model would weight the probability of these unseen n-grams with $0$, which would prevent calculations of important intrinsic properties of the model such as the [[Perplexity|perplexity]].

Smoothing techniques, in general, augment the [[Probability Mass Function|probability mass]], which the model has at present entirely assigned to the training corpus, in a manner which assigns some mass to unseen n-grams in the testing corpus. 

## Smoothing Techniques 

 - [[Absolute Discounting]]
 - [[Good-Turing Smoothing]]
 - [[Laplace Smoothing]]
 - [[Stupid Backoff]]

---
## References

1. 