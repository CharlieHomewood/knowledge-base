---
title: Connectedness (Graphs)
draft: false
tags:
---
Connectedness refers to whether or not two [[Vertex|vertices]] in a [[Graph|graph]] are reachable from one another.

## [[Graph#Undirected graphs|Undirected Graphs]]

An undirected graph or [[Component (Graphs)|component]] is connected if there exists a [[Path (Graphs)|path]] between every pair of vertices.

## [[Graph#Directed graphs|Directed Graphs]]

For directed graphs, there are two types of connectivity.

### Strongly Connected 

A graph or component is strongly connected if, for every pair of vertices $i$ and $j$, there exists a directed path from $i \to j$ and from $j \to i$.

### Weakly Connected 

A graph or component is weakly connected if, upon converting every [[Edge|edge]] from being directed to undirected, there exists a path between every pair of vertices.

---
## References

1. 