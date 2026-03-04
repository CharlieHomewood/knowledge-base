---
title: D-k Randomisation
draft: false
tags:
---
$D$-$k$ randomisation is a method for generating random [[Graph|graphs]] which preserves structural properties of a given real network at increasing levels of detail as $k$ increases. 

## $Dk$ Distribution Properties

### $0k$-Distribution 

The $0k$-distribution preserves the number of [[Vertex|vertices]] and [[Edge|edges]] of the real network, but other properties are randomised.

### $1k$-distribution

The $1k$-distribution, in addition to vertex and edge counts, preserves the [[Degree Distribution|degree distribution]] of the real network. 

### $2k$-distribution

The $2k$-distribution additionally preserves the joint degree distribution and thus the property of [[Assortativity|assortativity]].

### $3k$-distribution

The $3k$-distribution adds the preservation of clustering patterns in the network by fixing the number of [[Triplet (Graphs)|triangles]] in the graph with each type of degree set.

For example, suppose a network has 3 vertices connected in a triangle. If we consider the degree of each vertex in this triangle, we get a degree set for that triangle (e.g. vertex A = 6, vertex B = 4, vertex C = 2). Suppose there are $n$ many triangle which have the same degree set. The $3k$-distribution preserves $n$ for each distinct degree set.

---
## References

1. https://pmc.ncbi.nlm.nih.gov/articles/PMC4667701/