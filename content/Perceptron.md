---
title: Perceptron
draft: false
tags:
---
A perception is a type of [[Supervised Learning|supervised]] [[Machine Learning|machine learning]] [[Classification Algorithms|classification]] [[Algorithms|algorithm]] used to provide a binary classification (i.e. $0$ or $1$) of some [[Vector|vector]] of input values.

A perception can be thought of as a single [[Artificial Neuron|artificial neuron]] with a [[Heaviside Step Function|Heaviside step]] [[Activation Function|activation function]].

## Formula

The output $\hat{y}$ is the class prediction made by the perception and is given by:

$$
\hat{y}=\sigma\left(\sum_{i=1}^{n}w_{i}x_{i}+b\right)
$$

Where:

 - $\sigma$ is the Heaviside step activation function
 - $w_{i}x_{i}$ is the product of the $i^{\text{th}}$ weight and input value 
 - $b$ is a constant bias term
	
---
## References

1. 