---
title: Exponential Random Graph Model (ERGM)
draft: false
tags:
---
The exponential random [[Graph|graph]] model (ERGM) is an exponential model used to describe the probability that a given network in terms of its structural properties (e.g. number of [[Vertex|vertices]] and [[Edge|edges]]).

## Notation

Given some graph $G$, the probability of $G$ can be modelled in [[Vector|vector]] form as:

$$
P(G)\propto \exp\left(\theta^{\top}\mathbf{x}(G)\right)
$$

Where:
 - $\theta^{\top}$ is the transposed vector of parameters which weight the importance of each structural property
 - $\mathbf{x}(G)$ is the vector of structural properties

---
## References

1. 