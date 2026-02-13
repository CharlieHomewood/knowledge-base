---
title: Cumulative Distribution Function
draft: false
tags:
---
A cumulative distribution function $F_{X}(x)$ of a [[Random Variable|random variable]] is a function used to find the probability that an event drawn from $X$ will take on a value less than or equal to $x$, or between two values $a$ and $b$.

## Notation

We can express the probability that an event drawn from $X$ take a value less than $x$ as:

$$
F_{X}(x)=P(X\le x)
$$

Or the probability that the value of the event drawn from $X$ is between $a$ and $b$, which is the CDF evaluated at $b$ minus the CDF evaluated at $a$:

$$
P(a<X\le b)=F_{X}(b)-F_{X}(a)
$$

## Relation to the [[Probability Density Function]]

If $X$ is a continuous random variable, the cumulative distribution function $F_{X}(x)$ of $X$ is equivalent to the [[Integral|integral]] of the probability density function of $X$, denoted $f_{X}(t)$, with respect to $t$ and evaluated from $-\infty$ to $x$:

$$
F_{X}(x)=\int_{-\infty}^{x}f_{X}(t)~dt
$$

Thus we can [[Derivative (Calculus)|differentiate]] $F_{X}(x)$ to find the probability density function $f_{X}(x)$:

$$
f_{X}(x)=\frac{dF_{X}(x)}{dx}
$$

---
## References

1. 