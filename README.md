# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by missing dependency array. The counter will keep incrementing indefinitely. The solution demonstrates the correct usage of the dependency array to prevent this issue.

## Bug

The `bug.js` file contains the buggy code.  The `useEffect` hook updates the state `count` within itself without a dependency array. This creates a loop which updates the state constantly, causing an infinite render cycle. 

## Solution

The `bugSolution.js` file shows the corrected code. By adding an empty dependency array `[]`  to `useEffect`, the effect only runs once after the component mounts and it stops the infinite loop. 