---
title: Watts-Strogatz Model
draft: false
tags:
---
The Watts-Strogatz model is a type of random [[Graph|graph]] which can be used to produce [[Small-World Network|small-world networks]].

## Algorithm

Given some number of [[Vertex|vertices]] $N$, a [[Degree (Graphs)#Average degree|mean degree]] $k$, and some probability of rewiring each edge $p$:

1. Create a regular ring lattice out the the $N$ vertices.
	1. This means the vertices are arranged into a circle and each vertex is wired to $k$ neighbours, with an even number (or close to even if $k$ is odd) of neighbours to the left and right of that vertex.
2. For each vertex $i$:
	1. For each of its $k/2$ rightmost neighbours $j$:
		1. Rewire the edge between $i$ and $j$ to some other vertex $k \neq i$ in the network with probability $p$

## Properties

### [[Expectation Value|Expected]] Number of Rewired Edges

The expected number of rewired edges is just half of the product of the number of vertices $N$, the mean degree $k$ and the probability of rewiring $p$:

$$
pL=\frac{pNk}{2}
$$

### Small-Worldedness 

With Watts-Strogatz graphs, we can find a probability of rewiring $p$ such that the [[Path Length (Graphs)#Average Path Length|average path length]] is low and the [[Clustering Coefficient|clustering coefficient]] is high. 

These are the properties of small-world networks, and so the Watts-Strogatz model can be used to randomly generate such graphs.

We can consider a [[Small-World Network#Formula|small-world index]] to measure the extent to which a randomly generated Watts-Strogatz graph conforms to the properties of a small-world network.

---
## References

1. 