# w1d2-demo-march4

Demo about problem solving

## Plan

- problem solving approach
  - incremental development - step-by-step
  - EDD - error-driven development
- Debugging strategies

## A quote about bugs :)

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.

- [E. W. Dijkstra](http://www.defprogramming.com/quotes-by/e-w-dijkstra/)

## What is an algorithm

- Put simply an algorithm is a **series of steps to solve a problem**

- A more formal definition:

> "An algorithm is a _sequence of unambiguous instructions_ for _solving a problem_, i.e., for obtaining a required _output_ for any _legitimate input_ in a _finite amount of time._" -- _Anany Levitin_

- Sequence of unambiguous instructions

  - Humans use abstractions for almost everything (Grabing a coffee, go to work, etc)
  - Computers needs to be told every detailed steps in order to do something. These steps need to be precise.

- Solving a Problem

  - Am I solving the right problem?
  - Do I truly understand the problem

- Obtaining the required output

  - Am I getting the right solution? Does it solved the problem?

- Any legitimate input

  - Am I dealing with the right input?
  - Does it work with a different set of data?

- A finite amount of time

  - Can the solution be found in a reasonable amount of time

## Problem solving approach

Steps:

Rinse and repeat:

- State hypothesis
- Test hypothesis
- changes

- Can we improve the solution ?
- Code refactoring

Problem:

Write a **node program** that **takes in** an unlimited number of **command line arguments**, **goes through** each and **prints out** the **sum** of them.

If any argument is **not a whole number**, skip it. Do support negative numbers though. Output error message if any argument **is not a number.**

### Write the steps

- Write the steps in english to get to the solution

### Debug Strategies

1- use console.log to understand what's going on

- use labels, separate multiple values with commas

2- Use the Node Inspector to Debug in Chrome > node --inspect-brk sum.js and go to chrome://inspect

- Play in Node REPL
- Play in another REPL such as Repl/it

3- Text Editor Integration

- You can debug in VS Code or in your favorite editor with the proper extension.
