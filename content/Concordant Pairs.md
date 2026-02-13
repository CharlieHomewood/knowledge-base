---
title: Concordant Pairs
draft: false
tags:
---
A concordant pair refers to a pair of observations made on two [[Random Variable|random variables]], $X$ and $Y$, such that the values of $X$ across the two observations is less than, equal to or greater than the values of $Y$ across the two observations, for both pairs of observations.

## Formula

We can determine whether a pair of observations are concordant by firstly multiplying the difference between the observations of the $X$ variable by the difference between the observations of the $Y$ variable. This will yield a pairwise concordance $C_{ij}$:

$$
C_{ij}=(x_{i}-x_{j})(y_{i}-y_{j})
$$

We can then use the [[Sign Function|sign function]] $\text{sgn}(z)$ to determine if $C_{ij}$ is concordant. $C_{ij}$ will be concordant when $C_{ij} > 0$:

$$
\text{sgn}(z)=\begin{cases}+1 &z>0 \\0 &z=0 \\-1 &z<0 \\\end{cases}
$$

Thus, the concordance of the pair of observations $T_{ij}$ is:

$$
T_{ij}=\begin{cases}\text{concordant} &\text{if sgn}(C_{ij})=+1 \\\text{discordant} &\text{if sgn}(C_{ij})=0 \\\text{tied} &\text{if sgn}(C_{ij})=-1 \\\end{cases}
$$

---
## References

1. 