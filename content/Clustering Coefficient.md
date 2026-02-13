---
title: Clustering Coefficient
draft: false
tags:
---
In [[Graph|graph]] theory, a clustering coefficient is a measure of how much [[Vertex|vertices]] within a graph cluster together, based on their [[Connectedness (Graphs)|connectedness]].

## Formulae

### Local Clustering Coefficient

The clustering coefficient of a single vertex $C_{i}$ can be found by considering the neighbours of vertex $i$ and dividing the number of pairs of neighbours which share an [[Edge|edge]] $N_{e}$, divided by the total number of pairs of neighbours $\displaystyle{k_{i} \choose 2}$ - where $k_{i}$ is the [[Degree (Graphs)|degree]] of vertex $i$. 

This is equivalent to asking how many pairs of neighbours form a triangle with vertex $i$ (denoted $\tau_{i}$) as a proportion of the total number of pairs of neighbours:

Provided that $k_{i} > 1$:

$$
C_{i}=\frac{N_{e}}{\displaystyle{k_{i} \choose 2}}=\frac{2N_{e}}{k_{i}(k_{i}-1)}~~~~~~~~~~k_{i}>1
$$

### Global Clustering Coefficient

The clustering coefficient of the entire graph $C$ can be thought of as the [[Arithmetic Mean|mean]] of each vertex's local clustering coefficients:

$$
C=\frac{\displaystyle\sum_{\displaystyle i:k_{i}>1}C_{i}}{\displaystyle N_{\displaystyle k>1}}
$$

This can also be expressed as the number of closed [[Triplet (Graphs)|triplets]] divided by the total number of triplets in the graph.

$$
C=\frac{N_{\text{closed triplets}}}{N_{\text{triplets}}}
$$

This alternative method provides a measure of the [[Transitivity|transitivity]] of the graph.

---
## References

1. 