---
title: Confusion Matrix
draft: false
tags:
---
A confusion [[Matrix|matrix]] is a data visualisation method used to evaluate the performance of a [[Classification Algorithms|classification]] [[Machine Learning|machine learning]] [[Algorithms|algorithm]].

A confusion matrix records the frequencies of [[True Positives|true positives (TP)]], [[False Negatives|false negatives (FN)]], [[False Positives|false positives (FP)]] and [[True Negatives|true negatives (TN)]] for each class under consideration

## Notation

In the case of binary classification, a confusion matrix takes the form:

|                  |              | Predicted Class |              |
| ---------------- | ------------ | --------------- | ------------ |
|                  |              | **Positive**    | **Negative** |
| **Actual Class** | **Positive** | $$TP$$          | $$FN$$       |
|                  | **Negative** | $$FP$$          | $$TN$$       |


For multi-class classification, we generalise the confusion matrix to $N$ classes. If we consider class $1$, the matrix would be as follows:

|                  |          |        | Predicted Class |         |        |
| ---------------- | -------- | ------ | --------------- | ------- | ------ |
|                  |          | $1$    | $2$             | $\dots$ | $N$    |
|                  | $1$      | $$TP$$ | $$FP$$          | $$FP$$  | $$FP$$ |
| **Actual Class** | $2$      | $$FN$$ | $$TN$$          | $$TN$$  | $$TN$$ |
|                  | $\vdots$ | $$FN$$ | $$TN$$          | $$TN$$  | $$TN$$ |
|                  | $N$      | $$FN$$ | $$TN$$          | $$TN$$  | $$TN$$ |

---
## References

1. 