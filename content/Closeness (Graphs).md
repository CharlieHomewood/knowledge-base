---
title: Closeness (Graphs)
draft: false
tags:
---
Closeness is a measure of centrality in a [[Graph|graph]], giving an indication of how close a [[Vertex|vertex]] is to other vertices in the graph, on average.

## Formula

For some vertex $i$, the closeness of that vertex is given by:

$$
g_{i}=\frac{1}{\sum_{i\neq j}\ell_{ij}}
$$

Where $\ell_{ij}$ is the distance between vertices $i$ and $j$. 

---
## References

1. 