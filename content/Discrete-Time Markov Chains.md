---
title: Discrete-Time Markov Chains
draft: false
tags:
---
A discrete-time [[Markov Chain|Markov chain]] is a type of Markov chain where each time step is discrete rather than moving continuously as with [[Continuous-Time Markov Chains|continuous-time Markov chains]]

## Notation

$$
p_{i,j}^{(k)}=\mathbb{P}(X_{t+k}=j~|~X_{t}=i)~~~~~\forall i,j \in \mathcal{S}
$$

## Properties

### Accessibility

A state $j$ is accessible to state $i$ if there exists a finite number of steps $k$ such that the probability of moving from state $i$ to state $j$ in $k$ steps is positive. In other words, accessibility means it is possible to reach $j$ from $i$ in some finite number of time steps.

$$
\inf \left\{k:p_{i,j}^{(k)}>0\right\} < \infty
$$

The above expression means: the [[Infimum|infimum]] of the set of all step numbers $k$ where it is possible to move from state $i$ to $j$ is less than infinity. 

Which means to say, consider all the possible $k$ time step paths between $i$ and $j$, then take the smallest time step and check if it is finite. If it is, then $j$ is accessible from $i$.

### Communication

$$
i \leftrightarrow j \Leftrightarrow i \to j ~\land~ j \to i~~~~~\forall i,j\in\mathcal{S}
$$

### Irreducibility

$$
\exists k : p_{i,j}^{(k)}>0~~~~~\forall i,j \in \mathcal{S}
$$

### Periodicity

$$
D=\gcd\left\{k \ge 1: p_{i,j}^{(k)}>0\right\}~~~~~\forall i \in \mathcal{S}
$$

---
## References

1. 