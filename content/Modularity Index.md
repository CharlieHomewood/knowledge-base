---
title: Modularity Index
draft: false
tags:
---
The modularity index is a way to measure the extent to which a [[Graph|graph]] is composed on [[Module (Graphs)|modules]].

A typical rule of thumb suggests that a modularity index $Q>0.3$ is indicative of [[Modularity (Graphs)|modularity]] in the graph.

## Notation

The modularity index $Q$ of a graph is found by finding the sum of the differences between the adjacency of [[Vertex|vertex]] $i$ and $j$ and the expected number of [[Edge|edges]] between $i$ and $j$ if edges were randomly placed. 

Each difference is multiplied by $0$ if $i$ and $j$ are not part of the same module, otherwise it is multiplied by $1$. 

The sum is then multiplied by a normalisation constant $\frac{1}{2L}$, where $L$ is the number of edges in the network.

$$
Q=\frac{1}{2L}\sum_{ij}\left[A_{ij} - \frac{k_{i}k_{j}}{2L}\right]\delta_{b_{i},b_{j}}
$$

Where:
 - $\delta_{b_{i},b_{j}}$ is the [[Kronecker Delta|Kronecker delta]] of elements $i$ and $j$ of the partition vector.

---
## References

1. https://www.sussex.ac.uk/study/modules/postgraduate/2024/98557-network-science