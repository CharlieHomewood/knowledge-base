---
title: Distributional Smoothing
draft: false
tags:
---
Distributional smoothing is a technique for smoothing the [[Probability Distribution|probability distribution]] of a set of words from a text corpus, improving the representation of rare words by using distributional information about similar words.

## Formula

The smoothed probability of co-occurrence between two words is given by:

$$
P_{\text{sim}}(w_{2}|w_{1})=\sum_{w^{'}\in S(w_{1})}P(w_{2}|w^{'})\frac{\text{sim}(w^{'},w_{1})}{\displaystyle\sum_{w^{'}\in S(w_{1})}\text{sim}(w^{'},w_{1})}
$$

---
## References

1. https://aclanthology.org/P94-1038/