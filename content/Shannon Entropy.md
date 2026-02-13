---
title: Shannon Entropy
draft: false
tags:
---
In information theory, entropy is a measure of how "uncertain" the distribution of a class is within a dataset.

Suppose we have the following dataset of values $x$ and labels $y$:

| x   | y     |
| --- | ----- |
| 20  | False |
| 45  | True  |
| 63  | False |
| 23  | False |
| 43  | True  |

If we are trying to predict whether a datapoint's $y$ label is True or False, the above dataset would have very high entropy since there is a near-even split of True and False labels.

However, a dataset like this:

| x   | y    |
| --- | ---- |
| 20  | True |
| 45  | True |
| 63  | True |
| 23  | True |
| 43  | True |

Has $0$ entropy, since all datapoints have the same label (True) and so the distribution of the $y$ class is maximally certain.

We can use entropy in [[Classification Algorithms|classification]] tasks to split datasets according to certain criteria such that entropy is minimised (e.g. see [[Decision Tree# Choosing Splitting Criterion for Internal Nodes|decision trees]]).

## Formula

The entropy $H$ of some set of data $X$ is given by:

$$
H(X)=-\displaystyle\sum_{i=1}^{N}p_{\displaystyle x_{i}}\log p_{\displaystyle x_{i}}
$$

---
## References

1. 