---
title: 'Percision Recall Accuracy F1score'
date: 2024-06-14T10:43:10-04:00
draft: false
cover: 
    image: images/missle.png
tags: ["statistics", "measurements", "scores", "evaluation"]
categories: ["AI"]
params: 
    math: true
---

## Percision, Recall, and Accuracy ... why non of these click at first

### Muddy water and nuclear missles 

It was one afternoon my friend [Jaylen](https://www.linkedin.com/in/jaylen-brown-6a70511a3/) and I we were studying for our [AI](https://omscs.gatech.edu/cs-6601-artificial-intelligence) exam when the dreaded topic of percision, accuracy and recall once again came up. This is one of those concepts that I've learned before and it seems that it never wants to cement into my brain. This time Jaylen and I found a good example to help build our intuition. Talking in terms of muddy water and nuclear missles we came up with another way to understand these *(like most things in academia)* dreaded and poorly named measures. '

### Primer 

- True Positive (TP): The result was correctly predicited as positive  
- False Positive (FP): The result was incorrectly predicted as positive 
- True Negative (TN): The result was correct predicted as negative 
- False Negative (FN): The result was incorrectly predicted as negative

### Percision

Let's start with an example and then move onto the details. Let's say we have a model that is trained to detect :artificial_satellite: when a nuclear missile :rocket: is fired towards it and upon detection it will fire a nuclear missle back. 

Now we want to be absolutely sure that when that model detects a positive case of a missile coming towards it is ACTUALLY a missile coming towards it and not something like a bee or baseball flying through the air. 

If we wanted to measure the quality of it identifying a True Positive case (a case where the result is positive and it is ACTUALLY positive) then percision would be a great measure for this.

$$
Percision = \frac{TP}{TP + FP}
$$

As shown by equation percision deals only with **True Positives** and **False Positives**.

We can distill this down to "What is the quality of the positive predictions my model is making?.

Imagine that we had two buckets of water. One for positive cases and one for negative cases. Having either False Positives in the Positive cases bucket or False Negatives in the Negative cases bucket would "muddy the water" of our buckets. 

We would like our model to be making buckets that are completey clear which would ideally be buckets where all the positive cases, that are actually positive (True Positive), are in the positive cases bucket, and all the cases that are actually negative (True Negative), are in the Negative cases bucket. 

![percision example image](images/percision.png)

Percision is a measure of how muddy the water is for our positive cases bucket. In this example we have a percision of 83% meaning our model captures the actually positive cases 83% of the time and 17% of the time it will mark cases that were actually negative as positive. 

Percision - a measure of the quality of our positive cases. 

When the cost of a false positive is high, make sure that the model has a high percision!

### Recall

Let's use our example before the details again to make sure we can understand the difference between Recall and Percision, which is quite difficult. 



$$
Recall = \frac{TP}{TP + FN}
$$

This equation deals only with **True Positives** and **False Negatives**. 

We can distill this down to "How reliable is my model at classifying the cases we are trying to identify?".

What do I mean by relevant? I mean to say 



### Accuracy 

$$
Accuracy = \frac{TP + TN}{TP + TN + FP + FN}
$$

What does accuracy actually mean --->
What does it mean in statistics ---> 

## BONUS: F1 score 

### There is a whole lot more 
 