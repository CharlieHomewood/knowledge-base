---
title: Design Matrix
draft: false
tags:
---
The design matrix is a [[Matrix|matrix]] where each row represents an observation in a data set and each column represents a particular feature within the [[Feature Space|feature space]]. Thus, each element of the matrix is the value of each feature for each observation.

The design matrix is analogous to a data frame of all the features, excluding the target variable.

Finding an optimal weighting vector to multiply this design matrix with (plus some constant bias term) to produce a vector of continuous-valued predicted outputs is essentially the task of [[Linear Regression|linear regression]].

## Notation

The design matrix is typically denoted using $X$, where $n$ is the number of observations in the data set and $d$ is the number of features:

$$
X=
\begin{bmatrix}
x_{11} & x_{12} & \dots & x_{1d} \\
x_{21} & x_{12} & \dots & x_{2d} \\
\vdots & \vdots & \ddots & \vdots \\
x_{n1} & x_{n2} & \dots & x_{nd} \\
\end{bmatrix} \in \mathbb{R}^{n \times d}
$$

---
## References

1. 