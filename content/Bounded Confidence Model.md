---
title: Bounded Confidence Model
draft: false
tags:
---
A bounded confidence model is a type of dynamical [[Graph|graph]] model which models opinion dynamics within a network. 

In a bounded confidence model, two [[Vertex|vertices]] will interact only if the difference between their opinions (usually measured on a continuous scale) is below a certain confidence bound $\epsilon$. 
 - We can think of this confidence bound as the willingness of a person to interact with people who they disagree with. A low confidence bound would mean the person only like to talk to people they agree with closely, a high confidence bound would reflect a person who is open to interacting with people with very different opinions.

Next, the opinions of each vertex will change according to some multiple of their difference, referred to as the convergence parameter $\mu$.
 - This convergence parameter reflects how willing a person is to having their opinion changed. A low convergence parameter reflects someone who is unwilling to change their opinion, whilst a high converge parameter reflects someone who is willing to change.

## Dynamics 

Given two opinionated vertices $o_{i}$ and $o_{j}$ in a bounded confidence model at some time point $t$, their interaction is determined by whether the difference in their opinions is below the confidence bound $\epsilon$:

$$
|o_{i}(t)-o_{j}(t)| < \epsilon
$$

If their difference is smaller than the confidence bound, then their opinions are updated (time point $t+1$) by adding the difference between their interlocuter's opinion and their own, multiplied by the convergence parameter $\mu$, to their current opinion status at time $t$:

$$
\begin{align}
o_{i}(t+1)=o_{i}(t)+\mu[o_{j}(t)-o_{i}(t)] \\[10pt]
o_{j}(t+1)=o_{i}(t)+\mu[o_{i}(t)-o_{j}(t)]
\end{align}
$$

---
## References

1. https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.81.591