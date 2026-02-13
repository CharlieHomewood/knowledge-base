---
title: Joint Distribution
draft: false
tags:
---
The joint distribution of two [[Random Variables|random variables]], $X$ and $Y$, refers to the probability of each possible pair of outcomes between $X$ and $Y$

## Formula

### [[Probability Distribution#Discrete Distributions|Discrete]] Random Variables

For two discrete random variables, $X$ and $Y$, if they are [[Statistical Independence|independent]], then:

$$
P(X=x,Y=y)=P(X=x)\cdot P(Y=y)
$$

However, if they are not independent, we can use the [[Conditional Probability|conditional probability]]:

$$
P(X=x,Y=y)=P(X=x|Y=y)\cdot P(Y=y)=P(Y=y|X=x)\cdot P(X=x)
$$

### [[Probability Distribution#Continuous Distributions|Continuous]] Random Variables 

For two continuous random variables, $X$ and $Y$, the joint probability over a region $a \le X \le b,~c \le Y \le d$ is expressed as the double [[Integral|integral]]:

$$
P(a \le X \le b,~c \le Y \le d)=\int_{a}^{b}\int_{c}^{d}f_{X,Y}(x,y)~dy~dx
$$

If $X$ and $Y$ are independent:

$$
f_{X,Y}(x,y)=f_{X}(x)\cdot f_{Y}(y)
$$

But if they are not independent, we use the conditional probability:

$$
f_{X,Y}(x,y)=f_{X|Y}(x|y) \cdot f_{Y}(y)=f_{Y|X}(y|x) \cdot f_{X}(x)
$$

---
## References

1. 