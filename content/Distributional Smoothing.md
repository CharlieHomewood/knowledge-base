---
title: Distributional Smoothing
draft: false
tags:
---


## Formula

The smoothed probability of co-occurrence between two words is given by:

$$
P_{\text{sim}}(w_{2}|w_{1})=\sum_{w^{'}\in S(w_{1})}P(w_{2}|w^{'})\frac{\text{sim}(w^{'},w_{1})}{\displaystyle\sum_{w^{'}\in S(w_{1})}\text{sim}(w^{'},w_{1})}
$$

---
## References

1. 