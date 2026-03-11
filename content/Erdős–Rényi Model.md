---
title: Erdős–Rényi Model
draft: false
tags:
---
An Erdős–Rényi [[Graph|graph]] model is a type of random graph which involves choosing some number of [[Edge|edges]] uniformly at random from all possible edges for some set of [[Vertex|vertices]].

## [[Algorithms|Algorithm]]

The following algorithm can be used to generate an Erdős–Rényi random graph.

1. Start with $n$ vertices and $0$ edges.
2. Find all possible vertex pairs $\displaystyle\left(\text{i.e. } {n \choose 2}\right)$
3. Draw $m$ unique samples uniformly from all possible vertex pairs in the graph
4. Add edges between each of these $m$ pairs.

---
## References

1. 