---
title: Naïve Bayes Classifier
draft: false
tags:
---
A naïve Bayes classifier is a [[Supervised Learning|supervised]] [[Machine Learning|machine learning]] [[Algorithms|algorithm]] and a commonly-used variant of the more general [[Bayes Classifier|Bayes classifier]] which assumes that features $x_{\displaystyle j_{\displaystyle i}}$ in the [[Feature Space|feature space]] $X$ are [[Statistical Independence|statistically independent]], given each class $C_{k}$.

> [!QUESTION] Need more Detail?
> This page covers the specific details of a naïve Bayes classifier. See the dedicated page for [[Bayes Classifier|Bayes classifiers]] for a more detailed outline of Bayes classifiers in general.

Such an assumption makes the use of such a classifier more computationally efficient but is often violated when features [[Correlation|correlate]] strongly.

## Formula (with Gaussian Assumption)

> [!NOTE] A Note on the Assumed Distribution
> The [[Probability Distribution|probability distribution]] we assume depends on the task and the data we have - it doesn't have to be normally distributed!

Assuming that each feature of $X$ is drawn from a [[Normal Distribution|normal distribution]], and that each feature $x_{i}$ is statistically independent, given each class $C_{k}$, we can express the formula for the [[Posterior Probability|posterior probability]] vector $P(Y=C_{k}|X)$ as:

$$
P(Y=C_{k}|X)=\frac{P(X|Y=C_{k})P(Y=C_{k})}{P(X)}
$$

$P(Y=C_{k})$, the [[Prior Probability|prior probability]] of each class, is just estimated by using [[Bayes Classifier#Estimating the Prior Probability of Each Class|the relative frequency of each class]].

For a naïve Bayes classifier with the assumption $[x_{i}|C_{k}] \sim \mathcal{N}(\mu,\sigma^{2})$, we can express $P(X|Y=C_{k})$ using the [[Probability Density Function|probability density function]] of a normal distribution:

$$
P(X|Y=C_{k})=\prod_{i=i}^{n}P(x_{i}|C_{k})=\prod_{i=1}^{n}\frac{1}{\sqrt{2\pi\sigma_{ki}^{2}}}e^{\displaystyle -\frac{(x_{i}-\mu_{ki})^{2}}{2\sigma_{ki}^{2}}}
$$

---
## References

1. 