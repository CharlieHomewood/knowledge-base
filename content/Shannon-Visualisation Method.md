---
title: Shannon-Visualisation Method
draft: false
tags:
---
The Shannon-visualisation method is a technique for generating a novel sentence using a pre-trained bigram model.

## [[Algorithms|Algorithm]]

1. Choose a random bigram $(<\text{start token}>, w)$ according to its probability 
2. Choose another random bigram $(w,x)$ according to its probability 
3. Continue choosing random bigrams $(x_{t},x_{t+1})$ until the sequence length meets some threshold or we reach an $<\text{end token}>$.
4. Concatenating each token together into a string yields a generated sentence.

---
## References

1. 