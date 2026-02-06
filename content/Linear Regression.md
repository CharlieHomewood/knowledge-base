---
title: Linear Regression
draft: false
tags:
---
Linear regression is a [[Supervised Learning|supervised]] [[Machine Learning|machine learning]] [[Algorithms|algorithm]], used for continuous-output prediction tasks.

## Formula 

For some vector of continuous outputs $\hat{y}$, we can predict its value by taking the [[Feature Space|set of features]] $X$ (called the [[Design Matrix|design matrix]]), weighing them by some set of optimal weights $w$ and adding a bias term $b$. Such an operation produces a straight-line equation for each data point, mapping the each row of $X$ to some predicted continuous output value.

$$
\hat{y}=X^{\top}w+b=w_{1}x_{1}+\dots+w_{n}x_{n}+b = 
\begin{bmatrix}
x_{1}^{\top}w+b \\
x_{2}^{\top}w+b \\
\vdots \\
x_{n}^{\top}w+b
\end{bmatrix} = 
\begin{bmatrix}
\sum_{j=1}^{d} x_{1j}w_{j}+b \\
\sum_{j=1}^{d} x_{2j}w_{j}+b \\
\vdots \\
\sum_{j=1}^{d} x_{2j}w_{j}+b
\end{bmatrix}
$$
where:

$$
\begin{align}
X&=
\begin{bmatrix}
x_{11} & x_{12} & \dots & x_{1d} \\
x_{21} & x_{22} & \dots & x_{2d} \\
\vdots & \vdots & \ddots & \vdots \\
x_{n1} & x_{n2} & \dots & x_{nd} 
\end{bmatrix} \in \mathbb{R}^{n\times d} \\
w&=
\begin{bmatrix} 
w_{1}\\
w_{2}\\
\vdots\\
w_{d}
\end{bmatrix} \in \mathbb{R}^{d} \\
b &\in \mathbb{R}
\end{align}
$$

We can express this more compactly by appending the bias term to the weights and adding a column of $1$s to $X$:

$$
\mathbf{\hat{y}}=\tilde{X}\tilde{w}=
\begin{bmatrix}
x_{11} & x_{12} & \dots & x_{1d} & 1 \\
x_{21} & x_{22} & \dots & x_{2d} & 1 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
x_{n1} & x_{n2} & \dots & x_{nd} & 1 
\end{bmatrix}
\begin{bmatrix}
w_{1}\\
w_{2}\\
\vdots\\
w_{d}\\
b
\end{bmatrix} = 
\begin{bmatrix}
x_{11}w_{1}+x_{12}w_{2}+\dots+x_{1d}w_{d}+1 \cdot b \\
x_{21}w_{1}+x_{22}w_{2}+\dots+x_{2d}w_{d}+1 \cdot b \\
\vdots \\
x_{n1}w_{1}+x_{n2}w_{2}+\dots+x_{nd}w_{d}+1 \cdot b \\
\end{bmatrix}
$$

## Finding optimal weights 

### Closed-form Solution 

Linear regression takes the form: 

$$
\hat{y}=Xw
$$

Provided that $X^{\top}X$ is [[Invertible Matrix|invertible]], we can, in theory, find the optimal weights $w^{*}$:

$$
w^{*}=(X^{\top}X)^{-1}X^{\top}y
$$

This is known as the [[Normal Equation|normal equation]], which minimises the [[Sum of Squared Residuals|sum of squared residuals]].

In practice, this is computationally expensive when the size of $X$ is large

 - Standard practical methods for matrix inversion have a [[Time Complexity|time complexity]] of $O(n^{3})$

### [[Gradient Descent]]

We can initialise $w$ with random values and iteratively adjust these values to minimise a [[Loss Function|loss function]].

Gradient descent uses the derivate of the loss function, with respect to the weights, to adjust the weights in the direction which minimises the loss function. Iterating until convergence optimises the weights of the model.

Linear regression typically uses [[Mean Squared Error|mean squared error]] as the loss function $L(w)$. As such, the derivative of the mean squared error, with respect to the weights, is given by:

$$
\frac{\partial L}{\partial W}=\frac{2}{n}X^{\top}(Xw-y)
$$

Thus, at some iteration time $t$, we can find the value of the weights at $t+1$ by subtracting some multiple of the gradient ($\eta$ - this is known as the [[Learning Rate|learning rate]]) from the weights at time $t$:

$$
w^{(t+1)}=w^{(t)}-\eta\frac{2}{n}X^{\top}(Xw^{(t)}-y)
$$

Iterating until convergence will produce an optimal weight vector and bias term.

---
## References

1. 