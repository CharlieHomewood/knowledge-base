---
title: Convolution
draft: false
tags:
---
A convolution is a operation used to combine two functions to produce a new function which represents the first function as modified by the second function.

In [[Convolutional Neural Network (CNN)|convolutional neural networks (CNNs)]], a convolution is applied between some input [[Matrix|matrix]] and a [[Convolution Matrix|kernel]] to produce a feature map which represents a filtered version of the input matrix according to the nature of the kernel used. 

## Formula

### Discrete Case

For discrete convolutions, as used in CNNs, we can express each element of the output matrix as the convolution of some input matrix $I$ with dimensions $m \times n$ with some kernel $K$ with dimensions $p \times q$ as:

$$
(I * K)_{i,j}=\sum_{u=0}^{p-1}\sum_{v=0}^{q-1}K_{p-1-u,~q-1-v}I_{i+u,~j+v}
$$

### Continuous Case

In the continuous case, we can consider two functions $f(x)$ and $h(x)$ and use a double [[Integral|integral]]:

$$
y(x, y) = (x * h)(x, y) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} x(\xi, \eta)\, h(x - \xi, y - \eta)\, d\xi \, d\eta
$$

## Example 

Suppose we have an input matrix $I$ and kernel matrix $K$:

$$
I =  
\begin{bmatrix}  
1 & 1 & 8 & 1 & 1 \\  
1 & 1 & 8 & 1 & 1 \\  
1 & 1 & 8 & 1 & 1 \\  
1 & 1 & 8 & 1 & 1 \\  
1 & 1 & 8 & 1 & 1  
\end{bmatrix},  
\quad  
K =  
\begin{bmatrix}  
-1 & 0 & 1 \\  
-2 & 0 & 2 \\  
-1 & 0 & 1  
\end{bmatrix}
$$

Using the [[Convolution#Discrete Case|formula for discrete convolutions]], and a stride length of $1$, we calculate the following for each iteration:

$$
\begin{align}
Y[0,0]  
&= (-1)\cdot1 + 0\cdot1 + 1\cdot8 + (-2)\cdot1 + 0\cdot1 + 2\cdot8 + (-1)\cdot1 + 0\cdot1 + 1\cdot8 \\  
&= -1 + 0 + 8 - 2 + 0 + 16 - 1 + 0 + 8 \\
&= 28  
\\[8pt]  
  
Y[0,1]  
&= (-1)\cdot1 + 0\cdot8 + 1\cdot1 + (-2)\cdot1 + 0\cdot8 + 2\cdot1 + (-1)\cdot1 + 0\cdot8 + 1\cdot1 \\  
&= -1 + 0 + 1 - 2 + 0 + 2 - 1 + 0 + 1 \\ 
&= 0  
\\[8pt]  
  
Y[0,2]  
&= (-1)\cdot8 + 0\cdot1 + 1\cdot1 + (-2)\cdot8 + 0\cdot1 + 2\cdot1 + (-1)\cdot8 + 0\cdot1 + 1\cdot1 \\  
&= -8 + 0 + 1 - 16 + 0 + 2 - 8 + 0 + 1 \\
&= -28 \\

&~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\vdots &

\end{align}
$$

The output of this convolution is therefore a $3\times3$ matrix $Y$:

$$
Y =  
\begin{bmatrix}  
28 & 0 & -28 \\  
28 & 0 & -28 \\  
28 & 0 & -28  
\end{bmatrix}
$$

If this example were in the context of image processing, essentially the kernel $K$ would be identifying vertical lines in the image $I$. The values of the elements of $Y$ would then suggest that our vertical line is quite pronounced in the image, which aligns with values of the elements in $I$ (i.e. a middle column of $8$s flanked by columns of $1$s).

---
## References

1. 