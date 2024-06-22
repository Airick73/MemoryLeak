+++
title = 'Automatic Speech Recognition (ASR) systems'
date = 2024-05-31T09:12:35-04:00
draft = false
+++

## Motivation 

I recently completed my first semester at Georgia Tech in which I took the AI course offered by Thad Starner. Instead of moving right into another course for the summer semester I decided to use this summer to apply what I learned to a personal project. 

The most interesting topic I thought we covered was the use of Hidden Markov Models (HMMs) and how they can be used for speech recognition. 

## Before I even got started 

[Hidden Markov Models wikipedia](https://en.wikipedia.org/wiki/Hidden_Markov_model)

[The idea of a probability distribution](https://mathinsight.org/probability_distribution_idea)

- [The idea of a probability density function](https://mathinsight.org/probability_density_function_idea)

- [Random variable definition](https://mathinsight.org/definition/random_variable)

## Understanding the architecture

Hidden Markov Models are a part of ASR systems but what is their role? A machine learning model's architecture is much more than just an HMM.

After scouting for some resources on ASR system's I came across Preethi Jyothi's Automatic Speech Recognition [Preethi Jyothi's Automatic Speech Recongition overview](https://www.youtube.com/watch?v=q67z7PTGRi8&t). This was exactly what I was looking for I think it was an excellent overview. Retrospectively however I realize that this approach to ASR system's as described intitially is outdated. I however went through and did a thourgh mapping of the archtecture already. All I can say is it helped me build a better intuition for understanding machine learning models. 

![](/images/HMM_ASR.drawio.png)


## How to develop a personal project

As an engineer the correct approach to building a car would be to start with roller blades, then make a scooter, then a bike, then a car. 

I've fallen into the temptation (like I assume many of you reading have as well) to want the car right away. After many half-built projects I am doing my best to listen to my error function and strive for minimum viable products. That being said I wanted to build an ASR system from scratch but in reality it would be better to use this as a learning process and create something simple or use some out of the box options. 

After researching some open source 

## Kaldi

A "recipe" refers to a  set of scripts and configurations used to process and train speech recongition models. These recipes outline the steps and parameters requried for tasks such as data preperation, feature extraction, model traning and evaluation. 

### references 

1. https://www.youtube.com/watch?v=q67z7PTGRi8&t 
2. https://en.wikipedia.org/wiki/Hidden_Markov_model 
3. https://mathinsight.org/probability_distribution_idea 