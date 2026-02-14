---
title: Laplace Smoothing
draft: false
tags:
---
Laplace smoothing is a [[N-gram Model Smoothing|smoothing technique for n-gram models]].

The technique simply involves adding $1$ to the number of times each n-gram occurred in a training corpus. This would therefore assign a frequency of $1$ to unseen n-grams from the test corpus, giving them a positive probability mass.

---
## References

1. 