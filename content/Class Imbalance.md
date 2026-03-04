---
title: Class Imbalance
draft: false
tags:
---
Class imbalance refers to a phenomenon in datasets for [[Classification Algorithms|classification]] [[Machine Learning|machine learning]] where the number of data points assigned to each class label is varied.

The classes with the greatest number of data points are called the majority classes, whilst those with the fewest are the minority classes.

Class imbalance is an issue for classification models, particularly for model [[Accuracy|accuracy]]. Such models have a tendency to favour making predictions which match the class distribution of the data they are trained on.
 - As an example:
	 - Suppose we have a dataset of emails where 95% are classed as "real" and 5% are classed as spam. 
	 - A classification model which predicts "real" 100% of the time would achieve an accuracy of 95%. 
	 - It would therefore be misleading to trust this accuracy score as a metric of how well the model has "learned" to make correct classifications - it hasn't learned anything, its accuracy is just an artefact of the heavy class imbalance.

## Techniques for Dealing with Class Imbalance 
 
 - [[Oversampling]]
 - [[Synthetic Minority Over-Sampling Technique (SMOTE)]]
 - [[Undersampling]]

---
## References

1. 