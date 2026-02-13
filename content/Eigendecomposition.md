---
title: Eigendecomposition
draft: false
tags:
---
Eigendecomposition is a method used to factorise a [[Square Matrix|square matrix]] $A$ such that it is expressed in terms of its [[Eigenvector|eigenvectors]] and [[Eigenvalue|eigenvalues]]. 

## Formula

The Eigendecomposition of a square matrix $A$ is given by the following expression:

$$
A=V\Lambda V^{-1}
$$

Where:

 - $V$ is a [[Matrix|matrix]] where each column is an eigenvector of $A$
 - $\Lambda$ is a [[Diagonal Matrix|diagonal matrix]] where the elements of the [[Main Diagonal|main diagonal]] are the eigenvalues of $A$

## [[Algorithms|Algorithm]]

1. Find the eigenvalues $\lambda$ which satisfy the characteristic equation of the matrix $A$:
$$
\det(A-\lambda I)=0
$$
2. Find the eigenvectors $V$ for each eigenvalue $\lambda$
3. Compile the matrices $V$ and $\Lambda$
4. Check that $A=V\Lambda V^{-1}$

## Applications: [[Invertible Matrix|Matrix Inversion]]

By inverting the eigenvalue matrix $\Lambda^{-1}$ - that is, taking the reciprocal of each eigenvalue in $\Lambda$ - we can find $A^{-1}$ by:

$$
A^{-1}=V\Lambda^{-1} V^{-1}
$$

---
## References

1. 