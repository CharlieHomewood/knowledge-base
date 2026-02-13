---
title: Kendall Rank Correlation Coefficient
draft: false
tags:
---
The Kendall rank correlation coefficient, also known as Kendall's $\tau$, is a particular [[Rank Correlation|rank correlation]] measure used to measure the linear relationship between two [[Ordinal Data|ordinal]] [[Random Variable|variables]].

Kendall's $\tau$ considers the difference between the number of [[Concordant Pairs|concordant pairs]] and the number of discordant pairs.

## Formula

The Kendall's $\tau$ coefficient of a [[Statistical Sample|sample]] of $n$ pairs of observations $\{(x_{1},y_{1}),\dots,(x_{n},y_{n})\}$ is given by:

$$
\tau=\frac{\displaystyle\sum_{i<j}T_{ij}}{\displaystyle{n \choose 2}}=\frac{\displaystyle2\sum_{i<j}T_{ij}}{\displaystyle n(n-1)}
$$

Where $\displaystyle\sum_{i<j}T_{ij}$ is the sum of the [[Concordant Pairs#Formula|concordance indices]] of each pair of observations in our sample.

---
## References

1. 