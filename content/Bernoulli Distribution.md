---
title: Bernoulli Distribution
draft: false
tags:
---
The Bernoulli distribution is a [[Probability Distribution#Discrete Distributions|discrete probability distribution]] of a [[Random Variable|random variable]] for the set of possible outcomes of a single experiment with only $2$ possible outcomes $k\in\{0,1\}$.

Each possible outcome of $k$ has a probability of $p$ and $1-p$, respectively.

A Bernoulli distribution can be thought of as a special case of the [[Binomial Distribution|binomial distribution]] where only $1$ trial is conducted, rather than $n$ trials.

## Notation

If some random variable $X$ is Bernoulli distributed:

$$
X \sim \text{Bern}(p)
$$

## Attributes

| [[Probability Mass Function]]                 | $$f(k,p)=\begin{cases}p &\text{if }k=1\\ 1-p &\text{if }k=0\end{cases}$$                                       |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [[Cumulative Distribution Function]]          | $$f(x,p)=\begin{cases}0 &\text{if }k<0\\ 1-p &\text{if }0\le k < 1\\ 1 &\text{if }k\ge1\end{cases}$$           |
| [[Arithmetic Mean\|Mean]]                     | $$p$$                                                                                                          |
| [[Median]]                                    | $$\text{Median}\begin{cases}0 &\text{if }p<1/2 \\ [0,1] &\text{if }p=1/2 \\1 &\text{if }p>1/2 \\ \end{cases}$$ |
| [[Mode]]                                      | $$\text{Mode}\begin{cases}0 &\text{if }p<1/2 \\ 0,1 &\text{if }p=1/2 \\1 &\text{if }p>1/2 \\ \end{cases}$$     |
| [[Variance]]                                  | $$p(1-p)$$                                                                                                     |
| [[Skewness]]                                  | $$\frac{(1-p)-p}{\sqrt{p(1-p)}}$$                                                                              |
| [[Kurtosis#Excess Kurtosis\|Excess Kurtosis]] | $$\frac{1-6p(1-p)}{p(1-p)}$$                                                                                   |

---
## References

1. 