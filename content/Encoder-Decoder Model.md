---
title: Encoder-Decoder Model
draft: false
tags:
---
An encoder-decoder model is a type of [[Neural Network|neural network]] architecture used to encode sequential data (such as an English sentence) into a [[Vector Space|vector space]], and decode the vector space into another data sequence (i.e. the sentence, but translated into French).

## Architecture 

An encoder-decoder model consists of two sets of components: the encoders and the decoders. Each component usually contains $6$ of its respective layer types.

### Encoder 

An encoder layer is used to take some token embedding (e.g. a [[Word Embeddings|word embedding]] of a sentence) and encode it into a vector space, known as the context vector. 

Encoder layers consist of two sublayers: the attention layer and the fully-connected layer

#### Attention Layer

Taking the entire sequence of $N$ tokens into consideration, we can find the weighted sum of each $j^{th}$ token to determine $\bar{x_{i}}$:

$$
\bar{x_{i}}=\sum_{j=1}^{N}w_{ji}x_{j}
$$

The weights in this layer are determined by an [[Attention|attention]] mechanism.

### Decoder 



---
## References

1. 