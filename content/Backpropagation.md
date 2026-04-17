---
title: Backpropagation
draft: false
tags:
---
Backpropagation is a method used in [[Neural Network|neutral networks]] to update the weights (i.e. [[Gradient Descent|gradient descent]]) of each layer of the network after each training iteration.

Backpropagation makes use of the [[Chain Rule|chain rule]] to find the gradient of the [[Loss Function|loss function]] with respect to the weights of the network.

## Formula

To find the gradient of the loss function with respect to the weights of a layer $L$, we can use the chain rule to backpropagate:

$$
\frac{\partial L}{\partial w^{(L)}}=\frac{\partial L}{\partial a^{(L)}}\frac{\partial a^{(L)}}{\partial z^{(L)}}\frac{\partial z^{(L)}}{\partial w^{(L)}}
$$

Where:

 - $w^{(L)}$ are the weights of all the neurons in layer $L$
 - $a^{(L)}$ are the values of the activations of each neuron in layer $L$
 - $z^{(L)}$ are the outputs of the linear models in the neurons in layer $L$

We can also consider the gradient of the loss function with respect to the $i^{\text{th}}$ weight in the $j^{\text{th}}$ layer:

$$
\frac{\partial L}{\partial w_{ji}}=\left(\frac{\partial g(z_{j})}{\partial z_{j}}\sum_{k}\frac{\partial L}{\partial z_{k}}\cdot w_{kj}\right) \cdot g(z_{i})
$$

Where:

 - $z_{i}$, $z_{j}$ and $z_{k}$ are the sums of the products of the activations and weights of their respective previous layers.
 - $g(z_{i})$ and $g(z_{j})$ are the activations of $z_{i}$ and $z_{j}$ at layer $i$ and layer $j$, respectively.

---
## References

1. 