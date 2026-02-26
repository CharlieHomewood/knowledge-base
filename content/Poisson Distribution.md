---
title: Poisson Distribution
draft: false
tags:
---
The Poisson distribution is a [[Probability Distribution#Discrete Distributions|discrete probability distribution]] of a [[Random Variable|random variable]] which represents the probability of some number of events occurring within a given time interval if such events occur at some consistent [[Arithmetic Mean|average]] rate.

## Notation

We can express an Poisson distributed random variable $X$ as:

$$
X \sim \text{Pois}(\lambda)
$$

Where $\lambda$ is the average number of events which occur in a given time interval.

## Attributes

| [[Probability Mass Function]]                 | $$\frac{\lambda^{k}e^{-\lambda}}{k!} \quad \text{where }k \text{ is the number of occurrences of an event}$$                                                                                                                 |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[Cumulative Distribution Function]]          | $$\frac{\Gamma(\lfloor k+1 \rfloor, \lambda)}{\lfloor k \rfloor}=\displaystyle e^{-\lambda}\sum_{j=0}^{\lfloor k \rfloor}\frac{\lambda^{j}}{j!}\quad$$<br><br>Where $\Gamma(a,b)$ is the [[Upper Incomplete Gamma Function]] |
| [[Arithmetic Mean\|Mean]]                     | $$\lambda$$                                                                                                                                                                                                                  |
| [[Median]]                                    | $$\approx \left\lfloor\lambda + \frac{1}{3} - \frac{1}{50\lambda} \right\rfloor $$                                                                                                                                           |
| [[Mode]]                                      | $$\lfloor\lambda\rfloor-1,\lfloor\lambda\rfloor$$                                                                                                                                                                            |
| [[Variance]]                                  | $$\lambda$$                                                                                                                                                                                                                  |
| [[Skewness]]                                  | $$\frac{1}{\sqrt{\lambda}}$$                                                                                                                                                                                                 |
| [[Kurtosis#Excess Kurtosis\|Excess Kurtosis]] | $$\frac{1}{\lambda}$$                                                                                                                                                                                                        |


---
## References

1. 