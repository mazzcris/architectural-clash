# Architectural Clash

> **to clash [/klæʃ/](http://www.wordreference.com/audio/en/uk/rp/en015416.mp3)**  
>
> *to strike with a loud, harsh noise*

How do you manage changes in your project? Developers tends to hate changes in the requirements of their software. On the contrary, usually if a software change its behavior it's because someone it's actually using it. So an healthy software is a software that is living in a continous evolving scenario.

Is your software ready for the continous changes? In other words is your software resilient to changes?

- - -

## Introducing Architectural Clash

In extrategy we developed a new way to assess the level of resilience of our frontend and mobile applications: the  Architectural Clash.

## Why

Let's [start with why](https://www.startwithwhy.com/). Why should I care about the resilience of my codebase? You should care because changes are inevitable in real life applications. So you need to know how your software react to chenges. Your software should tend to be [Antifragile](https://en.wikipedia.org/wiki/Antifragile).

## When

When I should care? Obviously your project should have a medium lifespan at least. If you're creating a mobile app for a new startup you don't know how your business is going to last. So in that case the best thing to do is to write the code as fast as you can, test the market, and then [throw away everything](https://martinfowler.com/bliki/SacrificialArchitecture.html) and start anew. But if you have a consolidated business and your software should last for years or decades, Architectural Clash it's the right tool for you.

## What

So what is an Architectural Clash? You take a whole team for a medium amount of time, usually two days. This team works on a task so *huge* that it wuold be **impossible** to achieve in the two days. Remember that the purpose of this format is to test the grade of antifragility of your code. In other words, the purpose of your team is to learn as much as possible from your codebase.

## Who

It's quite important to choose the right team for the success of the format. You team should be formed by people that is actualy working on the project, and people that don't know *anything* about the project. This part of the team it's quite important in order to let innovative ideas to emerge, with any type of bias, caused by the *history* of the project itself.

## How

Let's look in detail how this format works:

### Phase 0: Choose the task

Before starting the clash you should choose the task. You can take ideas from the current team of the project with any kind of brainstorming meeting. Some options are:

* Techinical retrospective
* Popcorn Flow
* Lego Serious Play

You should write the task on a post-it. Most importantly you should write **why** this is a important task on the back of the post-it. All of the decisions that you will take during the two days should be driven by the "why part" that you write on the post-it.

### Phase 1: The Clash

Ok time to work, just try to achieve the task. Split your time in 3 hours slot. At the end of every slot take your time to write down what you learned and possible future scenarios.

### Phase 2: The outcome

The last 2 hours of the format are for conclusion. Take down all of your notes and try to write an action plan to make your codebase less resistent to changes. Keep in mind that your action plan should be a valid answer to the "why part* of your task.

## License

This contract is licensed under the WTFPL license. For more information, see the LICENSE file in this repository.
![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)

![Logo](http://www.extrategy.net/themes/custom/extrategy/img/logo-extrategy.svg)