---
title: Bayes Classifier
draft: false
tags:
---
A Bayes classifier is a type of [[Supervised Learning|supervised]] [[Machine Learning|machine learning]] [[Algorithms|algorithm]] used for [[Classification Algorithms|classification]] tasks. 

The technique involves calculating, for each feature vector (i.e. row) in a data set, the class label with the largest [[Bayes' Rule|posterior probability]] and assigning that label to that row.

## Formula

Given the formula for [[Bayes' Rule#Formula|Bayes' rule]], we can rewrite to express the probability of each possible class $P(Y=C_{k})$, given our [[Feature Space|feature space (i.e. predictor data)]] $X$:

$$
P(Y=C_{k}|X)=\frac{P(X|Y=C_{k})P(Y=C_{k})}{P(X)}
$$

> [!INFO] A note on the denominator $P(X)$
> If the goal is simply to classify, we can ignore $P(X)$ as it is common to all classes $C_{k}$. However, should the probability values of each class be required, it is necessary to normalise by $P(X)$.

Assuming that we do not require $P(X)$ and are simply interested in classification, we can proceed without using the denominator in our formula. 

### Estimating the [[Prior Probability]] of Each Class

We can estimate $P(Y=C_{k})$ from the training data by dividing the number of instances of each $N_{Y=C_{k}}$ by the total number of instances in the training data (i.e. the sample size) $N$:

$$
P(Y=C_{k})=\frac{N_{Y=C_{k}}}{N}
$$

### Assumptions

#### [[Probability Distribution]] of $X$

For the term $P(X|Y=C_{k})$, we need to make an assumption about the [[Probability Distribution|probability distribution]] from which our data $X$ is drawn from.

For example, if we assume each feature $x_{i}$ in $X$, given the class $C_{k}$, is drawn from a [[Normal Distribution|normal distribution]], i.e. $[x_{i}|C_{k}] \sim \mathcal{N}(\mu,\sigma^{2})$, we can express $P(X|Y=C_{k})$ using the [[Probability Density Function|probability density function]] of a normal distribution:

$$
P(X|Y=C_{k})=\frac{1}{(2\pi)^{D/2}}\frac{1}{\sqrt{|\Sigma_{C_{k}}|}}e^{\displaystyle -\frac{1}{2}(X_{C_{k}}-\mu_{C_{k}})^{\top}\frac{1}{\Sigma_{C_{k}}}(X_{C_{k}}-\mu_{C_{k}})}
$$
Where:

 - $D$ is the dimensionality of our data $X$
 - $\mu_{C_{k}}$ is the [[Arithmetic Mean|mean]] vector of the data $X$ which has the label $C_{k}$ (i.e. $X_{C_{k}}$)
 - $\Sigma_{C_{k}}$ is the [[Covariance|covariance]] matrix of the data $X$ which has the label $C_{k}$

#### [[Statistical Independence]] of $X$

A Bayes classifier can be simplified by assuming that each dimension of $X$, denoted $\displaystyle x_{\displaystyle j_{\displaystyle i}}$, is independent, given the class $C_{k}$. Such an assumption defines the class of Bayes classifiers known as [[Naïve Bayes Classifier|naïve Bayes classifiers]].

## Using the Classifier

We can therefore find the vector of predicted classes $\hat{C}$ for our feature space $X$:

$$
\hat{C}=\arg \max_{k} P(C_{k}|X)
$$
Each element of $\hat{C}$ corresponds to the class with the highest posterior probability for each feature vector $x_{i}$ in our feature space $X$.

---
## References

1. 