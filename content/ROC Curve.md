---
title: ROC Curve
draft: false
tags:
---
The receiver operating characteristic (ROC) curve is a plot used to compare the [[Recall|true positive rate (TPR)]] to the [[False Positive Rate|false positive rate (FPR)]] across a range of decision thresholds for a [[Classification Algorithms|binary classification]] [[Machine Learning|machine learning]] [[Algorithms|algorithm]].

## Interpretation

Plotting the TPR and FPR produces an ROC curve. Below is an example

![[image-3.png|291x288]]

We can interpret this plot in a couple of ways to learn about our model:

 - The area under the ROC curve (AUC) tells us, given a pair of positive and negative labelled data points, the probability that the model will assign a higher probability of belonging to the positive class to the actual positive data point rather than to the negative data point. 
	 - For example:
		 - If the AUC is $0.5$ then the model essentially flips a coin to decide which data point (the actual positive or actual negative) to assign a higher probability of being positive to. 
		 - An AUC of $1$ would always correctly assign a higher probability of being positive to the actual positive data point.
 - The points on the curve which is closest to the co-ordinate $(0,1)$ are the range of optimal thresholds to choose for the classification model. 
	 - If we want to avoid [[False Positives|false positives]], we can choose a point on the curve which has the lowest FPR. Likewise, if we want to avoid [[False Negatives|false negatives]], we could choose the point with the highest TPR.

---
## References

1. 