---
layout: post
title:  "My first (failed) attempt at contributing to Open Source"
date:   2025-05-29 02:00:00 +0800
categories: tech-related
permalink: "/blog/:title"
top-image: "/assets/images/2025-05/uncivgameplay.png"
image-description: > 
  Sample gameplay of UnCiv, and Open Source Game based on Civ V. 
image-source: https://github.com/yairm210/Unciv/
---

One of the nice things about open source software is that if you are a developer and you encounter issues, you can fix the issue by contributing directly to the open source project.

UnCiv is an open-source game under the MPL-2.0 License that lets you play something similar to Civilization V, except it is free on Android, Linux, MacOS and Windows. It is a 4X game where you can start from a primitive era and progress through the times by expanding your territory, spending culture points to implement social policies, and researching new technology through science points.

The issue I encountered while playing the game pertains to a stack overflow when having very high science points. This bug crashes the game and makes it unplayable, and therefore I wanted to take a look at it.

The stack trace shows a repetition of the following: 
- `TechManager::addScience`: Add science and calculates the leftover science after researching the technology.
- `TechManager::addTechnology`: Adds the technology to the technologies researched and handles player notifications.
- `TechManager::updateResearchProgress`: Checks if there is leftover science and calls `addScience` if needed.

Each loop represents a technology being researched. It is also possible for technologies to be continually researched (i.e. researched repeatedly indefinitely). To allow the research of multiple technologies given high science values, the method will keep looping until there is nothing else left to research or the science has completely exhausted.

There are a few constraints to solve this problem:

### It should not change the behaviour of other aspects of the game
This is obvious. 

### It should not change the codebase too much
Changing a lot of the codebase would mean changing a lot of documentation, and can make maintainers more confused if the part they were working on was changed.

### The public interface of `TechManager` should not change
It turns out that all 3 functions are depended upon by classes outside of `TechManager`. This would mean that the functions should not accept additional variables, function names should not be changed, etc. This is a diagram of the different interactions with `TechManager` through these 3 functions (pardon my handwriting):

| ![techManagerFunctions](/assets/images/2025-05/techManager.png) |
| :-: |
| The 3 functions call each other, and are called by others as well. |

There are multiple approaches to solve this issue.

### Approach 0: Add support for infinite technology cost
Currently, the costs for the technologies are specified in JSON files. This designed in mind to allow the extension of the game via modding. The workaround for the error is to have the last technology to have infinite technological cost, and therefore the recursion depth wouldn't be as deep.

The main issue to address is what to use as a placeholder for `Infinity`. JSON does not have a defined standard for `Infinity`, with some suggestions discussed on [StackOverflow](https://stackoverflow.com/questions/34976378/how-do-you-represent-infinity-in-a-json-api). Ultimately, I decided on the number `-1`, as it is parseable by the current parser for JSON to Kotlin object, and it represents an invalid value (it does not make sense for the technological cost to be negative. If it is free, it should be 0). 

For custom rulesets defined by other players, this is okay, but for the base ruleset, it would change the intended behaviour of the game.

### Approach 1: `tailrec`
Kotlin allows programmers to specify tail-recursive optimization using the keyword `tailrec`. However, it does not have support for mutually-recursive functions, and therefore it cannot be directly added into the code.

### Approach 2: Trampoline
Another way is to make a master function that calls each function. Ideally, each function should return the next function that should be called, or `null` if there is no function to call future. However, Kotlin does not natively support such function types.
```kotlin
interface RecurseFunction<out T>: () -> T
fun step(): RecurseFunction<RecurseFunction?> // error!!
```
[There are workarounds.](https://stackoverflow.com/questions/44466716/is-it-possible-to-create-a-recursive-function-type-in-kotlin) However, it would make the code messier and while this might be acceptable if it was my codebase, this is someone else's codebase. Furthermore, the code quality for this codebase is high and I do not want to worsen the maintainability of this codebase.

There is also a post for [trampolines in Kotlin](https://adamschoenemann.dk/posts/2019-02-12-trampolines.html), but it seems hard to maintain and for the same reason as above I decided to not go with the trampoline.

### Approach 3: `TechManager::updateResearchProgress` should call an implementation that uses `tailrec` instead of `TechManager::addScience`

| ![tailrec](/assets/images/2025-05/tailrec.png) |
| :-: |
| Changes are in red |

This would mean there will be some degree of code duplication, but at least `tailrec` can be used properly to clean up the stacks after use. Testing this method showed that the behaviour was the same without the issue of stack overflow.

However, there was one big issue.

### Assumptions
When I embarked on fixing this bug, I initially believed that the time take for the research to take place is acceptable. However, when I tested the code, it ran for more than half and hour before I manually stopped it. This was due to the number of recursive calls required to handle the large number of science points being used (about 100k recursive calls). Not to mention, each recursive call not only handles the calculations, but also the player notifications. Therefore, it took a really long time for the program to run. 

I ultimately decided that the bug was not worth pursuing and closed the PR I made on the repository.