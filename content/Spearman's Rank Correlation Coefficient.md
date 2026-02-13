---
title: Spearman's Rank Correlation Coefficient
draft: false
tags:
---
Spearman's rank correlation coefficient, also known as Spearman's $\rho$, is a particular [[Rank Correlation|rank correlation]] measure used to measure the linear relationship between two [[Ordinal Data|ordinal]] [[Random Variable|variables]].

## Formula

Given some [[Statistical Sample|sample]] of $n$ pairs of data $\{(x_{1}, y_{1}), \dots, (x_{n}, y_{n})\}$ drawn from two random variables $X$ and $Y$, we can convert each value to be a rank relative to its respective variable ($R[X_{i}], R[Y_{i}]$).

 - For example, if we had a sample $\{0.4, 0.9, 0.1, 0.7, 0.2\}$, we could convert each value to be its rank within this sample: $\{3, 5, 1, 4, 2\}$.

Thus, the Spearman's rank correlation coefficient $r_{s}$ is found in an analogous manner to the [[Pearson Correlation Coefficient|population Pearson correlation coefficient]], except using ranked variables, by dividing the [[Covariance|covariance]] of the ranked variables by the product of their [[Standard Deviation|standard deviations]]:

$$
r_{s}=\frac{\text{cov}[R[X],R[Y]]}{\sigma_{R[X]}\sigma_{R[Y]}}
$$

If the $n$ pairs of ranks all contain distinct integers, then we can find $r_{s}$ using the following expression:

$$
r_{s}=1-\frac{\displaystyle6\sum_{i}(R[X_{i}]-R[Y_{i}])^{2}}{n(n^{2}-1)}
$$

---
## References

1. 