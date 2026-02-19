---
title: Betweenness (Graphs)
draft: false
tags:
---
Betweenness is a measure of centrality in a [[Graph|graph]], which indicates how many [[Path Length (Graphs)#Shortest Path Length|shortest paths]] go through a [[Vertex|vertex]].

## Formula

For some vertex $i$, the betweenness is given by:

$$
b_{i}=\sum_{h\neq i\neq j}\frac{\sigma_{hj}(i)}{\sigma_{hj}}
$$

Where:

 - $\sigma_{hj}$ is the number of shortest paths from vertex $h$ to $j$
 - $\sigma_{hj}(i)$ is the number of shortest paths from vertex $h$ to $j$ which pass through vertex $i$.

---
## References

1. 