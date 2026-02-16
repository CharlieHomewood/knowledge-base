---
title: Artificial Neuron
draft: false
tags:
---
An artificial neuron is a component of a [[Neural Network|neural network]] which comprises of a mathematical function, taking inputs from, and producing outputs for, other artificial neurons.

## Formula

A neural network can consist of multiple artificial neurons. We can express the output $y$ produced by the $k^{\text{th}}$ artificial neuron in the network as:

$$
y_{k}=\phi\left(\sum_{i=0}^{n}w_{ki}x_{i}\right)
$$

Where:

 - $\phi$ represents the [[Activation Function|activation function]].
 - $w_{ki}$ is the weight for the $i^{\text{th}}$ input to the $k^{\text{th}}$ artificial neuron.
 - $x_{i}$ is the input from the $i^{\text{th}}$ artificial neuron.

---
## References

1. 