---
title: Adjacency Matrix
draft: false
tags:
---
An adjacency matrix is a [[Square Matrix|square matrix]] which is used to represent the all possible [[Connectedness (Graphs)|connections]] in a given [[Graph|graph]].
 
Elements $a_{ij}$ of the matrix $A$ are [[Boolean Data|Boolean values]] ($0$ or $1$), where $1$ indicates that the [[Vertex|vertices]] $i$ and $j$ are adjacent (connected by an [[Edge|edge]]).

An [[Graph#Undirected graphs|undirected graph]] will have a symmetric adjacency matrix (i.e. $a_{ij}=a_{ji}$).

## Measuring Degree of a vertex With an Adjacency Matrix

### Undirected Graph

We can measure the [[Degree (Graphs)|degree]] of a vertex $j$ can be obtained from an adjacency matrix by summing the elements of the row or column $j$:

$$
k_{i}=\sum_{j}a_{ij}=\sum_{j}a_{ji}
$$

### [[Graph#Directed graphs|Directed Graph]]

The [[Degree (Graphs)#In-degree and Out-degree|out-degree]] of a vertex $j$ is given by summing the elements of the row $k_{\text{out}}=\sum_{j}a_{ij}$, whereas the in-degree of a vertex $j$ is given by summing the elements of the column $k_{\text{in}}=\sum_{j}a_{ji}$.

---
## References

1. 