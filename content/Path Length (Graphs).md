---
title: Path Length (Graphs)
draft: false
tags:
---
The path length is the number of [[Edge|edges]] in a [[Path (Graphs)|path]].

### Shortest Path Length 

The shortest path is the minimum number of edges which can be traversed to move from the source [[Vertex|vertex]] (the starting vertex) to the target vertex (the end vertex).

For [[Connectedness (Graphs)|unconnected]] nodes, the shortest path length is $\infty$.

### Average Path Length

The average path length is of a graph is the [[Arithmetic Mean|mean]] of all shortest paths for each pair of vertices

For an [[Graph#Undirected graphs|undirected graph]]:

$$
\langle \ell_{\text{undirected}} \rangle= \frac{\displaystyle2\sum_{i,j}\ell_{ij}}{N(N-1)}
$$

For a [[Graph#Directed graphs|directed graph]]:

$$
\langle \ell_{\text{undirected}} \rangle= \frac{\displaystyle\sum_{i,j}\ell_{ij}}{N(N-1)}
$$

Where there are [[Connectedness (Graphs)|disconnected]] [[Component (Graphs)|components]], we can instead calculate the average path length using the [[Harmonic Mean|harmonic mean]]:

$$
\langle \ell \rangle=\left(\frac{\displaystyle\sum_{i,j}\frac{1}{\ell_{ij}}}{\displaystyle N(N-1)}\right)
$$

### Diameter 

The diameter of a graph is the longest shortest path length in the graph:

$$
\ell_{\text{max}}=\max_{i,j}\ell_{ij}
$$

---
## References

1. 