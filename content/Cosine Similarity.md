---
title: Cosine Similarity
draft: false
tags:
---
Cosine similarity is a measure of the similarity between two vectors in terms of the angle between them.

Cosine similarity scores range between -1 and 1. A score of -1 means the vectors point in opposite directions, 0 means they are perpendicular and 1 means they point in the exact same direction.

Cosine similarity does not take into account the size of the vectors, only the direction.

Cosine similarity is commonly used in [[Natural Language Processing|natural language processing]] for document similarity.

## Formula

The cosine similarity of vectors $a$ and $b$ is given by:

$$
cos(\theta)=\frac{a \cdot b}{\sqrt{a \cdot a \times b \cdot b}}
$$

---
## References

1. 