---
title: K-Nearest Neighbours (KNN)
draft: false
tags:
---
K-Nearest Neighbours is a [[Machine Learning|machine learning]] [[Algorithms|algorithm]] used to assign a label to some unlabelled data point $\hat{y_{i}}$ by inferring from the labels $y_{i}$ of its neighbouring points $x_{i}$

We choose some metric of distance to determine the number of neighbours the unlabelled data point has and then either use some kind of voting strategy (in the case of [[Classification Algorithms|classification]]), or some kind of averaging in the case of a continuous-valued label (i.e. for [[Linear Regression|linear regression]].

## Distance Metrics

 - [[Euclidean Distance]]
 - [[Manhattan Distance]]
 - [[Cosine Similarity]]

## Voting Strategy / Averaging

For classification, we can use majority voting. That is, we assign the label $c$ from the class of labels $C$ to $\hat{y_{i}}$ which is most common amongst it's neighbours $y_{j}$:

$$
\hat{y_{i}} = \max_{c}\left\{\sum_{j=1}^{k}~1_{\displaystyle y_{j}=c}~~~~~~~~~\forall c\in C\right\}
$$

For a regression task, we can just average over the values of the neighbours:

$$
\hat{y_{i}}=\frac{1}{k}\sum_{j=1}^{k}y_{j}
$$

---
## References

1. 