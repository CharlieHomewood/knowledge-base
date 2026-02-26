---
title: Determinant
draft: false
tags:
---
A determinant is a value calculated from a [[Square Matrix|square matrix]] used to inform certain properties of that matrix.

## Formula

For the simple case of a $2\times2$ matrix $A$, the determinant is given by:

$$
\det(A)=ac-bd
$$

In general, for an $n\times n$ matrix $A$, the determinant is given by:

$$
\det(A)=\sum_{j=1}^{n}(-1)^{i+j}a_{ij}\det(M_{ij})
$$

Where:

 - $a_{ij}$ is the element of the matrix $A$ at the $i^{th}$ row and $j^{th}$ column.
 - $M_{ij}$ is called the minor of the element $a_{ij}$. This is equivalent to the matrix $A$ but with the $i^{th}$ row and $j^{th}$ column removed.

## Shortcuts for Calculating Determinants

 - If there exists a row or column in the matrix where every element is $0$, the determinant will equal $0$.
 - For a [[Square Matrix#Triangular Matrix|triangular matrix]], the determinant is just the product of the elements of the [[Main Diagonal|main diagonal]].

---
## References

1. 