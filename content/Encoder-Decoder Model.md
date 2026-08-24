---
title: Encoder-Decoder Model
draft: false
tags:
---
An encoder-decoder model is a type of [[Neural Network|neural network]] architecture used to encode sequential data (such as an English sentence) into a [[Vector Space|vector space]], and decode the vector space into another data sequence (i.e. the sentence, but translated into French).

## Architecture 

As the name suggests, an encoder-decoder model consists of two sets of components: the encoder and the decoder.

### Encoder 

An encoder layer is used to take some token [[Embedding|embedding]] (e.g. a [[Word Embeddings|word embedding]] of a sentence) and encode it into a vector space, known as the context vector. 

These encoder layers consist of hidden states, one (or two if using a bidirectional architecture) for each token being encoded. Each hidden state takes as an input the previous hidden state and the current token embedding.

Encoder layers use [[Recurrent Neural Network (RNN)|recurrent]] architectures such as [[Long Short Term Memory (LSTM)|long short term memory (LSTM)]] to generate the sequence of vectors (one for each token) being passed to the next encoder layer. When passed to the decoder, the last vector in the sequence is passed as the context vector.

### Decoder 

In the decoder component, the context vector from the encoder component is inputted to every decoder layer and the output of each decoder layer is inputted to the next decoder layer. 

A decoder layer also uses a recurrent architecture, whereby the previous hidden state is inputted to the next hidden state, along with the 



For example, the encoder may have encoded an English sentence into a context vector and so the decoder may convert this context vector into a French sentence, thereby translating the sentence from English to French.

## Improvements

### Attention Mechanism

One drawback of the pre-attentional encoder-decoder architecture is that an "informational bottleneck" is created upon the generation of the context vector by the encoder. 

Whilst, in theory, the vector representation (embedding) of the last token should contain all previous context from prior tokens (due to the recurrent architecture), this representation becomes increasingly compressed as the token sequence length increases, making it increasingly difficult to produce a strong representation of the input sequence as it grows in length.

In their article titled *Neural Machine Translation by Jointly Learning to Align and Translate*, Bahdanau et al. (2014) introduced an "alignment model" which 

---
## References

1. https://arxiv.org/abs/1409.0473 
