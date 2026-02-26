---
title: F1 Score
draft: false
tags:
---
The F1-Score is a performance metric in [[Machine Learning|machine learning]], used to assess the predictive power of a [[Classification Algorithms|classification algorithm]].

An F1-score is a useful metric to assess classifier performance when the positive class ([[True Positives|true positives]] and [[False Positives|false positives]]) is very rare, such as in fraud detection, or when false positives and [[False Negatives|false negatives]] are important, such as with disease detection.

However, an F1-score is not a holistic performance metric. As seen in the [[#Formula]], the F1-score does not take [[True Negatives|true negatives]] into account. 

 - Take the example of email spam detection. Whilst we might fixate on the true positives (emails correctly classified as spam), we actually care quite a lot about the classifier's ability to detect true negatives (emails correctly classified as non-spam) as well.

As with any performance metric, the context is important to determine. An F1 score is useful, but only one of many performance metrics worth taking into consideration with classification tasks.

## Formula

The F1 score is the [[Harmonic Mean|harmonic mean]] of the [[Precision|precision]] and [[Recall|recall]] of the classifier, given as follows:

$$
F_{1}=\frac{2}{\text{precision}^{-1} + \text{recall}^{-1}}=\frac{2\text{TP}}{2\text{TP}+\text{FP}+\text{FN}}
$$

---
## References

1. Data Science Research Methods Autumn (L7) (970G1A) - University of Sussex - https://www.sussex.ac.uk/study/modules/undergraduate/2025/99438-data-science-research-methods-autumn-l6