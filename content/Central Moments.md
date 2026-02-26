---
title: Central Moments
draft: false
tags:
---
Central moments are statistical measures used to describe the shape of a [[Probability Distribution|probability distribution]] of a [[Random Variable|random variable]]. 

If the [[Expectation Value|expectation]] of a distribution is $\mu$ then the $r^{th}$ central moment $\mu_{r}$ is the expected value of the deviation from the mean, $E(X-\mu)$, raised to some integer power $r$.

$$
\mu_{r} = E[(X-\mu)^{r}]
$$

The $0^{th}$ and $1^{st}$ central moments of a distribution are equal to 1 and 0, respectively.

The $2^{nd}$ central moment of a distribution is equivalent to the [[Variance|variance]].

The $3^{rd}$ and $4^{th}$ central moments of a distribution are **not** equivalent to the [[Skewness|skewness]] or [[Kurtosis|kurtosis]], instead these and all subsequent $r^{th}$ central moments must be [[Standardised Moments|standardised]] by the corresponding $r^{th}$ power of the distribution's [[Standard Deviation|standard deviation]] in order to correspond directly.

## Formulae

For [[Probability Distribution#Discrete Distributions|discrete probability distributions]], we use the following summation, where $P(X=x_{i})$ is some [[Probability Mass Function|probability mass function]]:

$$
\mu_{r} = \sum_{i}(x_{i}-\mu)^{r}~P(X=x_{i})
$$

For [[Probability Distribution#Continuous Distributions|continuous probability distributions]], we use the following [[Integral|integral]], where $f(x)$ is some [[Probability Density Function|probability density function]]:

$$
\mu_{r} = \int_{-\infty}^{\infty}(x-\mu)^{r}~f(x)~d(x)
$$

The $r^{th}$ central moment of a [[Statistical Sample|sample]] is given by: 

$$
\mu_{r} = \frac{1}{N}\sum_{i}(x_{i} - \mu)^{r}
$$

---
## References

1. [Data Analysis Techniques (890F3) - University of Sussex](https://www.sussex.ac.uk/study/modules/postgraduate/2024/98489-data-analysis-techniques)