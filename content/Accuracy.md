---
title: Accuracy
draft: false
tags:
---
In the evaluation of a [[Classification Algorithms|classification]] [[Machine Learning|machine learning]] [[Algorithms|algorithm]], accuracy refers to the proportion of correct classifications made by the model.

## Notation

In the context of [[Confusion Matrix|confusion matrix]], we can express the accuracy as the sum of the [[True Positives|true positive]] and [[True Negatives|true negative]] predictions divided by the number of predictions made:

$$
\text{accuracy}=\frac{TP+TN}{TP+TN+FP+FN}
$$

At a minimum, a model should have an accuracy greater than that achieved by random guessing. For some number of classification classes $C$, the long-run accuracy of a random guessing approach is:

$$
\text{random guess}=\frac{1}{C}
$$

We will likely also desire our model to at least match the performance of humans at a given classification task.

## Issues with Accuracy

 - The presence of class [[Class Imbalance|class imbalance]] can make accuracy a biased metric. The model will perform be "more accurate" by simply making more predictions in favour of the majority class
	 - For example, a dataset where 99% of labels are "false" and 1% are "true", the model can achieve 99% accuracy by always predicting "false" and therefore is not really "learning" how to make correct predictions.

---
## References

1. 