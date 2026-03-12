---
title: Independent Cascade Models
draft: false
tags:
---
An independent cascade model is a type of probabilistic [[Graph|graph]] model used to represent the influence of peer-pressure: if more [[Vertex|vertices]] try to spread information to a vertex, the vertex is more likely to adopt that information.

An independent cascade model uses the following dynamics:
 - An activated vertex $i$ has a probability $p_{ij}$ to activate its neighbour $j$. 
 - Vertex $i$ can only attempt to activate vertex $j$ once.

---
## References

1. 