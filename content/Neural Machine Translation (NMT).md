---
title: Neural Machine Translation (NMT)
draft: false
tags:
---
Neural machine translation (NMT) refers to the use of [[Neural Network|neural networks]] to perform machine-translation tasks.

Common NMT architectures include [[Seq2seq|seq2seq]], and generally involve one RNN which encodes the source language text into a representation, and another RNN which decodes this representation into the target language. We want an NMT model to choose a translated sequence which is most probable, given some input source language sequence:

$$
P(y_{1},\dots,y_{m}|x_{1},\dots,x_{n})
$$

---
## References

1. 