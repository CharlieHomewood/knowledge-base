---
title: Stationary Distribution
draft: false
tags:
---
A stationary distribution of a [[Markov Chain|Markov chain]] is a [[Probability Distribution|probability distribution]] of states in the chain which remains unchanged as the time step $k$ increases.

## Notation

Some [[Probability Mass Function|probability mass function]] $\pi$ is a stationary distribution if, when [[Matrix Multiplication|multiplied]] with a [[Transition Matrix|transition matrix]] $P$:

$$
\pi P=\pi
$$

We can also express the stationary distribution as:

$$
\pi(X_{k})=\sum_{j=1}^{M}\pi(X_{j})p_{jk}~~~~~\forall j,k \in \mathcal{S}
$$

---
## References

1. 