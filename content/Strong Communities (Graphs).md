---
title: Strong Communities (Graphs)
draft: false
tags:
---
A strong community is a subgraph of a [[Graph|graph]] where the [[Degree (Graphs)#In-degree and Out-degree|in-degree]] of each [[Vertex|vertex]] in the subgraph is greater than its out-degree.

We can also define a strong community in probabilistic terms: 

 - A strong community is a subgraph where each vertex has a higher probability of being [[Connectedness (Graphs)|connected]] to each of the other vertices in the subgraph compared to any other vertex in the graph.

## Notation

Given a subgraph $G_{r}$, the subgraph is a strong community if:

$$
k_{i}^{\text{in}}(G_{r}) > k_{i}^{\text{out}}(G_{r})\quad\forall i\in G_{r}
$$

---
## References

1. 