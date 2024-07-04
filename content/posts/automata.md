---
title: 'Automata: self-propelling memoryless machines'
date: 2024-06-01T09:13:34-04:00
draft: true
---

## Why did I decide to learn about this 

On my journey to learn how to implement an ASR (Automatic Speech Recognition) system I fell into another rabbit hole about automata. The pre-requisete of knowledge looked like this. 

ASR -> Kaldi (ASR library) -> OpenFST (Finite-State Transducer library) -> Automata

In my experience it seems that there is a never ending linked list of things to learn before I can get to what I really want. On the bright side though understanding why I need to learn something helps me learn about it in a way that school rarely does. If I had to take a class on automata just to get some credits I would suffer twice as much going through this material. That is not to say I suffered through learning this but it was necessary pit stop before I could continue with OpenFST.....so that I could continue with Kaldi...and so here is what I've learned in a distilled form.

## The Automaton (singular form of Automata)

A finite number of states in which an input transistions you to a state. Notice I didn't say new state. I was just about to but in a Automata you can transition to the same state. A lot like in life where some inputs lead to right where you started. The good news is sometimes the state you are in is considered a final state in which the automata upon seeing you have finished in a final state approves the given sequence. As in life sometimes consistency doesn't seem like progress but you never know when your state will be evaluated and you happen to be at them right place at the right time. 

## Do nothing machines 


## Motivation to continue learning 

Something I didn't realize about automata is that it is foundational to understanding how compiliers work. This captures my interest because I am find it very motivating when I can start to build foundational knowledge on HEAVY concepts like how computers and programming languages work. Elon Musk makes a point to always go back to first principles when approaching a problem. That is how I would like to approach problems by first understanding the first principles and working my way back up to the problem. I think that understanding computer architecture, compilers, and even how electrons are stored in memory to represent binary can be invaluable when approaching any computer related problem. 