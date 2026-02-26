---
title: Maximum Likelihood Estimation
draft: false
tags:
---
Maximum likelihood estimation is a method for estimating the optimal values of parameters from some chosen [[Probability Distribution|probability distribution]], given some set of observed data, which maximises the value of the [[Likelihood Function|likelihood function]].

## Method

Given some $N$ set of observations drawn from a [[Random Variable|random variable]] $X$, where each observation $x_{i}$ is drawn from some distribution $f(x_{i}|\theta)$, where $\theta$ is the parameter of the distribution being estimated (e.g. the [[Arithmetic Mean|mean]]). Over $N$ observations, we can consider the [[Joint Distribution|joint distribution]] of each observation, which is the likelihood function of $x$:

$$
\mathcal{L}(x|\theta)=f(x_{1}|\theta) \times \dots \times f(x_{2}|\theta)=\prod_{i=1}^{N}f(x_{i}|\theta)
$$

It is simpler to consider the log-likelihood, so we can use the [[Logarithmic Identities|product rule for logarithms]]:

$$
\mathcal{l}(\theta)=\ln(\mathcal{L}(x|\theta))=\sum_{i=1}^{N} \ln f(x_{i}|\theta)
$$

We next [[Derivative (Calculus)|differentiate]] this log-likelihood function with respect to $\theta$:

$$
\frac{\partial }{\partial \theta}\ln \mathcal{L}(\theta)=\sum_{i=1}^{N}\frac{1}{f(x_{i}|\theta)}\frac{\partial f(x_{i}|\theta)}{\partial \theta}
$$

We then set this derivative to be equal to $0$ and solve for $\theta$. This requires $f(x_{i}|\theta)$ to take the form of some valid, specific probability distribution (e.g. a [[Normal Distribution|normal distribution]]) in order for a solution for $\theta$ to be found.

### Uncertainty on the Parameter Estimate

Given that it is an estimate, the parameter estimated by maximum likelihood estimation also has an associated amount of uncertainty.

We can use the [[Fisher Information|Fisher information]] to quantify this uncertainty, which is given by the negative [[Expectation Value|expected value]] of the second-order derivative of the log-likelihood function:

$$
I\left(\hat{\theta}\right)=-\mathbb{E}\left[\left(\frac{\partial^{2}}{\partial\theta^{2}}\ln f\left(X;\hat{\theta}\right)\,\Bigg|\, \hat{\theta}\right)\right]=\left\langle-\mathcal{l}^{''}\left(\hat{\theta}\right)\right\rangle
$$

Finding the inverse of the Fisher information gives a lower bound on the [[Variance|variance]] on $\hat{\theta}$, also known as the [[Cramér–Rao Bound]]:

$$
\text{Var}(\hat{\theta})\ge\frac{1}{I\left(\hat{\theta}\right)}
$$

---
## References

1. https://www.sussex.ac.uk/study/modules/undergraduate/2026/98489-data-analysis-techniques