---
title: Neural Network
draft: false
tags:
---
A neural network is a type of [[Machine Learning|machine learning]] model which is inspired by biological neural structures.

Neural networks generally consist of layers of [[Vertex|nodes]] pass information from an input layer (e.g. [[Feature Space|features]] in the training data) to hidden layers in which [[Artificial Neuron|artificial neurons]] become [[Activation Function|activated]] based on weighted inputs and pass on information accordingly, resulting in some output values which correspond to the network's prediction for the true label for that input data. 

The means by which information flows in a neural network depends on the particular architecture being used.

## Types

 - [[Convolutional Neural Network (CNN)]]
 - [[Feedforward Neural Network]]
 - [[Graph Neural Network (GNN)]]
 - [[Recurrent Neural Network (RNN)]]

## Architecture 

### Input Layer 

The input layer defines the structure of the data being used in the network. Typically, each node in this layer corresponds to the value of an element in a feature vector.

### Hidden Layers 

A hidden layer is, typically, consists of a set of nodes which are fully connected to the previous and subsequent layers. The nodes in the first hidden layer take weighted inputs from each input layer node and, depending on the input value, is activated according to that node's activation function.

### Output Layer 

The output layer represents a final vector where each element corresponds to a potential target variable value. Typically, we would use a [[Softmax Function|softmax activation function]] to convert this vector into a probability distribution and thus the most probable output node corresponds to the network's predicted label for that instance of input data.

---
## References

1. 