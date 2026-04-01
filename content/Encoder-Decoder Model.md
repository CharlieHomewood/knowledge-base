---
title: Encoder-Decoder Model
draft: false
tags:
---
An encoder-decoder model is a type of [[Neural Network|neural network]] architecture used to encode sequential data (such as an English sentence) into a [[Vector Space|vector space]], and decode the vector space into another data sequence (i.e. the sentence, but translated into French). 

More generally, it can be said that encoder-decoder models perform sequence transduction tasks.

## Architecture 

An encoder-decoder model consists of two sets of components: the encoders and the decoders. Each component usually contains $6$ of its respective layer types.

### Encoder 

An encoder layer is used to take some token embedding (e.g. a [[Word Embeddings|word embedding]] of a sentence) and encode it into a vector space, known as the context vector. 

The first encoder layer propagates its activation to the next encoder, and so on until we reach the last encoder layer which then propagates its activation to each of the decoder layers.

Each encoder layers consist of two sublayers: the attention layer and the fully-connected layer. Each layer is typically has $512$ dimensions.

#### Attention Layer

Taking the entire sequence of $N$ tokens into consideration, we can find the weighted sum of each $j^{th}$ token to determine $\bar{x_{i}}$ for some encoder layer $l$:

$$
\bar{x_{i}}^{(l)}=\sum_{j=1}^{N}w_{ji}^{(l)}x_{j}^{(l)}
$$

Where weights $w_{ji}^{(l)}$ in this layer are determined by an [[Attention|attention]] mechanism.

#### Fully-Connected Layer 

The fully-connected layer then uses a [[Feedforward Neural Network|feedforward neural network]] to propagate the activation from the attention layer.

### Decoder 



---
## References

1. 