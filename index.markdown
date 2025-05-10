---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: page
top-image: "assets/images/northernlights.jpg"
title: "Welcome to my blog page"
text: "I am a 3rd year Computer Science Student from the National University of Singapore. I am interested in many fields, such as the application of AI to problems, the scale of databases and the principles that drives successful software development."
image-description: "I was in Waterloo, Ontario for student exchange and was very lucky to catch these beautiful Northern Lights"
---
> The Joys of the Craft 
>
> Why is programming fun? What delights may its practitioner 
expect as his reward? 
>
> First is the sheer joy of making things. As the child delights 
in his mud pie, so the adult enjoys building things, especially 
things of his own design. 1 think this delight must be an image of 
God's delight in making things, a delight shown in the distinctness 
and newness of each leaf and each snowflake. 
>
> Second is the pleasure of making things that are useful to 
other people. Deep within, we want others to use our work and 
to find it helpful. In this respect the programming system is not 
essentially different from the child's first clay pencil holder "for 
Daddy's office." 
>
> Third is the fascination of fashioning complex puzzle-like 
objects of interlocking moving parts and watching them work in 
subtle cycles, playing out the consequences of principles built in 
from the beginning. The programmed computer has all the fasci- 
nation of the pinball machine or the jukebox mechanism, carried 
to the ultimate. 
>
> Fourth is the joy of always learning, which springs from the 
nonrepeating nature of the task. In one way or another the prob- 
lem is ever new, and its solver learns something: sometimes practi- 
cal, sometimes theoretical, and sometimes both. 
>
> Finally, there is the delight of working in such a tractable 
medium. The programmer, like the poet, works only slightly re- 
moved from pure thought-stuff. He builds his castles in the air, 
from air, creating by exertion of the imagination. Few media of 
creation are so flexible, so easy to polish and rework, so readily 
capable of realizing grand conceptual structures. (As we shall see 
later, this very tractability has its own problems.) 

~ The Mythical Man-Month, by Frederick P. Brooks Jr.

Welcome to my personal website! Here you'll find:

---

## [Portfolio](/projects)
Learn more about the projects I’ve worked on. (Press shift and scroll the gallery)
<div class="project-gallery">
  {% for project in site.data.projects %}
    <div class="project-card">
    <h3 style="height:50px">{{project.name}}</h3>  
    <p style="height:100px">{{project.description}}</p>
    {% case project.status %}
      {% when 0 %}
        <code style="background-color: grey">Planned</code>
      {% when 1 %}
        <code style="background-color: lightgreen">Ongoing</code>
      {% when 2 %}
        <code style="background-color: orange">On Hold</code>
      {% when 3 %}
        <code style="background-color: green">Completed</code>
      {% when 4 %}
        <code style="background-color: red">Abandoned</code>
      {% else %}
        <code style="background-color: red">Invalid</code>
      {% endcase %}
      </div>
  {% endfor %}

</div>


---

## [Blog Posts](/blog)
I write about software engineering, technology, and things I’m learning.  
Check out my latest thoughts and tutorials.

---

## [Recommended Resources](/resources)
A curated list of books, tools, articles, and courses I’ve found helpful or inspiring.

---

Thanks for visiting!
