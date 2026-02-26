---
title: Average Pooling
draft: false
tags:
---
Average pooling refers to a technique used in the [[Convolutional Neural Network (CNN)#Pooling Layers|pooling layers of convolutional neural networks]] to reduce the dimensionality of a feature map produced by a [[Convolutional Neural Network (CNN)#Convolutional Layer|convolutional layer]].

This technique involves using an $n\times n$ window with stride length $s$ to scan over a feature map produced by a convolutional layer and calculate the [[Arithmetic Mean|mean]] of the values inside the window at each iteration of the scan. This produces a condensed version of the feature map.

## Formula

With average pooling, for some feature map [[Matrix|matrix]] $X$ with dimensions $m\times n$, the value outputted for each $k^{th}$ iteration of the scan, with [[Stride|stride length]] $s$ by pooling kernel is given by:

$$
P_{k}=\frac{1}{mn}\sum_{i=0}^{m-1}\sum_{j=0}^{n-1}X_{i\cdot s+i,~j \cdot s+j}
$$

---
## References

1. 