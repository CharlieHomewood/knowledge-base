---
title: Layer Normalisation (LayerNorm)
draft: false
tags:
---
Layer normalisation (LayerNorm) is a method for [[Activation Normalisation|activation normalisation]] which normalises the input of each data sample individually, rather than in batches as with [[Batch Normalisation|batch normalisation]].

LayerNorm is used as a component in [[Transformer|transformer]] architectures to improve numerical stability.

## Formula

For some layer $l$ with a [[Vector|vector]] of neuron activations $x$, we can calculate the vector $y$ which is the scaled and shifted normalised activation of layer $l$.

First, let's consider the normalisation of $x$, denoted $\hat{x}$. We can determine the [[Arithmetic Mean|mean]] $\mu$ and [[Standard Deviation|standard deviation]] $\sigma$ of the neuron activations in layer $l$ and apply the following normalisation:

$$
\hat{x}^{(l)}=\frac{x^{(l)}-\mu^{(l)}}{\sqrt{\sigma^{(l)}+\epsilon}}
$$

Where $(l)$ denotes the layer index (not an exponent!), and $\epsilon$ is a small constant $10^{-5}$ added to avoid division by $0$.

Next, with this normalised activation $\hat{x}$, LayerNorm then uses two parameter vectors: the scale parameter vector $\gamma$ and the shift parameter vector $\beta$. Each vector contains learned parameters for each neuron in layer $l$, and uses them in linear combination with the normalised activation to produce the scaled and shifted normalised activation of layer $l$, denoted $y$:

$$
y^{(l)}=\gamma^{(l)} x^{(l)} + \beta^{(l)}
$$

---
## References

1. 