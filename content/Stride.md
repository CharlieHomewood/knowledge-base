---
title: Stride
draft: false
tags:
---
Stride, in the context of [[Convolutional Neural Network (CNN)|convolutional neural networks]], refers to how many elements a [[Convolution Matrix|kernel]] moves by in each iteration of a scan across some input [[Matrix|matrix]]. 

Increasing stride length results in fewer computations and is thus more efficient, but loses information as not all subsets of the elements in the input matrix. Nonetheless, we might want a larger stride length if we want to capture more global patterns in our input matrix, or a shorter stride length if we want more granular detail.

---
## References

1. 