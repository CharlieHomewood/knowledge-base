---
title: Distributional Semantics
draft: false
tags:
---
Distributional semantics is an area in linguistics concerned with measuring the similarity between words or concepts based on how those words are distributed within large corpora of text.

[[The Distributional Hypothesis|The distributional hypothesis]] suggests that words which have similar distributional properties in text likely share a similar meaning.

## Application: Document Classification with Unseen Words 

Suppose we are able to classify documents as being relevant or irrelevant to our chosen topic based on the words used in the document.

Now suppose a new document appears, waiting to be classified. However, it contains a new word we have not seen in our training data. With our current approach, this new word would not contribute at all to our relevancy classification. 

However, we can use distributional semantics to estimate the relevancy of this word by seeing which word it shares distributional properties the most from our training text corpora.

Distributional semantics therefore allows our classifier to adapt to documents which contain novel words by using this method of substitution based on distributional similarity.

---
## References

1. 