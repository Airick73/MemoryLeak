---
title: 'Imperative vs Declarative programming just means using abstraction'
date: 2024-06-09T15:27:43-04:00
draft: false
cover: 
    image: images/how_vs_what.png
tags: ["C++", "declarative", "imperative", "abstraction"]
categories: ["Programming"]
---

# Distilled defintions 

### Imperative programming
Explicity writing instructions on **HOW** to accomplish a task.

```C++
#include <iostream>

int main()
{
    int numbers[5] = {1,2,3,4,5};
    int sum = 0;

    for(int i = 0; i < 5; i ++)
    {
        sum += numbers[i];
    }

    std::cout << sum << std::endl;
}
```
If I can trace through the execution of the program it is imperative.

### Declarative programming 
Using a function call that abstracts away how to accomplish a task with the specific call to **WHAT** should be accomplished.

main file
```C++
#include <iostream>
#include "reduce.h"

int main()
{
    int numbers[5] = {1,2,3,4,5};
    int sum = 0;
    reduce(sum, numbers);
    std::cout << sum << std::endl;
}
```

Reduce.h file
```C++
template <typename T, size_t N>
void reduce(T& sum, const T (&array)[N])
{    
    for(auto element : array)
    {
        sum += element;
    }
}
```

If my program uses an abstraction such as calling the reduce function to accomplish a specific goal it is declarative. I am declaring what should happen instead of defining how it should happen. 

"Many (if not all) declarative APIs have some sort of underlying imperative implementation" [^1]

![meme](images/di_scooby_meme.png)

Declarative can be state independent. In my own words it does not matter what you are passing into a declarative function call, it should handle it. 

```C++
#include <iostream>
#include "reduce.h"

int main()
{
    double numbers[10] = {0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0};
    double sum = 0;
    reduce(sum, numbers); // SUCCESS can take array of any size and type
    std::cout << sum << std::endl; // outputs 5.5
}
```

The imperative approach is state dependent, meaning if we do not pass in the `array` it was written to handle it will not compute. 

```C++
#include <iostream>

int main()
{
    int numbers[3] = {1, 2, 3};
    int sum = 0;

    for(int i = 0; i < 5; i ++) 
    {
        sum += numbers[i]; // adds garbage data past the array size
    }

    std::cout << sum << std::endl; // outputs garbage data
}
```

## What is the right approach


#### Use imperative programming

For code that is not highly reusable use imperative programming. It will be simplier to code and debug. 

#### Use declarative programming

If you find yourself needing to re-use the code and it often requires different types and sizes to be passed into it then use declarative programming.  This will prevent you from having to write redundent code for each use case. 


<!-- # What about functional

Definition: Functional programming is a paradigm where computation is treated as the evaluation of mathematical functions and avoids (changing state and mutable data).  

Chain method calls: Each method in a chain returns an object, suually the original object, allowing the next method to be called on it.

Fluent interface pattern: Aims to improve the readability by chaining method calls in a way that reads like a sentance. 

## What is the difference between functional and declarative?  -->

# references 

[^1]: [Imperative vs Declarative Programming](https://www.youtube.com/watch?v=E7Fbf7R3x6I) by [CookingMaster]. (2022, January 3rd). *YouTube*. Accessed 2024, July 6.

