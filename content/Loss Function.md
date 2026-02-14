---
title: Loss Function
draft: false
tags:
---
A loss function is a tool used in [[Machine Learning|machine learning]] [[Algorithms|algorithms]] to find optimal [[Model Parameters|parameters]] for a model, whereby optimal values are chosen as to minimise the value of the loss function.

In the case of [[Supervised Learning|supervised learning]], the loss function provides some [[Real Numbers|real value]] which represents how far away a set of predictions are from their true values.

For [[Unsupervised Learning|unsupervised learning]], the loss function works in largely the same way, but instead measures how far away the model is from achieving some goal rather than some set of true labels (since there are no true labels in unsupervised learning).

## Minimising a Loss Function 

To minimise the loss function, we generally find the [[Derivative (Calculus)|derivative]] of the loss function, with respect to the parameters of the model:

$$
\frac{\partial L}{\partial \theta}
$$

In [[Gradient Descent|gradient descent]], we then use some multiple of this derivative (this multiple is called the [[Learning Rate|learning rate]] - $\eta$) to update the parameters of the model:

$$
\theta^{(t+1)}=\theta^{(t)}-\eta\left(\frac{\partial L}{\partial\theta}\right)
$$

Such a calculation, ideally, updates the parameters such that when they are inputted into the loss function again, the value of the loss function decreases. Iterating until convergence results in the loss function being minimised.

---
## References

1. 