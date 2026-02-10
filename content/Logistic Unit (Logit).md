---
title: Logistic Unit (Logit)
draft: false
tags:
---
The logistic unit (logit), is the inverse of the [[Logistic Function#Standard Logistic Function|standard logistic function]]

## Formula

$$
\text{logit}=\ln\left(\frac{p}{1-p}\right)~~~~~\text{for } p \in (0, 1)
$$

If $p$ is a probability, say $p(x)$, then this logit can also be referred to as the log-odds of $x$

## Applications

### [[Logistic Regression]]

We can make predictions $\hat{y}$ from our feature space by using a [[Linear Regression|linear model]]:

$$
\hat{y}=xw+b=\beta_{0}+\beta_{1}x_{1}+\dots+\beta_{n}x_{n}
$$

However, with logistic regression, our predicted values $\hat{y}$ are discrete rather than continuous (e.g.  binary - $0$ or $1$) as we are interested in classification, not continuous-output prediction.

So to make use of a linear model whilst being able to make categorical predictions, we can first consider the [[Odds|odds]] of belonging to class $1$, given our data $X$, $P(Y=1|X)$ compared to class $0$, given $X$, $P(Y=0|X)$:

$$
\text{odds}=\frac{P(Y=1|X)}{P(Y=0|X)}
$$

As we are making use of a linear model, our weights and features are all [[Real-Valued Function|real-valued]] between $(-\infty, \infty)$ and so the output must also be real-valued $(-\infty, \infty)$. But since odds are bounded $[0,\infty)$, we need to convert them such that they are unbounded. 

We can achieve this by taking the natural log of the odds, known as the logistic unit (logit) or log-odds:

$$
\text{log-odds}=\ln\left(\frac{P(Y=k|X)}{P(Y=K|X)}\right) \in (-\infty, \infty)
$$

We can therefore express the log-odds of a feature vector belonging to class $k$, relative to some reference class $K$, as a linear combination of each weighted feature:

$$
\ln\left(\frac{P(Y=k|X)}{P(Y=K|X)}\right)=\beta_{k0}+\beta_{k1}x_{1}+\dots+\beta_{kn}x_{n}=\mathbf{xw}
$$

Here, the coefficients $\beta_{i}$ (or weights $\mathbf{w}$), correspond to the change in the log-odds of belonging to class $k$, relative to class $K$, due to a unit increase in the feature $x_{i}$, holding all other values constant.

---
## References

1. 