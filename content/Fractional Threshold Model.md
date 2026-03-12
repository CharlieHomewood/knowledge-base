---
title: Fractional Threshold Model
draft: false
tags:
---
A fractional threshold model is a variation on a [[Linear Threshold Model (LTM)|linear threshold model]] where we instead use a threshold to determine which proportion of [[Connectedness (Graphs)|connected]] active [[Vertex|vertices]] must be active in order to activate a given vertex.

## Notation

A fractional threshold model uses some threshold $\theta_{i}$ for each vertex $i$ and compares it with the proportion of connected vertices to a given vertex which are activated. 

$$
\frac{n_{i}^{\text{on}}}{k_{i}}\ge\theta_{i}
$$

Where:
 - $n_{i}^{\text{on}}$ is the number of activated vertices connected to vertex $i$
 - $k_{i}$ is the [[Degree (Graphs)|degree]] of vertex $i$

---
## References

1. 