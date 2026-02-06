---
title: Gradient Descent
draft: false
tags:
---
In [[Machine Learning|machine learning]], gradient descent is an optimisation [[Algorithms|algorithm]] used to minimise a [[Loss Function|loss function]] and obtain optimal values for [[Model Parameters|model parameters]].

By finding the derivative of the loss function with respect to the parameters, we can use this information to tell us the direction in which the minimum of the loss function might be.

The derivative of the loss function with respect to the parameters will obtain a value for each parameter which tells us by how much we should subtract from each parameter value to move closer to the loss function's minimum.

## The Gradient Descent Algorithm 

1. Start with some random initial values for the model parameters $\theta^{(0)}$.
2. Choose an appropriate and differentiable loss function to evaluate model performance (e.g. [[Mean Squared Error|mean squared error]] for [[Linear Regression|linear regression]]).
3. Differentiate the loss function with respect to the model parameters.
4. Substitute the newest set of values of the model parameters into this derivative function and solve.
5. Multiply this solution by some [[Learning Rate|learning rate]] $\eta$
6. Subtract this from $\theta^{(0)}$ to obtain the next estimate for the model parameters $\theta^{(1)}$
7. Repeat steps 4-6 until convergence

### Notation

At some iteration $t$, the model parameters are given by $\theta^{(t)}$. To obtain $\theta^{(t+1)}$, we use the following formula:

$$
\theta^{(t+1)}=\theta^{(t)}-\eta\left(\frac{\partial L}{\partial \theta^{(t)}}\right)
$$
Where:

 - $\displaystyle\frac{\partial L}{\partial \theta^{(t)}}$ is the derivative of the loss function with respect to the model parameters, evaluated at the values of the model parameters $\theta^{(t)}$.
 - $\eta$ is the learning rate.

## Challenges with Gradient Descent

### Local Minima

A function $f(x)$ can have more than one minimum. As such, our gradient descent algorithm can get "stuck" in a local minimum and not find the true lowest global minimum of the function.

Take the following example. This function $f(x)$ has two minima, but evidently one is lower (relative to the $y$-axis) than the other. Gradient descent could get stuck in the right-most minima and not discover the true global minimum.

![[assets/image-1.png|555x368]]

### Saddle Points



### Potential Solutions

 - [[Regularisation]]
 - Run the algorithm with many different random initial model parameter values.
 - [[Stochastic Gradient Descent]]

---
## References

1. 