---
title: Language Models
draft: false
tags:
---
A language model is a probabilistic computational model which finds the probability of some next-occurring token/word given some sequence of tokens/words.

For some sequence of words $P(w_{1}, w_{2}, \dots, w_{n})$, we can find its probability of occurring by:

$$
P(w_{1}, w_{2}, \dots, w_{n})=P(w_{1})\times P(w_{2}|w_{1}) \times P(w_{3}|w_{1},w_{2}) \times \dots \times P(x_{n}|x_{1},\dots,x_{n-1})
$$

## Examples of Language Models 

 - [[N-gram Models]]

---
## References

1. 