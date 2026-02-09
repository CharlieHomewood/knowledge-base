---
title: N-gram Models
draft: false
tags:
---
In [[Natural Language Processing|natural language processing]], N-gram models are a type of [[Language Models|language model]] which predict the next word in a sequence, given some $n$-sized sequence of previous words.

## Assumption: [[Markov Property]]

As larger sequences of words are less frequent in a text, we can instead assume that the probability of the next word $w_{k+1}$ given the sequence of words $w_{1},\dots,w_{k}$ is approximately equal to the probability of the next word given the previous $n$ words. The value we choose for $n$ determines the size of the context window we use.

For example, a first order [[Markov Chain|Markov chain]] would just approximate by finding the probability of the next word given just the previous word:

$$
	P(w_{k}|w_{1},\dots,w_{k-1}) \approx P(w_{k}|w_{k-1})
$$

## Formula

The probability of some sequence of words $P(w_{1},\dots,w_{k})$, for some context window $n$, is given by:

$$
P(w_{1},w_{2},w_{3},\dots,w_{k})=\prod_{i=1}^{k}P(w_{i}|w_{i-(n-1)},\dots,w_{i-1})
$$

Thus, given some sequence of $k$ words, for each word in that sequence, we consider the probability of that word given the previous $n-1$ words and take the product of all of these probabilities.

These probabilities can be estimated using [[Maximum Likelihood Estimation|maximum likelihood estimation]]. We can count the number of times we have seen the sequence $w_{i-(n-1)},\dots,w_{i-1},w_{i}$ and divide by the number of times we have seen the same sequence, excluding the $i^{th}$ word $w_{i-(n-1)},\dots,w_{i-1}$

$$
P(w_{i}|w_{i-(n-1)},\dots,w_{i-1})=\frac{\text{freq}(w_{i-(n-1)},\dots,w_{i-1},w_{i})}{\text{freq}(w_{i-(n-1)},\dots,w_{i-1})}
$$

## Types of N-gram Models

### Unigram Model

A unigram model assumes that each word occurs independently of every other word in the sequence.

$$
P(w_{1},w_{2},w_{3},\dots,w_{k})=\prod_{i=1}^{k}P(w_{i})=P(w_{1})\times P(w_{2}) \times \dots \times P(w_{k})
$$

Where $P(w_{i})$ is the probability of the $i^{th}$ word occurring. We could estimate $P(w_{i})$ from a large corpus by dividing the number of times $w_{i}$ occurs as a proportion of the total number of words in the corpus.

$$
P(w_{i}) \approx \frac{\text{freq}(w_{i})}{\text{Total Word Count}}
$$

### Bigram Model

A bigram model assumes the probability of a word depends on just the previous word in the sequence.

$$
P(w_{1},w_{2},w_{3},\dots,w_{k}) = \prod_{i=1}^{k}P(w_{i}|w_{i-1}) = P(w_{1})\times P(w_{2}|w_{1}) \times P(w_{3}|w_{2}) \times \dots \times P(w_{k}|w_{k-1})
$$

### N-gram Model

A N-gram model therefore generalises by assuming that the probability of a word depends on the previous $n-1$ words in the sequence. See [[#Formula|the general formula]].

## Practical Considerations

It is more computationally efficient to convert these probabilities to logarithms of the probabilities. This makes use of the following [[Logarithmic Identities|logarithmic identity]]:

$$
\log(P_{1} \times P_{2} \times \dots \times P_{n})=\log(P_{1})+\log(P_{2})+\dots+\log(P_{n})
$$



---
## References

1. 