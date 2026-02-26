---
title: L2 Regularisation
draft: false
tags:
---
L2 regularisation refers to a technique for [[Regularisation|regularising]] [[Machine Learning|machine learning]] models, particularly [[Linear Regression|linear regression]] and [[Logistic Regression|logistic regression]]. In the case of linear regression, L2 regularisation is known as ridge regression.

L2 regularisation involves adding some multiple of a squared regularisation term to the value of the [[Loss Function|loss function]] of a model. 

This discourages the model from adopting large values for weights and encourages small weight values, thereby reducing the complexity of the model and improving generalisability to unseen data.

## Notation

For some loss function $L(w)$, we can express the L2 regularised loss by adding the weights $w$ to the loss function value, multiplied by some regularisation strength $\alpha$:

$$
\text{L}2 \text{ Regularised Loss} = L(w)+\alpha||w||^{2}
$$

---
## References

1. 