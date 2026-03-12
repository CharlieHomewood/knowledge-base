---
title: Linear Threshold Model (LTM)
draft: false
tags:
---
A linear threshold model (LTM) is a type of deterministic [[Graph|graph]] model used to represent how information spreads throughout a network. 

[[Vertex|vertices]] in the network are either active or inactive, with some subset of vertices being initialised as active. 

For each vertex, the sum of the weights of each [[Edge|edge]] between it and each activated vertex it is [[Connectedness (Graphs)|connected]] provides a measure of the influence of that vertex in the network.

We can then assign an activation threshold $\theta$ to each vertex and if its sum of weighted connections exceeds $\theta$ then the vertex becomes activated. Thus, the activation of a vertex is deterministic as it directly depends on its threshold and the activation of its neighbours.

## Notation

The influence of a vertex $i$ in an LTM is given by the sum of each weighted edge $w_{ji}$ between $i$ and each active vertex $(j:\text{active})$:

$$
I(i)=\sum_{j\,:\,\text{active}}w_{ji}
$$

The vertex then becomes activated if $I(i)$ exceeds some threshold assigned to that vertex $\theta_{i}$:

$$
I(i)\ge\theta_{i}
$$

## Updating Vertex States 

There are two main ways we can update the activation of vertices in the network:

1. Asynchronous Updates
	 - The activation of a vertex depends on the activation of vertices in the current configuration.
2. Synchronous Updates
	 - The activation of a vertex depends on the activation of vertices in the configuration at the end of the previous iteration. 

---
## References

1. https://www.jstor.org/stable/2778111?seq=1