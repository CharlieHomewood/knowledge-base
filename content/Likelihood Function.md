---
title: Likelihood Function
draft: false
tags:
---
Assuming a given [[Probability Distribution|probability distribution]], the likelihood function is a measure of how well the chosen [[Statistical Parameters|parameters]] of that distribution fit some [[Statistical Sample|set of observations]].

[[Maximum Likelihood Estimation|Maximum likelihood estimation]] is a method to optimise the parameters of the probability distribution, given the observed data, such that the data is made most probable and thus estimates the true population parameters.

## Formula

Given some probability [[Probability Mass Function|mass]] function or [[Probability Density Function|density]] function $f_{X}(x)$ the likelihood function is given by:

$$
\mathcal{L}(\theta; X)=\prod_{i=1}^{n}f_{X}(x_{i}|\theta)
$$

It is simpler to instead consider the log-likelihood, thereby exploiting [[Logarithmic Identities|logarithmic identities]] to convert the product into a sum:

$$
\ln \mathcal{L}(\theta; X)=\sum_{i=1}^{n}\ln f_{X}(x_{i}|\theta)
$$

---
## References

1. https://www.sussex.ac.uk/study/modules/postgraduate/2024/98489-data-analysis-techniques