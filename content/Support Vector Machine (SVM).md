---
title: Support Vector Machine (SVM)
draft: false
tags:
---
A support vector machine (SVM) is a [[Supervised Learning|supervised]] [[Machine Learning|machine learning]] model used for [[Classification Algorithms|classification]]  and continuous-output prediction tasks.

SVMs aim to find a hyperplane which maximises the margin between two classes whilst still correctly classifying each data point into its appropriate class in the [[Feature Space|feature space]]. This hyperplane is therefore at the midpoint between the two classes.

## Hyperplanes and Marginal Distance

We can express an equation for the marginal hyperplane as follows:

$$
w^{\top}x+b=0
$$
This marginal hyperplane is just the midpoint between the two classes in the feature space.

The marginal hyperplane's corresponding positive and negative hyperplanes are:

$$
\begin{align}
\text{Positive:}~~~~~w^{\top}x+b&=1 \\
\text{Negative:}~~~~~w^{\top}x+b&=-1
\end{align}
$$

With SVMs, we want to maximise the marginal distance - that is, the distance between the positive and negative hyperplanes. This distance is found by subtracting the negative hyperplane from the positive hyperplane:

$$
w^{\top}x_{\text{positive}}+b - w^{\top}x_{\text{negative}}+b = 1 - (-1)
$$

Simplifying:
$$
w^{\top}(x_{\text{positive}} - x_{\text{negative}}) = 2
$$

We can divide by the [[Norm|norm]] of $w$ to cancel out $w^{\top}$:
$$
\frac{w^{\top}}{||w||}(x_{\text{positive}}-x_{\text{negative}})=x_{\text{positive}}-x_{\text{negative}}=\frac{2}{||w||}
$$

Thus, maximising $\displaystyle\frac{2}{||w||}$ will find the optimal hyperplane. 
 - Similarly, minimising $\displaystyle\frac{1}{2}||w^{2}||$ will find the optimal hyperplane.

## [[Loss Function]]

### Primal Formulation

$$
L_{\text{SVM}}(W)=-\sum_{n=1}^{N}\beta_{n}(y_{n}(\mathbf{x}_{n}\mathbf{w})-1)+\frac{1}{2}||\mathbf{w}||^{2}
$$
Where:

 - $\beta_{n}$ are [[Lagrange Multiplier|Lagrange multipliers]] 
 - $y_{n}$ is 


### Dual Formulation

$$
g(\beta)=\sum_{n=1}^{N}\beta_{n}-\frac{1}{2}\sum_{n,m=1}^{N}\beta_{n}\beta_{m}y_{n}y_{m}\mathbf{x}_{n}\mathbf{x}_{m}~,~~~~~\beta_{n}\ge0
$$




---
## References

1. https://www.quarkml.com/2022/09/primal-formulation-of-svm-simplified.html