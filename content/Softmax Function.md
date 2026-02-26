---
title: Softmax Function
draft: false
tags:
---
The softmax function is a generalisation of the [[Logistic Function|logistic function]] to multidimensional cases.

Softmax is used in [[Logistic Regression#Multinomial|multinomial logistic regression]] and as an [[Activation Function|activation function]] in [[Neural Network|neural networks]], particularly for the output layer.

## Formula

$$
\sigma(z_{i})=\frac{e^{z_{i}}}{\sum_{j=1}^{k}e^{z_{j}}}\quad \text{where }k>1
$$

---
## References

1. 