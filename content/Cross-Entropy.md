---
title: Cross-Entropy
draft: false
tags:
---
Cross-[[Shannon Entropy|entropy]] measures the [[Expectation Value|expected]] negative log-[[Likelihood Function|likelihood]] of the true [[Probability Distribution|distribution]] $p(x)$, given a predicted distribution $q(x)$. 

Essentially, this tells us the average amount of "surprise" a model with distribution $q(x)$ has when the true distribution is $p(x)$. 

If our predictions from $q(x)$ are very surprising, then our model is not outputting a distribution of values that approximate $p(x)$ well. However, if predictions from $q(x)$ are not surprising, then our model outputs values which more closely resemble $p(x)$ in their distribution. 

As such, a lower cross-entropy indicates that the $q(x)$ approximates $p(x)$ more closely.

## Formula

When $p(x)$ and $q(x)$ represent probability distributions of discrete [[Random Variable|random variables]], the cross-entropy of $p$ and $q$, denoted $H(p,q)$, is given by:

$$
H(p,q)=-\sum_{x \in X}p(x)\log q(x)
$$

In the case of continuous random variables:

$$
H(p,q)=-\int p(x) \log q(x)~dx
$$

We can also consider the cross-entropy as an expectation value. That is, the expectation of $-\log q(x)$, when $x$ is distributed $p(x)$:

$$
H(p,q)=\mathbb{E}_{x\sim p}[-\log q(x)]
$$

## Applications

 - Cross-entropy is used as a [[Loss Function|loss function]] in [[Logistic Regression#Loss Function|logistic regression]].

---
## References

1. 