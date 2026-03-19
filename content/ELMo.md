---
title: ELMo
draft: false
tags:
---
ELMo ([[Word Embeddings|Embeddings]] from [[Language Models]]) is a model used to create word embeddings, where embeddings are computed from sequences of words and represented as sequences of [[Vector|vectors]]. 

ELMo uses two layers of bidirectional [[Long Short Term Memory (LSTM)|LSTM]] models (i.e. two forward, two backward), with character-level [[Convolution|convolutions]]. 

Each layer therefore creates its own vector representation of each word. Earlier layers in the model capture syntactic characteristics, whereas latter layers capture context-dependent semantic information. 

A [[Softmax Function|softmax]] layer is then used to collapse each vector representation of a word into a single vector and a task-specific [[Scalar|scalar]]. 

---
## References

1. https://arxiv.org/abs/1802.05365