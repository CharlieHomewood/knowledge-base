---
title: Gilbert Random Graph Model
draft: false
tags:
---
A Gilbert random [[Graph|graph]] model is a type of random graph which involves randomly adding [[Edge|edges]] between some set of [[Vertex|vertices]].

## Algorithm 

1. Start with N vertices and $0$ edges
2. Choose some threshold $p$
3. For each pair of vertices:
	1. Generate random number $r$ between $0$ and $1$
	2. If $r$ < $p$, connect the pair of vertices
	3. If $r \ge p$, leave the pair disconnected

## Properties

### [[Expectation Value|Expected]] Number of Edges and Density

The expected number of edges $\langle L \rangle$ in such a random network is given by:

$$
\langle L \rangle = \frac{pN(N-1)}{2}
$$

We can therefore also determine the expected [[Density (Graphs)|density]] $\langle d \rangle$ of the graph. which just reduces to $p$:

$$
\langle d \rangle = \frac{\langle L \rangle}{N(N-1)/2}=\frac{pN(N-1)/2}{N(N-1)/2}=p
$$

### Probability of Vertex Having $k$ Edges

The probability of a vertex having $k$ edges can be determined using the [[Binomial Distribution|binomial distribution]]:

$$
P(k)={n-1 \choose k}p^{k}(1-p)^{n-1-k}
$$

---
## References

1. 