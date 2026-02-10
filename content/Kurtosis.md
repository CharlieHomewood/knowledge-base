---
title: Kurtosis
draft: false
tags:
---
Kurtosis is a measure of the degree of "tailedness", or tail extremity, in the [[Probability Distribution|probability distribution]] of a [[Real-Valued Function|real-valued]] [[Random Variable|random variable]]. 

> [!DANGER] Common Misconception
> Kurtosis is **not** a measure of "peakedness". See [[Kurtosis#^1|Westfall (2014)]] for a detailed explanation.

## Formula

The Kurtosis of the probability distribution of a random variable $X \in \mathbb{R}$, denoted $\text{Kurt}[X]$, is given by:

$$
\text{Kurt}[X]=E\left[\left(\frac{X-\mu}{\sigma}\right)^{4}\right] = \frac{E[(X-\mu)^{4}]}{(E[(X-\mu)^{2}])^{2}} = \frac{\mu^{4}}{\sigma^{4}}
$$

## Excess Kurtosis

It is often useful to contrast the kurtosis of a given distribution with that of a [[Normal Distribution|normal distribution]], to get an idea how how "heavy" the tails of the distribution are compared to the familiar shape of the normal distribution. 

One use case might be to quickly inspect the presence of extreme values in a sample of data, relative to a normal distribution.

There are 3 general groups of excess kurtosis: [[#Mesokurtic]], [[#Leptokurtic]] and [[#Platykurtic]]

### Formula

The formula for the excess kurtosis, $\gamma_{2}$ of some random variable $X \in \mathbb{R}$ is simply:

$$
\gamma_{2} = \text{Kurt[X]} - 3
$$

### Mesokurtic

Mesokurtic distributions have an excess kurtosis $\gamma_{2} = 0$. 

The normal distribution is an example of a mesokurtic distribution.

### Leptokurtic

Leptokurtic distributions have an excess kurtosis $\gamma_{2} > 1$

These distributions have heavier tails than mesokurtic distributions, and so extreme values are more common than with the normal distribution.

### Platykurtic

Platykurtic distributions have an excess kurtosis $\gamma_{2} < 1$ 

These distributions have lighter tails than mesokurtic distributions, and so extreme values are less common than with the normal distribution.

---
## References

1. Westfall, P.H., 2014. Kurtosis as Peakedness, 1905 – 2014. R.I.P. Am Stat 68, 191–195. [https://doi.org/10.1080/00031305.2014.917055](https://doi.org/10.1080/00031305.2014.917055)^1