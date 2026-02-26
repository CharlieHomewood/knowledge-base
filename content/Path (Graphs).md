---
title: Path (Graphs)
draft: false
tags:
---
A path in a [[Graph|graph]] is a sequence of [[Edge|edges]] which are traversed to move from [[Vertex|vertex]] $a$ (the source vertex) to vertex $b$ (the target vertex).

A path will have an associated [[Path Length (Graphs)|path length]].

## Types

### Cycles

A cycle is a path where the source vertex is equivalent to the target vertex.

### Simple Paths 

A simple path is a path which has no repeating edges.

### "Short" Paths 

A short path is dependent on the size of the graph. 

We can measure the [[Path Length (Graphs)#Average Path Length|average path length]] of a graph and consider how it changes as the size of the network $N$ increases. If this growth rate is slow (e.g. $\langle \ell \rangle \propto \log N$)

---
## References

1. 