---
title: Matthews Correlation Coefficient (MCC)
draft: false
tags:
---
The Matthews correlation coefficient (MCC) is a performance metric used to evaluate [[Classification Algorithms|classification algorithms]], and is particularly useful in the presence of [[Class Imbalance|class imbalance]].

MCC is mathematically similar to the [[Pearson Correlation Coefficient|Pearson correlation coefficient]], providing a measure of the strength and direction of the linear relationship between actual and predicted labels, taking a value between $-1$ and $1$.

## Formula

For binary classification, the Matthews correlation coefficient is given by:
 - First taking the difference between the product of the number of [[True Positives|true positives]] and [[True Negatives|true negatives]] with the product of the number of [[False Positives|false positives]] and [[False Negatives|false negatives]]. 
 - This quantity is then normalised by the square root of the product of the number of predicted positives, the number of actual positives, the number of actual negatives and the number of predicted negatives.

$$
\text{MCC} = \frac{\text{TP}\times\text{TN}-\text{FP}\times\text{FN}}{\sqrt{(\text{TP}+\text{FP})(\text{TP}+\text{FN})(\text{TN}+\text{FP})(\text{TN}+\text{FN})}}
$$

We can note that all elements of the [[Confusion Matrix|confusion matrix]] are used in the calculation of MCC, which allows the metric to be versatile in the presence of class imbalance.

## Interpretation

MCC is interpretated in a similar manner to any other correlation coefficient.

| Correlation Coefficient | Interpretation                                                                  |
| ----------------------- | ------------------------------------------------------------------------------- |
| $$1$$                   | Actual and predicted classifications **agree** on every single data instance    |
| $$0$$                   | Classifications are no better than random guessing                              |
| $$-1$$                  | Actual and predicted classifications **disagree** on every single data instance |

## Generalisation to Multiclass Classification 

In the case of there being more than $2$ classification labels, MCC can be generalised to handle this scenario

### Formula

We can first define a confusion matrix $C$ for some number of classes $K$.

Then we can consider:
 - $t_{k}$ - the number of times the $k^{th}$ class actually occurs
 - $p_{k}$ - the number of times the $k^{th}$ class is predict
 - $c$ - the total number of correct predictions across all classes
 - $s$ - the sample size

With these variables, the formula for multiclass MCC is given by:

$$
\text{MCC}_{K} = \frac{c\times s - \sum_{k}^{K}p_{k} \times t_{k}}{\sqrt{\left(s^{2}-\sum_{k}^{K}p_{k}^{2}\right)} \times \left(s^{2}-\sum_{k}^{K}t_{k}^{2}\right)}
$$

---
## References

1. https://en.wikipedia.org/wiki/Phi_coefficient
2. https://scikit-learn.org/stable/modules/model_evaluation.html#matthews-corrcoef