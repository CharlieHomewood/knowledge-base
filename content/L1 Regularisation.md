---
title: L1 Regularisation
draft: false
tags:
---
L1 regularisation refers to a technique for [[Regularisation|regularising]] [[Machine Learning|machine learning]] models, particularly [[Linear Regression|linear regression]] and [[Logistic Regression|logistic regression]]. In the case of linear regression, L1 regularisation is known as lasso regression.

L1 regularisation involves adding some multiple of a regularisation term to the value of the [[Loss Function|loss function]] of a model. 

This discourages the model from adopting large values for weights and encourages keeping weights as close to $0$ as possible. L1 regularisation can therefore perform automatic feature selection, which is ideal for large [[Feature Space|feature sets]], but may result in theoretically important features being excluded from the model.

## Notation

For some loss function $L(w)$, we can express the L1 regularised loss by adding the weights $w$ to the loss function value, multiplied by some regularisation strength $\alpha$:

$$
\text{L}1 \text{ Regularised Loss} = L(w)+\alpha||w||
$$

---
## References

1. 