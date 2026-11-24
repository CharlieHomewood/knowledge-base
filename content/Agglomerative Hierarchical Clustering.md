---
title: Agglomerative Hierarchical Clustering
draft: true
tags:
---
Agglomerative hierarchical clustering is an [[Unsupervised Learning|unsupervised]] [[Machine Learning|machine learning]] [[Algorithms|algorithm]] used to perform [[Clustering|clustering]].

This algorithm begins by considering each data point individually. 

Then, using a predetermined [[Distance Metrics|distance metric]], the algorithm merges each data point with its closest neighbour into a cluster. 

This process is then repeated, merging each cluster with its nearest cluster and so on, until all data points are merged into a single cluster for the whole dataset or alternatively some kind of stopping criterion is met (e.g. $n$ merges have been performed, a cluster is formed which contains $n$ or more data points).

 - In the case when there are an odd number of data points or clusters at a given iteration of the algorithm, a single data point or cluster will remain unpaired for the time being.
 - The algorithm will then continue to progress as usual, whereby the unpaired data point or cluster will eventually merge with another or remain unmerged until the final full dataset merge at the end of the algorithm.
 - Of course, there can only be one unmerged cluster at any given stage before the final merge.

Since intermediate clusters will contain more than $1$ data point, agglomerative hierarchical clustering also needs to predefine where on each cluster its distance to its nearest cluster will actually be measured. 

For example, we might use distance between the two closest data points across two clusters, or the distance between their two furthest data points, or perhaps the average position of each cluster, or something else entirely. 

This method for choosing where to measure the distance metric from is known as *linkage*.

## Distance Metrics

With agglomerative hierarchical clustering, distance metrics measure *dissimilarity* between clusters. 

Larger distances mean clusters are further apart from each other and thus are less similar. Shorter distances therefore indicate more similarity. We therefore want to *minimise* our chosen distance metric, thereby minimising dissimilarity (i.e. maximising similarity).

Any measure of distance can be used, however each has its strengths and weaknesses depending on the underlying data being used to train the model.

| Distance Metric        | Description                                                                           | Application                                                               |
| ---------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [[Euclidean Distance]] | The straight-line distance between two points (in $n$ dimensions of Euclidean space). | Good for when features are on the same scale.                             |
| [[Manhattan Distance]] | Sum of absolute differences between points.                                           | Good for when features are on different scale or data has large outliers. |

## Linkage



## Visualisation

### [[Dendrogram|Dendrograms]]



---
## References

1. 