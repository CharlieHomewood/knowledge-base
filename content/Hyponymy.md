---
title: Hyponymy
draft: false
tags:
---
A hyponym is a word which part of a broader class of concepts (called [[Hypernymy|hypernyms]]).

 - E.g. *dog* is a hyponym of *animal*

Hyponyms are transitive, meaning that if $x$ is a hyponym of $y$, and $y$ is a hyponym of $z$, then $x$ is also a hyponym of $z$:

```mermaid
flowchart TD
    A["z = Food"] --> B["y = Fruit"]
    B --> C["x = Apple"]
    A --> C
```

## Hyponym Hierarchies

Words which share a common hypernym are co-hyponyms. In the below example, *Red* and *Blue* are co-hyponyms as they both share *Colour* as a hypernym

```mermaid
flowchart TD
    A["Colour"] --> B["Red"]
    A --> C["Blue"]
```

We can use measures like [[WordNet#Path Length|path length]]

---
## References

1. 