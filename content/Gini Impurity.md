---
title: Gini Impurity
draft: false
tags:
---
Gini impurity is the probability of incorrectly labelling some data point if we simply used the relative frequency of each label's occurrence in the partition.

A dataset with 1 label would have a Gini impurity of $0$ as we would always label the data point correctly. Otherwise, the Gini impurity would be some value less than $1$.

## Formula

For some partition of data $m$, we can find the number of data points in that partition $n_{m}$, and the number of data points in that partition which belong to some class $c_{k}$ - $n_{m_{k}}$. Thus, the Gini impurity of that partition $m$ is given by:

$$
G_{m}=1-\sum_{k=1}^{K}\left(\frac{n_{m_{k}}}{n_{m}}\right)^{2}
$$

We can then choose the feature and value threshold which has the lowest Gini impurity:

$$
G_{\displaystyle m_{\displaystyle <s}/\displaystyle m_{\displaystyle >s}} = \frac{n_{\displaystyle m_{\displaystyle <s}}}{n_{m}}G_{\displaystyle m_{\displaystyle <s}} + \frac{n_{\displaystyle m_{\displaystyle >s}}}{n_{m}}G_{\displaystyle m_{\displaystyle >s}}
$$

---
## References

1. 