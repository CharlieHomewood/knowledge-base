---
title: Weak Communities (Graphs)
draft: false
tags:
---
A weak community is a subgraph of a [[Graph|graph]] where sum of the [[Degree (Graphs)#In-degree and Out-degree|in-degrees]] of each [[Vertex|vertex]] in the subgraph is greater than the sum of the out-degrees

We can also define a weak community in probabilistic terms: 

 - A weak community is a subgraph where each vertex has a higher average probability of being [[Connectedness (Graphs)|connected]] to each of the other vertices in the subgraph compared to the average probability of being connected to any other vertex in the graph.

## Notation

Given a subgraph $G_{r}$, the subgraph is a weak community if:

$$
\sum_{i\in G_{r}}k_{i}^{\text{in}}(G_{r}) > \sum_{i\in G_{r}}k_{i}^{\text{out}}(G_{r})\quad\forall i\in G_{r}
$$

---
## References

1. 

---
## References

1. 