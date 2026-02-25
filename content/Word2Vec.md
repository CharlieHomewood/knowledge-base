---
title: Word2Vec
draft: false
tags:
---
Word2Vec is a method in [[Natural Language Processing]] which uses [[Neural Network|neural networks]] to learn [[Word Embeddings|word embeddings]] from a large corpus of text. 

Given some current word (called the target word), we can consider a context window around that word (e.g. the 2 words before and the 2 words after the target word).

Each word is then given two embeddings: 

 - Target embedding: an embedding for when the word is the target word,
 - Context embedding: an embedding for when the word is a context word.

## Architectures 

### Continuous Bag of Words (CBOW)

The continuous bag of words (CBOW) architecture aims to predict a word given its surrounding context.

To predict a word, CBOW uses the sum (or [[Arithmetic Mean|average]]) of the context embeddings for the surrounding words to predict target embedding of the target word. 

![[image.png|282x347]]

#### Training

We can then assess how close our predicted target embedding was to the true embedding from a corpus and [[Backpropagation|backpropagate]] the error to update the values of the elements in context embeddings.

### Skip-Gram

The skip-gram architecture aims to predict the surrounding context given some word.

CBOW uses a target embedding to predict the context embeddings.

![[image-1.png|282x347]]

#### Training 

Skip-gram takes a target word and aims to predict the context words surrounding it within some context window.

The [[Loss Function|loss function]] used for skip-gram maximises the probability of true pairs of words and maximises the probability that false pairs are labelled negative. 

This is achieved by finding the [[Dot Product|dot product]] of the target word $t$ and one of its context words $c$ and passing it to a [[Logistic Function|sigmoid activation function]]. The result is therefore the probability that $c$ is a true context word of $t$. 

We therefore want our skip-gram model to output large probabilities for true $(t,c)$ pairs and small probabilities for false $(t,c)$ pairs. The embeddings for $t$ and $c$ are therefore still learned via [[Gradient Descent|gradient descent]].

$$
J=\sum_{(t,c)\in +} \sigma(c \cdot t) + \sum_{(t,c)\in -} \sigma(-c \cdot t)
$$

---
## References

1. https://arxiv.org/abs/1301.3781