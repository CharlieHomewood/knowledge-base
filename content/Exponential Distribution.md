---
title: Exponential Distribution
draft: false
tags:
---
The exponential distribution is a [[Probability Distribution#Continuous Distributions|continuous probability distribution]] of a [[Random Variable|random variable]]. 

Typically, the exponential distribution is formed from the distribution of time intervals of a set of successive events drawn from a [[Poisson Distribution|Poisson distribution]].

## Notation 

We can express an exponentially distributed random variable $X$ as:

$$
X \sim \text{Exp}(\lambda)
$$

Where $\lambda$ is the rate parameter of the exponential distribution. This parameter reflects the average number of events per unit of time, essentially controlling how "steep" the distribution is. Lower values for $\lambda$ result in a shallower curve, whilst higher $\lambda$ values increase the steepness.

## Attributes

| [[Probability Density Function]]              | $$\lambda e^{-\lambda x}$$ |
| --------------------------------------------- | -------------------------- |
| [[Cumulative Distribution Function]]          | $$1-e^{-\lambda x}$$       |
| [[Arithmetic Mean\|Mean]]                     | $$\frac{1}{\lambda}$$      |
| [[Median]]                                    | $$\frac{\ln 2}{\lambda}$$  |
| [[Mode]]                                      | $$0$$                      |
| [[Variance]]                                  | $$\frac{1}{\lambda^{2}}$$  |
| [[Skewness]]                                  | $$2$$                      |
| [[Kurtosis#Excess Kurtosis\|Excess Kurtosis]] | $$6$$                      |


---
## References

1. 