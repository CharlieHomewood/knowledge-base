---
title: Vector
draft: false
tags:
---
A vector is a mathematical object, represented by an array of ordered values, which has some magnitude and direction in a co-ordinate space.

## Notation 

In data science, vectors are typically denoted using bold letters like $\mathbf{x}$. A vector is an array of ordered values, like such:

$$
\mathbf{x}=\left[1,0.5,\sqrt{43},\pi,\dots\right]
$$

If the vector represents a sample in a dataset, then each element corresponds to a value that vector has for a particular feature.

### Column and Row Vectors

We can express vectors as columns or rows, which alters how the vector interacts with other objects in mathematical operations. For example, in [[Matrix|matrix]]-vector [[Matrix Multiplication|multiplication]], a row vector multiplied with a matrix yields a $1\times m$ row vector:

$$
\begin{bmatrix}a&b&c\end{bmatrix}\begin{bmatrix}\alpha & \beta \\ \gamma & \delta \\ \epsilon & \zeta\end{bmatrix}=[a\alpha+b\beta+c\gamma,\,a\delta+b\epsilon+c\zeta]
$$

Whereas a column vector multiplied with a matrix yields an $m\times 1$ column vector:

$$
\begin{bmatrix}\alpha & \beta & \gamma \\ \delta & \epsilon & \zeta\end{bmatrix}\begin{bmatrix}a\\b\\c\end{bmatrix}=\begin{bmatrix}a\alpha+b\beta+c\gamma \\ \,a\delta+b\epsilon+c\zeta\end{bmatrix}
$$

---
## References

1. 