---
title: Good-Turing Smoothing
draft: false
tags:
---
Good-Turing smoothing is a particular application of [[Good-Turing Frequency Estimation|Good-Turing frequency estimation]] which is used for [[N-gram Model Smoothing|smoothing n-gram models]].

## Technique Outline

Firstly, record how many times each unique n-gram occurs, denoted as $r$

Next, count how many unique n-grams have a frequency of $r_{i},~\forall r_{i} \in r$.

 - I.e. How many n-grams have a frequency of 1? How many have a frequency of 2? How many have a frequency of 3? and so on...

We then update the frequencies of each $r_{i}$ using the following formula:

$$
r_{i}^{*}=(r_{i}+1)\frac{N_{\displaystyle r_{i}+1}}{N_{\displaystyle r_{i}}}
$$

This frees up some [[Probability Mass Function|probability mass]] to assign to unseen n-grams $W_{\text{unseen}}$ in the test corpus. Such unseen n-grams have a frequency of $r=0$ (since they haven't occurred in our training data), and so to assign probability mass to them, we can use the following expression:

$$
P(W_{\text{unseen}})=\frac{N_{r=1}}{N}
$$

Where $N_{r=1}$ is the number of unique n-grams which occur only once in the training corpus, and $N$ is the total number of unique n-grams in the entire training corpus.

We then subtract $P(W_{\text{unseen}})$ from our total probability mass (i.e. $1$) and then divide $P(W_{\text{unseen}})$ uniformly amongst each unique unseen n-gram in the test corpus to get our new [[Probability Distribution|probability distribution]] for our [[N-gram Models|n-gram model]].

---
## References

1. 