---
title: WordNet
draft: false
tags:
---
WordNet is a large lexical database in which words are grouped into sets called *synsets*. 

## Synsets

Synsets are a collection of words which share a common [[Word Sense|word sense]].

Words can be in more than one synset (called [[Polysemy|polysemous]] words).

Synsets can be placed into a [[Hyponymy#Hyponym Hierarchies|hierarchy]]

### Concept Similarity Using Synsets

#### Path Length

Finding the path length between two concepts in a hyponym hierarchy is a matter of counting the number of edges traversed along the shortest path between two concepts.

We can then use this pathlength to find an expression for the similarity of the two concepts:

$$
\text{sim}_{\text{path}}(c_{1}, c_{2}) = \frac{1}{1+\text{pathlen}(c_{1}, c_{2})}
$$

##### Disadvantages

 - Path length doesn't differentiate between different types of paths in the hierarchy
 - Concepts separated by the same path length may be more dissimilar at higher levels of the hierarchy than those lower down.

#### Lowest Common Subsumer

The lowest common subsumer (LCS) is the lowest-level [[Hypernymy|hypernym]] two concepts share in a hyponym hierarchy.

Concepts in the hierarchy which share an LCS which is higher up the hierarchy are less similar than concept which share an LCS lower down the hierarchy.

#### [[Information Content]]

We can also get a sense of how informative a concept is. 

If we find two concepts share a LCS which is lower down the hierarchy, we get more information about how alike the two concepts are than if their LCS is higher up the hierarchy.

By finding the total number of occurrences of a concept and all its hyponyms and dividing this by the total number of occurrences of all concepts in the hierarchy, we can estimate the probability of that concept occurring. 

The negative log of this probability gives us the information content of that concept.

From this notion of information content, we have the following measures of concept similarity in WordNet:

 - [[Resnik Similarity]]
 - [[Lin Similarity]]
 - [[Jiang-Conrath Similarity]]

---
## References

1. 