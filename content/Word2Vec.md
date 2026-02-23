---
title: Word2Vec
draft: false
tags:
---
Word2Vec is a method for using [[Neural Network|neural networks]] to learn [[Word Embeddings|word embeddings]] from a large corpus of text. 

Given some current word (called the target word), we can consider a context window around that word (e.g. the 2 words before and the 2 words after the target word).

Each word is then given two embeddings: 

 - Target embedding: an embedding for when the word is the target word,
 - Context embedding: an embedding for when the word is a context word.

## Architectures 

### Continuous Bag of Words (CBOW)

The continuous bag of words (CBOW) architecture aims to predict a word given its surrounding context.

To predict a word, CBOW uses the sum (or [[Arithmetic Mean|average]]) of the context embeddings for the surrounding words to predict target embedding of the target word. 

![[image.png|282x347]]

We can then assess how close our predicted target embedding was to the true embedding from a corpus and [[Backpropagation|backpropagate]] the error to update the values of the elements in context embeddings.

### Skip-Gram

The skip-gram architecture aims to predict the surrounding context given some word.

CBOW uses a target embedding to predict the context embeddings.

![[image-1.png|282x347]]



---
## References

1. https://arxiv.org/abs/1301.3781