---
title: Stupid Backoff
draft: false
tags:
---
In [[Natural Language Processing|natural language processing]], the stupid backoff [[Algorithms|algorithm]] is a technique to find the relative frequencies of [[N-gram|n-grams]] in a corpus.

This method ignores the requirement to normalise frequencies such that they form a valid [[Probability Distribution|probability distribution]] (hence the adjective "stupid").

## Formula

If the $n$-gram has a probability $>0$, use its relative frequency, otherwise "backoff" to the $n-1$-gram, multiply by a fixed weight $\lambda$ (usually $\lambda=0.4$, see [[Stupid Backoff#^1|Brants et al. (2007)]]) and check again.

$$
S\left(w_{\displaystyle i}|w_{\displaystyle i-k+1}^{\displaystyle i-1}\right)=\begin{cases}\frac{\displaystyle\text{count}\left(w_{\displaystyle i-k+1}^{\displaystyle i}\right)}{\displaystyle\text{count}\left(w_{\displaystyle i-k+1}^{\displaystyle i-1}\right)} &\text{if count}\left(w_{\displaystyle i-k+1}^{\displaystyle i}\right)>0\\ \\ \lambda S\left(w_{\displaystyle i}|w_{\displaystyle i-k+2}^{\displaystyle i-1}\right) &\text{otherwise}\end{cases}
$$

---
## References

1. https://aclanthology.org/D07-1090.pdf ^1