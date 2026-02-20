---
title: Median
draft: false
tags:
---
The median is a [[Measures of Central Tendency|measure of central tendency]] defined as the middle value of a dataset, provided that the dataset is ordered (e.g. ascending order).

## Formula

The median of a dataset can be given by finding the value at the middle index according to whether the number of elements in the dataset is even or odd:

$$
\text{median}=
\begin{cases}
\displaystyle\text{value at position }=\frac{n+1}{2}&\quad \text{if }n \bmod 2 = 0 \\
\displaystyle\frac{\text{value at position }\left(\displaystyle\frac{n}{2}\right) + \text{value at position }\left(\displaystyle\frac{n}{2}+1\right)}{2}&\quad \text{if }n \bmod 2 = 1
\end{cases}
$$

---
## References

1. 