---
title: Covariance
draft: false
tags:
---
Covariance measures how multiple [[Random Variable|random variables]] vary together when they share a [[Joint Distribution|joint distribution]].

## Formula

For two random variables $X$ and $Y$, their covariance is given by:

$$
\text{cov}(X,Y)=\frac{1}{n}\sum_{i}(x_{i}-\bar{x})(y_{i}-\bar{y})
$$

A special case is the covariance of a random variable with itself $\text{cov}(X,X)$. In such a case, this is simply equivalent to the [[Variance|variance]] of $X$:

$$
\text{cov}(X,X)=\text{Var}(X)
$$

### Covariance Matrix

For $n$ random variables $X_{1},X_{2},\dots,X_{n}$, we can express their covariance using a covariance matrix, denoted $V$:

$$
V=
\begin{pmatrix}
\text{Var}(X_{1}) & \text{cov}(X_{1},X_{2}) & \dots & \text{cov}(X_{1},X_{n})) \\
\text{cov}(X_{2},X_{1}) & \text{Var}(X_{2}) & \dots & \text{cov}(X_{1},X_{n})) \\
\vdots & \vdots & \ddots & \vdots \\
\text{cov}(X_{n},X_{1}) & \text{cov}(X_{n},X_{2}) & \dots & \text{Var}(X_{n}) \\
\end{pmatrix}
$$

---
## References

1. 