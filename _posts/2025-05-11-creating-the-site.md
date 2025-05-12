---
layout: post
title:  "Building this website"
date:   2025-05-11 11:00:00 +0800
categories: tech-related
permalink: "/blog/:title"
top-image: "/assets/images/sitepreview.png"
image-description: "A screenshot of my website"
---
Now, the tech stack hsa been chosen.

The next question on building the website would be

> How do I structure my website?

There are many different ways of building a portfolio website, and I am no designer, and therefore I should take inspiration from a few people for building the website. One of the goals of my website is to be aesthetically pleasing (to me at least) so that it would not be a chore to look at my website. 

In this case, I took inspiration from [Troy Hunt](https://www.troyhunt.com/), an expert in Cybersecurity who most notably is involved in [Have I Been Pwned](https://haveibeenpwned.com/). The difference is that he uses React while I use Jekyll.

I mainly took the navigation bar, the image-at-the-top-of-the-site, and the blog post layout idea from him. I also added a text-to-speech button on my blog posts as I recalled it was useful when I was browsing one of the news sites. I should probably add a button to share the post but that will be for another day.

### My Experience using Jekyll
So far, it was a bit rough to use Jekyll as it meant having to use pure HTML, CSS (supported by SCSS) and Javascript if Markdown is insufficient to style my page. 

Example of the frustrations I went through (Although things got easier later on as I got more used to HTML and CSS):
- Centering elements
- Putting text element on top of image element (I gave up and used the image as a background to a div instead)
- Figuring out the nice sizes of the elements and text
- Figure out how to align the items in the navigation bar
- Figure out how to add text-to-voice (I was happy to hear that browsers natively supported this.)

It turns out that there is an alternative that I could have used, [Astro](https://astro.build/), but it didn't seem to have native RSS support (I could be wrong).

However, my website is not complex, and therefore can handle some amount of tech debt. Furthermore, I assume that I won't be touching the layout much after the initial creation, and can start writing my blog posts on markdown instead.

### Reflection
I am left with the styling of a few pages, such as the blog and the front page. I hope that I will be able to write great posts!