---
title: Convolution Matrix
draft: false
tags:
---
A Convolution [[Matrix|matrix]], also known as a kernel, is a type of matrix used in image processing to apply some kind of processing effect to the image (e.g. blurring).

In [[Convolutional Neural Network (CNN)|convolutional neural networks (CNNs)]], the value of elements in convolutional matrices are learned during training, enabling them to detect patterns within the input data which are most helpful in allowing the network to make correct predictions.

Different kinds of matrices can produce different processing effects. For example, a Gaussian blur can be performed by a $5\times 5$ (normalised) square matrix, where the central element has the largest value and surrounding element values decrease in concentric rings around that central element:

$$
\text{Gaussian Kernel}=\frac{1}{256}
\begin{pmatrix}
1 & 4 & 6 & 4 & 1 \\
4 & 16 & 24 & 16 & 4 \\
6 & 24 & 36 & 24 & 6 \\
4 & 16 & 24 & 16 & 4 \\
1 & 4 & 6 & 4 & 1 
\end{pmatrix}
$$

---
## References

1. 