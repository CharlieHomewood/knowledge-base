---
title: Rectified Linear Unit (ReLU)
draft: false
tags:
---
The rectified linear unit (ReLU) is a type of [[Activation Function|activation function]] used in [[Neural Network|neural networks]] where outputs from [[Artificial Neuron|artificial neurons]] remain unchanged when the sum of the inputs and weights products are positive, otherwise the outputs are set to $0$. 

## Formula

For some summation of input-weight products $z$ (i.e. the value of the input of an artificial neuron), ReLU will assign the output as $z$ if $z$ is positive, otherwise the output will be $0$:

$$
\text{ReLU}(z)=\begin{cases}z &z > 0 \\ 0 &z \le 0\end{cases}
$$

---
## References

1. 