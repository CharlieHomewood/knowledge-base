---
title: Logistic Function
draft: false
tags:
---
The logistic function is a function used to model the growth of some quantity $x$ which:

 - Is constrained by some limiting value $L$ (called the carry capacity)
 - Has a growth rate $k$ which depends on the quantity already accumulated.

The logistic function is a specific instance of a [[Sigmoid Function|sigmoid function]].

## Formula

In general, the logistic function is given by:

$$
f(x)=\frac{L}{1+e^{\displaystyle-k(x_{0}-x)}}
$$

Where

 - $L$ is the carry capacity 
 - $k$ is the growth rate
 - $x_{0}$ is the midpoint of the function between the lower and upper limits
	 - This is simply equal to $\displaystyle\frac{L}{2}$

### Standard Logistic Function

When the carry capacity $L$ and growth rate $k$ are both equal to $1$, we get a special case of the logistic function, called the standard logistic function:

$$
f(x)=\frac{1}{1+e^{-x}}
$$

---
## References

1. 