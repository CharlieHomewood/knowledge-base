---
title: GloVE
draft: false
tags:
---
GLoVE is an [[Unsupervised Learning|unsupervised]] [[Machine Learning|machine learning]] [[Algorithms|algorithm]] used in [[Natural Language Processing|natural language processing]] to create [[Word Embeddings|word embeddings]].

GLoVE involves factorising the co-occurrence [[Matrix|matrix]] into a matrix of focal embeddings and a matrix of context embeddings. The weights in each of these embeddings are optimised by taking subsamples and minimising a loss function.

## Notation

Given some co-occurrence matrix for a text corpus $X$, we can factorise into a $v \times m$ focal embedding matrix $F$ and a $m \times v$ context embedding matrix $C$:

$$
\begin{align}
X&=FC^{\top} 
\\[15pt]
\begin{pmatrix}
X_{11} & \dots & X_{1j} \\
\vdots & \ddots & \vdots \\
X_{i1} & \dots & X_{ij} \\
\end{pmatrix}
&=
\begin{pmatrix}
F_{11} & \dots & F_{1m} \\
\vdots & \ddots & \vdots \\
F_{v1} & \dots & F_{vm} \\
\end{pmatrix}
\begin{pmatrix}
C_{11} & \dots & C_{1v} \\
\vdots & \ddots & \vdots \\
C_{m1} & \dots & C_{mv} \\
\end{pmatrix}
\end{align}
$$

We can then randomly sample elements $X_{ij}$ from the co-occurrence matrix, with their corresponding $F_{i}$ and $C_{j}$ elements and compute the value of a weighted least squares loss function $J$:

$$
J=\sum_{i,j=1}^{V} f(X_{ij})(F_{i} \cdot C_{j}^{\top}+b_{i}+b_{j}-\log X_{ij})^{2}
$$

Here, $f(X_{ij})$ is a weighting function applied to $X_{ij}$, which dampens the influence of lower frequency co-occurrences:

$$
f(x)=
\begin{cases}
\left(\frac{x}{x_{\max}}\right)^{\alpha} \quad &\text{ if } x < x_{\max} \\[10pt]
1 \quad &\text{otherwise}
\end{cases}
$$

$x_{\max}$ is typically chosen to be $100$.

---
## References

1. 