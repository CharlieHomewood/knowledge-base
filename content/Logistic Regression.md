---
title: Logistic Regression
draft: false
tags:
---
Logistic Regression is a type of [[Supervised Learning|supervised]] [[Machine Learning|machine learning]] [[Algorithms|algorithm]] used for [[Classification Algorithms|classification]] tasks.

With logistic regression, we are estimating the probability that some feature vector $x_{i}$ from a [[Feature Space|feature space]] $X$ belongs to a particular class $k$. 

In the case of [[Logistic Regression#Binary|binary logistic regression]], we have two possible classes $\{0,1\} \in K$ and so we aim to estimate the probability of belonging to class $1$.

In the case of [[Logistic Regression#Multinomial|multinomial logistic regression]], we have $>2$ classes $\{1,2,\dots,k\} \in K$. To find the probability of belonging to class $k$, we need express this probability relative to some reference class $K$ (i.e. the probability of belonging to $k$ rather than $K$). This is just a generalisation of binary logistic regression, wherein we use the $0$ class as our reference class and find the probability of belonging to $1$ relative to the $0$ class.

## Formulae

### Binary 

In the case of binary logistic regression, we can find the probability of a feature vector belonging to class $1$ with the following expression:

$$
P(Y=1|X)=\frac{1}{1+e^{\displaystyle-\mathbf{xw}+b}}=\frac{1}{1+e^{\displaystyle-(\beta_{0}+\beta_{1}x_{1}+\dots+\beta_{n}x_{n})}}
$$

Here, $\mathbf{xw}=\beta_{0}+\beta_{1}x_{1}+\dots+\beta_{n}x_{n}$ refers to the [[Logistic Unit (Logit)|logit]], which is the natural logarithm of the odds of a feature vector belonging to class $1$ rather than class $0$. Thus the above formula converts this logit from log-odds to a probability.

### Multinomial

For some set of classes $K$, the probability of belonging to class $k \neq K$ is given by:

$$
P(Y=k|X)=\frac{e^{\mathbf{xw_{k}+b}}}{1+\sum_{j=1}^{K-1}e^{\mathbf{xw_{j}+b}}}=\frac{e^{\mathbf{x\beta_{k}}}}{1+\sum_{j=1}^{K-1}e^{\mathbf{x\beta_{j}}}}
$$

And the probability of belonging to class $K$ itself, we can note that since $K$ is the reference class, the weight vectors for all other classes correspond to changes in the log-odds relative to that reference class. As such, $\mathbf{w}_{K}=0$ and therefore $e^{\mathbf{x}\times0}=e^{0}=1$:

$$
P(Y=K|X)=\frac{1}{1+\sum_{j=1}^{K-1}e^{\mathbf{xw_{j}}}}=\frac{1}{1+\sum_{j=1}^{K-1}e^{\mathbf{x\beta_{j}}}}
$$

## [[Loss Function]]

Logistic regression uses [[Cross-Entropy|cross-entropy loss]] $L_{\text{CE}}$ to estimate optimal weights and bias terms via [[Gradient Descent|gradient descent]].

### Formula

Since with binary logistic regression, there are two possible outcomes, we can model the class label as being a drawn from a [[Bernoulli Distribution|Bernoulli distribution]]. Thus, the [[Likelihood Function|likelihood function]] of weights $w$ and our bias $b$ is the product of the [[Probability Mass Function|probability mass function]] of a Bernoulli distribution for each observed data point:

$$
\mathcal{L}(w,b)=\prod_{i=1}^{n}\hat{p}_{\displaystyle i}^{\displaystyle y_{\displaystyle i}}(1-\hat{p}_{\displaystyle i})^{\displaystyle 1-y_{\displaystyle i}}
$$

The logarithm of this likelihood function is therefore:

$$
\log\mathcal{L}(w,b)=\sum_{i=1}^{n}\left[y_{i}\log(\hat{p_{i}})+(1-y_{i})\log(1-\hat{p_{i}}) \right]
$$

Thus the cross-entropy loss is just the negative of the log-likelihood:

$$
L_{\text{CE}}=\sum_{i=1}^{n}-\left[y_{i}\log(\hat{p_{i}})+(1-y_{i})\log(1-\hat{p_{i}}) \right]
$$

##### Gradient Descent 

Thus, to find the optimal weights and bias term for a logistic regression model, we can take the [[Derivative (Calculus)|derivative]] of the cross-entropy loss with respect to the weights, and with respect to the bias term:

$$
\begin{align}
\frac{\partial L_{\text{CE}}}{\partial w}&=\sum_{i=1}^{n}(\hat{p_{i}}-y_{i})x_{i} \\ 
\frac{\partial L_{\text{CE}}}{\partial b}&=\sum_{i=1}^{n}(\hat{p_{i}}-y_{i})
\end{align}
$$

We can then update the weights and bias terms via gradient descent:

$$
\begin{align}
w^{(t+1)}&=w^{(t)}-\eta\sum_{i=1}^{n}(\hat{p_{i}}-y_{i})x_{i} \\
b^{(t+1)}&=b^{(t)}-\eta\sum_{i=1}^{n}(\hat{p_{i}}-y_{i})
\end{align}
$$

## Regularisation

To address [[Overfitting|overfitting]] to our training data, we can apply a [[Regularisation|regularisation]] term to our loss function to penalise the assignment of larger weight values:

$$
L_{\text{CE}}=\sum_{i=1}^{n}-\left[y_{i}\log(\hat{p_{i}})+(1-y_{i})\log(1-\hat{p_{i}}) \right]+\alpha\frac{||w||^{2}}{2}
$$

---
## References

1. 