---
title: Gaussian Elimination
draft: false
tags:
---
Gaussian elimination is a method for solving a system of linear equations.

## [[Algorithms|Algorithm]]

Suppose we have the following system of linear equations:

$$
\begin{align}
2x+y-z&=1 \\
-3x-y+2z&=-4 \\
-2x+y+2z&=-2
\end{align}
$$

We can express these linear equations in [[Matrix|matrix]] notation in the form $Ax=b$:

$$
\begin{pmatrix}
2 & 1 & -1 \\
-3 & -1 & 2 \\
-2 & 1 & 2 
\end{pmatrix}
\begin{pmatrix}
x \\
y \\
z 
\end{pmatrix}=
\begin{pmatrix}
1 \\
-4 \\
-2
\end{pmatrix}
$$

1. To solve via Gaussian elimination, we can augment the matrix $A$ by appending $b$ to it:

$$
\begin{pmatrix}
2 & 1 & -1 & 1 \\
-3 & -1 & 2 & -4 \\
-2 & 1 & 2 & -2
\end{pmatrix}
$$
2. Next, we choose the first element $a_{11}$ of $A$ as our pivot point and we look to see how we can augment the first row such that, for each subsequent row, we can multiply the first row by some value and add it to each row as to convert the $a_{1j}$ elements to $0$. 
	1. In this case, multiplying our first row by $3/2$ and adding it to the second row would make $a_{12}=0$. And to make the $a_{13}$ element equal $0$, we can just add the rows together.

$$
\begin{pmatrix}
2 & 1 & -1 & 1 \\
0 & 1/2 & 1/2 & -5/2 \\
0 & 2 & 1 & -1
\end{pmatrix}
$$
3. We then move to the next pivot point, which is $a_{22}$ and repeat the process, looking to make all the elements below the $a_{22}$ elements in column $2$ equal to $0$ thought multiplying row $2$ by some value and adding it.
	1. In this case, we can multiply by row $2$ by $-4$ and then add it to row $3$

$$
\begin{pmatrix}
2 & 1 & -1 & 1 \\
0 & 1/2 & 1/2 & -5/2 \\
0 & 0 & -1 & 9
\end{pmatrix}
$$
4. With the matrix $A$ now in upper triangular form, we can rewrite the system of linear equations:

$$
\begin{align}
2x+y-z&=1 \\
\frac{y}{2}-\frac{z}{2}&=-\frac{5}{2} \\
-z&=9
\end{align}
$$
5. We can then apply back substitution to solve:

$$
\begin{align}
-z&=9 \\
\therefore z &= -9 \\ \\
\frac{y}{2}-\frac{(-9)}{2}&=-\frac{5}{2} \\
\therefore y&=-14 \\ \\
2x+(-14)-(-9)=2x-14+9&=1 \\
\therefore x&=3 \\
\end{align}
$$

6. And finally we find our solutions for $x,y,z$:

$$
\boxed{x=3, y=-14, z=-9}
$$


---
## References

1. https://www.youtube.com/watch?v=RgnWMBpQPXk