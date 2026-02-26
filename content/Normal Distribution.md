---
title: Normal Distribution
draft: false
tags:
---
The normal distribution, or Gaussian distribution, is a [[Probability Distribution#Continuous Distributions|continuous probability distribution]]

## Notation

We denote a [[Random Variable|random variable]] $X$ as being normally distributed, with [[Arithmetic Mean|mean]] $\mu$ and [[Variance|variance]] $\sigma^{2}$ as follows:

$$
X \sim \mathcal{N}(\mu, \sigma^{2})
$$

## Attributes

| [[Probability Density Function]]              | $$\frac{1}{\sqrt{2\pi\sigma^{2}}}e^{\displaystyle-\frac{(x-\mu)^{2}}{2\sigma^{2}}}$$                                                                       |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[Cumulative Distribution Function]]          | $$\frac{1}{2}\left[1+\text{erf}\left(\frac{x-\mu}{\sigma \sqrt{2}}\right)\right]$$<br><br>Where $\text{erf}(z)$ is the [[Error Function\|error function]]. |
| [[Arithmetic Mean\|Mean]]                     | $\mu$                                                                                                                                                      |
| [[Median]]                                    | $\mu$                                                                                                                                                      |
| [[Mode]]                                      | $\mu$                                                                                                                                                      |
| [[Variance]]                                  | $\sigma^{2}$                                                                                                                                               |
| [[Skewness]]                                  | $0$                                                                                                                                                        |
| [[Kurtosis#Excess Kurtosis\|Excess Kurtosis]] | $0$                                                                                                                                                        |

## [[Standard Normal Distribution]]

If $\mathcal{N}(\mu, \sigma^{2})$ has a mean $\mu = 0$ and a variance $\sigma^{2} = 1$, then this special case is referred to as the standard normal distribution, denoted by $\mathcal{N}(0,1)$

---
## References

1. 