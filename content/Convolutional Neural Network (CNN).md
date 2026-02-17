---
title: Convolutional Neural Network (CNN)
draft: false
tags:
---
A convolutional [[Neural Network|neural network]] is a variant of [[Feedforward Neural Network|feedforward neural network]] which learns patterns within a [[Feature Space|feature space]] via [[Convolution Matrix|kernels]].

## Architecture 

### Input layer

The input data simply receives the raw feature data (for example, an RGB image would be a $3$-dimensional [[Tensor|tensor]]) and passes it to the first convolutional layer.

### Convolutional Layer

In the convolutional layers, some number of kernels $k$ are convolved with the input data to produce a feature map for each kernel. This feature map is then pooled in the pooling layer and passed to the next convolutional layer. This is repeated across multiple convolutional layers, with pooling layers between them, until an $n$-dimensional [[Vector|vector]] is outputted.

An outline of what a convolution is can be found [[Convolution|here]].

### Pooling Layers 

Pooling layers exist between convolutional layers and are used to reduce the dimensionality of the data at each convolutional layer, aiding computational efficiency. 

Some common pooling techniques include:

 - [[Average Pooling]]
 - [[Max Pooling]]

For example, with an image which is processed by a convolutional layer, we might get a 3-dimensional tensor as our feature map. The pooling layer would scan over the tensor using some $n\times n$ window (e.g. $2\times2$) with some [[Stride|stride length]] (e.g. $2$) and then could average all the values in that window (this is average pooling) and build a smaller $3$-dimensional tensor. 

Below is an example of this pooling technique ($2\times 2$ with a stride of $2$ ) on a single dimension of the tensor. Each value in the right matrix is just the average of the 4 elements in the corresponding corner of the left matrix:

$$
\begin{pmatrix}
0.2 & 0.5 & 0.1 & 0.8 \\
0.2 & 0.3 & 0.2 & 0.3 \\
0.8 & 0.9 & 0.2 & 0.7 \\
0.4 & 0.1 & 0.6 & 0.5
\end{pmatrix}
\underset{\text{average pooling}}{\longrightarrow}
\begin{pmatrix}
0.3 & 0.35 \\
0.55 & 0.5 \\
\end{pmatrix}
$$

### Fully Connected Layer

The vector output from the convolutional layers is then passed to a more traditional feedforward neural network to make some prediction (i.e. using a [[Softmax Function|softmax]] [[Activation Function|activation function]]) in the output layer (e.g. image classification).

---
## References

1. 