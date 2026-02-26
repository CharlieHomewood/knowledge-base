---
title: Transition Matrix
draft: false
tags:
---
A transition matrix is a [[Square Matrix|square matrix]] used to describe the transition probabilities of a [[Markov Chain|Markov chain]].

## Notation

Let $P$ be a transition matrix and let our Markov chain have $i\in\{1,\dots,n\}$ states. We can express the probabilities of moving from state $i$ to any state $j$ using a transition matrix:

$$
P=
\begin{pmatrix}
P_{1,1} & P_{1,2} & \dots & P_{1,j} & \dots & P_{1,n} \\ 
P_{2,1} & P_{1,2} & \dots & P_{2,j} & \dots & P_{2,n} \\ 
\vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\ 
P_{i,1} & P_{i,2} & \dots & P_{i,j} & \dots & P_{i,n} \\ 
\vdots & \vdots & \ddots & \vdots & \ddots & \vdots \\ 
P_{n,1} & P_{n,2} & \dots & P_{n,j} & \dots & P_{i,n} \\
\end{pmatrix}
~~~~~~~~~~\text{where }\sum_{j=1}^{n}P_{i,j}=1
$$

The $k$-step probability of moving from $i$ to $j$ is simply found by finding $P^{k}$ and looking up the $(i,j)^{\text{th}}$ element. 

 - For example, if we wanted to know the probability of moving from state $3$ to state $7$ in $5$ time steps, we would find $P^{5}$ and look up probability value at the element $(3,5)$.

---
## References

1. 