---
title: Entropy (Information Theory)
draft: false
tags:
---
In [[Information Theory|information theory]], entropy is a measure of how "uncertain" the distribution of a class is within a dataset.

Suppose we have the following dataset of values $x$ and labels $y$:

| x   | y     |
| --- | ----- |
| 20  | False |
| 45  | True  |
| 63  | False |
| 23  | False |
| 43  | True  |

If we are trying to predict whether a datapoint's $y$ label is True or False, the above dataset would have very high entropy.

A dataset like this:

| x   | y     |
| --- | ----- |
| 20  | False |
| 45  | True  |
| 63  | False |
| 23  | False |
| 43  | True  |

Has $0$ entropy, since all datapoints have the same label (True) and so the distribution of the $y$ class is maximally certain.

---
## References

1. 