---
title: N-gram
draft: false
tags:
---
In [[Natural Language Processing|natural language processing]], and n-gram refers to some sequence of words with length $n$.

n-grams with $n=1$ are called unigrams (single words), $n=2$ are bigrams, $n=3$ are trigrams, and so on...

We can identify every n-gram in a corpus of text by sliding a context window of size $n$ over each word in the text. For example:

 - Take the sentence "the cat sat on the mat".
 - If we wanted to find the bigrams in this sentence, we would obtain
	 - "the cat"
	 - "cat sat"
	 - "sat on"
	 - "on the"
	 - "the mat"

## Formula for the Number of N-Grams in a Corpus

To find the number of N-grams in a corpus $N$, we can simply subtract $n+1$ from the number of tokens in that corpus.

$$
\text{N-grams}=T-n+1
$$

For example, a sentence with $T=5$ words would have $4$ bigrams:

$$
\text{bigrams}=5-2+1=4
$$

---
## References

1. 