---
title: Binomial Distribution
draft: false
tags:
---
The Bernoulli distribution is a [[Probability Distribution#Discrete Distributions|discrete probability distribution]] of a [[Random Variable|random variable]] for the set of possible outcomes of $n$ trials of an experiment with only $2$ possible outcomes.

## Notation

If some random variable $X$ is binomially distributed:

$$
X \sim B(n,p)
$$

## Attributes

| [[Probability Mass Function]]                 | $${n \choose k}p^{k}(1-p)^{n-k}\quad\text{where }{n\choose k}=\frac{n!}{k!(n-k)!}$$                                                                                    |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[Cumulative Distribution Function]]          | $$\sum_{x=0}^{k}{n \choose x}p^{x}(1-p)^{n-x}=I_{1-p}(n-k,k+1)=\frac{\displaystyle\int_{0}^{x}t^{n-k-1}(1-t)^{k}~dt}{\displaystyle\int_{0}^{1}t^{n-k-1}(1-t)^{k}~dt}$$ |
| [[Arithmetic Mean\|Mean]]                     | $$np$$                                                                                                                                                                 |
| [[Median]]                                    | $$\lfloor np \rfloor \text{ or } \lceil np \rceil$$                                                                                                                    |
| [[Mode]]                                      | $$\lfloor (n+1)p \rfloor \text{ or } \lceil (n+1)p \rceil-1$$                                                                                                          |
| [[Variance]]                                  | $$np(1-p)$$                                                                                                                                                            |
| [[Skewness]]                                  | $$\frac{(1-p)-p}{\sqrt{np(1-p)}}$$                                                                                                                                     |
| [[Kurtosis#Excess Kurtosis\|Excess Kurtosis]] | $$\frac{1-6p(1-p)}{np(1-p)}$$                                                                                                                                          |

---
## References

1. 