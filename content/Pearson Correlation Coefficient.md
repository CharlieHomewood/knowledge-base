---
title: Pearson Correlation Coefficient
draft: false
tags:
---
The Pearson correlation coefficient is a measure of the linear relationship between two [[Random Variable|random variables]].

Values are bounded between $-1$ and $1$, where $1$ indicates a perfect positive [[Correlation|correlation]], whilst $-1$ indicated a perfect negative correlation. $0$ therefore indicates no linear relationship.
## Formula

### [[Statistical Population|Population]]

The population Pearson correlation coefficient of two random variables $X$ and $Y$, denoted $\rho_{X,Y}$ is found by dividing the [[Covariance|covariance]] of $X$ and $Y$ by the product of their [[Standard Deviation|standard deviations]]:

$$
\rho_{X,Y}=\frac{\text{cov}(X,Y)}{\sigma_{X}\sigma_{Y}}
$$

### [[Statistical Sample|Sample]]

Given some $n$ samples of paired data $\{(x_{1},y_{1}),\dots,(x_{n},y_{n})\}$, the sample Pearson correlation coefficient $r_{xy}$ is given by:

$$
r_{xy}=\frac{\displaystyle\sum_{i=1}^{n}(x_{i}-\bar{x})(y_{i}-\bar{y})}{\displaystyle \sqrt{\sum_{i=1}^{n}x_{i}^{2}-n\bar{x}^{2}}\sqrt{\sum_{i=1}^{n}y_{i}^{2}-n\bar{y}^{2}}}
$$

---
## References

1. 