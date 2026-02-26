---
title: Tensor
draft: false
tags:
---
A tensor is a mathematical object which generalises the notion of a [[Scalar|scalar]], [[Vector|vector]] or [[Matrix|matrix]] to $n$-dimensions

## Example

An example of a tensor would be the representation of an RGB image. 

 - Such a tensor can be thought of as $3$ matrices for each colour channel (Red, Green, Blue) and each element of each matrix is the hexadecimal value for the corresponding pixel in the image for that channel. 
 - These matrices can then be stacked on top of each other, aligning each element to its corresponding pixel to produce a $3$-dimensional tensor.

Such a tensor can be expressed symbolically, where $I$ is the three colour channels, $J$ is the row indices, and $K$ the column indices, of each matrix:

$$
T=\{T_{ijk}~|~i=1,\dots,I;~j=1,\dots,J;~k=1,\dots,K\}
$$

Or more visually as a stacked matrix:

$$
T =
\left[
\underbrace{  
\begin{bmatrix}  
T_{R11} & \dots & T_{R1j} & \dots & T_{R1n} \\  
\vdots & \ddots & \vdots & \ddots & \vdots \\  
T_{Ri1} & \dots & T_{Rij} & \dots & T_{Rin} \\  
\vdots & \ddots & \vdots & \ddots & \vdots \\  
T_{Rn1} & \dots & T_{Rnj} & \dots & T_{Rnn} \\  
\end{bmatrix}}_{\text{Red Channel}}  
\;
\underbrace{  
\begin{bmatrix}  
T_{G11} & \dots & T_{G1j} & \dots & T_{G1n} \\  
\vdots & \ddots & \vdots & \ddots & \vdots \\  
T_{Gi1} & \dots & T_{Gij} & \dots & T_{Gin} \\  
\vdots & \ddots & \vdots & \ddots & \vdots \\  
T_{Gn1} & \dots & T_{Gnj} & \dots & T_{Gnn} \\  
\end{bmatrix}}_{\text{Green Channel}}  
\;
\underbrace{  
\begin{bmatrix}  
T_{B11} & \dots & T_{B1j} & \dots & T_{B1n} \\  
\vdots & \ddots & \vdots & \ddots & \vdots \\  
T_{Bi1} & \dots & T_{Bij} & \dots & T_{Bin} \\  
\vdots & \ddots & \vdots & \ddots & \vdots \\  
T_{Bn1} & \dots & T_{Bnj} & \dots & T_{Bnn} \\  
\end{bmatrix}}_{\text{Blue Channel}}
\right]
$$

---
## References

1. 