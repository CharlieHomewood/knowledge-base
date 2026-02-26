---
title: Variance
draft: false
tags:
---
Variance is a [[Measures of Dispersion|measure of dispersion]], defined as the [[Expectation Value|expected value]] of the squared deviation from the [[Arithmetic Mean|mean]] of a [[Random Variable|random variable]], which indicates how close data points are to their average value.

As the units of the variances are always the squared units of the data it is calculated on (e.g. data in meters $\therefore$ variance in meters-squared), we can instead make use of the square root of the variance, known as the [[Standard Deviation|standard deviation]], which is often more intuitive.

## Formulae

The variance of a random variable $X$ is given by the expectation of the squared difference between $X$ and the mean $\mu$:

$$
\text{Var}(X)=E\left[(X-\mu)^{2}\right]
$$

For a discrete random variable, we can find the variance by weighting the squared difference between the value of $x$ and the mean $\mu$ by the probability of $x_{i}$ (denoted $p_{i}$):

$$
\text{Var}(X)=\sum_{i=1}^{N}p_{i}(x_{i}-\mu)^{2}
$$

For a continuous random variable, for some [[Probability Density Function|probability density function]] $f(x)$, we can evaluate the following [[Integral|integral]]:

$$
\text{Var}(X)=\int_{-\infty}^{\infty}x^{2}f(x)\,dx-\mu^{2}
$$

We can also define the variance as the [[Covariance|covariance]] of $X$ with itself:

$$
\text{Var}(X)=\text{Cov}(X,X)
$$

---
## References

1. 