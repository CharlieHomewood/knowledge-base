---
title: Cramér–Rao Bound
draft: false
tags:
---
The Cramér–Rao bound is the lower bound on the [[Variance|variance]] of an [[Bias of an Estimator|unbiased estimator]], defined as the inverse of the [[Fisher Information|Fisher information]].

Given this relationship to the fisher information, this lower bound decreases as the Fisher information increases, matching the intuition that if the data provides more [[Information Content|information]] then the variance on the unbiased estimator should be lower.

## Notation

Given some parameter $\theta$, we can estimate the value of $\theta$ via an unbiased estimator $\hat{\theta}$. The variance on $\hat{\theta}$ is lower bounded by the Cramér–Rao bound:

$$
\text{Var}\left(\hat{\theta}\right)\ge\frac{1}{I(\theta)}
$$

Where $I(\theta)$ is the Fisher information, defined as:

$$
I(\theta)=\mathbb{E}\left[\left(\frac{\partial}{\partial\theta}\log f(X;\theta)\right)^{2}\right]
$$

---
## References

1. 