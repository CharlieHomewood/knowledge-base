---
title: Stochastic Gradient Descent
draft: false
tags:
---
Stochastic gradient descent is a variation of the [[Gradient Descent|gradient descent]] [[Algorithms|algorithm]] where the gradient is calculated at each time step on a random subset of the data, rather than the entire data set.

Such a method requires less computation at each iteration, but can increase the number of iterations needed to converge on optimal weights.

## Formula

The weights at time $t+1$ is given by subtracting the sum of the gradient at each $i^{\text{th}}$ data point in the subset $B$ from the weights at time $t$:

$$
w^{(t+1)}=w^{(t)}-\eta \frac{1}{B}\sum_{i=1}^{B}\frac{\partial \ell(f(x_{i}),y_{i})}{\partial w}
$$

---
## References

1. 