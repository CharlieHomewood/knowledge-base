---
title: Fisher Information
draft: false
tags:
---
The Fisher information measure how much [[Information Content|information]] a [[Random Variable|random variable]] has about the parameter of a [[Probability Distribution|probability distribution]] being estimated. This can be thought of as the sensitivity of the value of the [[Likelihood Function|likelihood function]] due to changes in the parameter.

Thus, the Fisher information indicates how precisely the parameter can be estimated. Smaller values for the Fisher information indicate less precision, larger values indicate more precision. 

The Fisher information can therefore inform the uncertainty on the estimated parameter during [[Maximum Likelihood Estimation|maximum likelihood estimation]].

## Formula

Geometrically, we can consider the curvature of the log-likelihood function (i.e. the second-order [[Derivative (Calculus)|derivative]], with respect to the parameter $\theta$). Sharper curvature indicates higher estimate precision.

$$
I(\theta)=-\mathbb{E}\left[\frac{\partial^{2}}{\partial\theta^{2}}\ln f\left(X\,|\,\theta\right)\right]
$$

---
## References

1. 