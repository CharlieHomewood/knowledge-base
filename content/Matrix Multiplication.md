---
title: Matrix Multiplication
draft: false
tags:
---
[[Matrix]] multiplication is an operation one can perform between two or more matrices, producing a new matrix known as the matrix product. Matrix multiplication involves calculating the [[Dot Product|dot product]] between the matrices.

Importantly, matrix multiplication is only possible is the number of columns in the first matrix is equal to the number of rows in the second matrix.

## Notation

For some $m \times n$ matrix $A$ and some $n \times p$ matrix $B$, their dot product is given by:

$$
\begin{align}
A \cdot B
&=
\begin{pmatrix}
A_{11} & \dots & A_{1n} \\
\vdots & \ddots & \vdots \\
A_{m1} & \dots & A_{mn} \\
\end{pmatrix}
\begin{pmatrix}
B_{11} & \dots & B_{1p} \\
\vdots & \ddots & \vdots \\
B_{n1} & \dots & B_{np} \\
\end{pmatrix} \\[20pt]
&=
\begin{pmatrix}
A_{11}B_{11}+\dots+A_{1n}B_{n1} & \dots & A_{11}B_{1p}+\dots+A_{1n}B_{np} \\
\vdots & \ddots & \vdots \\
A_{m1}B_{11}+\dots+A_{mn}B_{n1} & \dots & A_{m1}B_{1p}+\dots+A_{mn}B_{np} \\
\end{pmatrix}
\end{align}
$$

---
## References

1. 