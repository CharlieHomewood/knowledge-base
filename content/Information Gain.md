---
title: Information Gain
draft: false
tags:
---
Information gain is the reduction of [[Shannon Entropy|entropy]] after performing a split on some set of data in a [[Decision Tree|decision tree]].

## Formula

For some set of data $m$, we can split on a variable at some threshold $s : m_{\displaystyle <s}, m_{\displaystyle >s}$. We take the entropy of $m$ - $H(m)$ - and subtract the sum of the entropies of each partition of the data, each weighted by the proportion of the data in that partition $\displaystyle\frac{N_{s}}{N}$:

$$
\text{IG}(m,s)=H(m)-\left(\frac{N_{<s}}{N}H(m_{<s})+\frac{N_{>s}}{N}H(m_{>s})\right)
$$

---
## References

1. 