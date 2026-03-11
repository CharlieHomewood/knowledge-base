---
title: Bilingual Evaluation Understudy (BLEU)
draft: false
tags:
---
The bilingual evaluation understudy (BLEU) [[Algorithms|algorithm]] is a method for evaluating the quality of a machine-translated text. 

BLEU provides a score between $0$ and $1$, where $1$ indicates that the machine-translated text is identical to a reference translation. 

## Formula

$$
\text{BLEU}=\text{BP} \cdot \exp\left(\sum_{n=1}^{N}w_{n}\log p_{n}\right)
$$

Where:
 - $\text{BP}$ is the exponentiated [[Bilingual Evaluation Understudy (BLEU)#Brevity Penalty|brevity penalty]]
 - $\sum_{n=1}^{N}$ is a summation of each [[N-gram|n-gram]] from $1 \to N$
 - $w_{n}$ is a weighting applied for each $n$-gram
 - $\log p_{n}$ is the logarithm of the [[Bilingual Evaluation Understudy (BLEU)#Modified $N$-gram Precision|modified n-gram precision]]

### Brevity Penalty

The brevity penalty is a term used to penalise the machine-translation for producing translated translations which are too short.

$$
\text{BP}=
\begin{cases}
&1&\quad\text{if }c>r \\[10pt]
&\exp\displaystyle\left(1-\frac{r}{c}\right)&\quad\text{if }c\le r
\end{cases}
$$

Where:
 - $r$ is the test corpus effective reference length.
	 - This is found by taking each sentence in the machine-translated corpus (i.e. the candidate translation corpus) and seeing which of its reference sentences most closely matches it in terms of word length. The sum of all of these values for each candidate sentence is the effective reference length of the test corpus $r$. 
 - $c$ is the total length of the candidate translation corpus. 

### Modified $N$-gram [[Precision]]

Naively, the precision of a machine-translated sentence would be found by taking the sum of $n$-grams in the translated corpus which match an $n$-gram in the reference corpus and then divide that by the sum of all the $n$-grams in the translated corpus. 

The problem with this approach is that a machine-translation system can achieve perfect precision by just repeatedly returning a single $n$-gram which occurs in the reference corpus:
 - For example, the translated sentence "the the the the" would achieve a precision of $1$ with the reference sentence "the cat sat on the mat". This is because each unigram (i.e. "the") in the translated sentence appears in the reference sentence and so the precision is $4/4=1$. This is obviously misleading.

Instead, we can use a modified $n$-gram precision where we instead "clip" the number of times a candidate $n$-gram appears in the reference corpus by the number of times that $n$-gram appears in the reference corpus. We then, as before, divide by the total number of candidate $n$-grams.

---
## References

1. https://aclanthology.org/P02-1040/