---
title: Perplexity
draft: false
tags:
---
In [[Information Theory|information theory]], the perplexity of a [[Probability Distribution#Discrete Distributions|discrete probability distribution]] is the number of equally likely outcomes in a uniform distribution whose entropy equals the entropy of the given distribution.

Perplexity is closely related to [[Shannon Entropy|Shannon entropy]] - that is, it is the exponential of the Shannon entropy.

## Formula

The perplexity of a discrete probability distribution of a [[Random Variable|random variable]] $X$ is given by:

$$
\text{PP}(X)=e^{H(X)}
$$

Where $H(X)$ is the Shannon entropy of $X$, measured in [[Nats|nats]].

## Applications

### [[Natural Language Processing]]

In natural language processing, the perplexity of a sequence of words is given by the inverse probability of that sequence, normalised by the number of words $n$:

$$
\text{PP}(W)=P(w_{1},\dots,w_{n})^{\displaystyle-1/n}=e^{\displaystyle-1/n\times\log(P(w_{1},\dots,w_{n}))}
$$

This gives us a means of assessing the performance of a language model. For example, we can compare [[N-gram Models|N-gram models]] by measuring their perplexity on a test text corpus and seeing which model has the lowest perplexity (i.e. the best at returning the highest probability next word).

---
## References

1. 