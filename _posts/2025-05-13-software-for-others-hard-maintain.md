---
layout: post
title:  "Creating software for other people to maintain is hard"
date:   2025-05-13 23:00:00 +0800
categories: tech-related
permalink: "/blog/:title"
top-image: "/assets/images/musicnotes.png"
image-description: > 
  The first page of the manuscript of the "Ricercar a 6" BWV 1079 by Johann Sebastian Bach. 
  Credits to Berlin State Library, Germany.
image-source: https://commons.wikimedia.org/wiki/File:Ricercare_a_6_from_The_Musical_Offering.jpg
---

Recently, a friend of mine asked me to create a website for him. He is a music student and wants to use the website to showcase his works (just like me but I am a Computer Science Student) and he is willing to pay some money for it. I took the job since he is a very trusted friend of mine, and decided to go over the details with him. 

| ![Skill Comparision](/assets/images/memyfriendmusic.png) |
| :---: |
| Skills comparision between my friend and I | 

My first instinct was to use Next.js, as I had a decent experience building things with it 2 years ago during my summer project with another friend. However, eventually I decided that it was a bad idea to use it, and I detail the reasons below.

## First Meeting
During my first meeting with my friend, he highlighted that he already had an existing website on Wix.com but the design wasn't really good and he wanted something that is cheaper. He then went over some of the websites for other musicians as an example of what he wanted.

From there, I discussed with him the various options and prices for hosting, development, as well as the possibility of registering a domain name so that his website would look more professional and less like a scam. 

It has helped that he used ChatGPT to iron out some details and he gave me a few stuff to work with. He also wanted to set up a payment system so that other players can buy the rights to play his music (e.g. Playing for an orchestra), but given the complexity he was okay with using a Google form to collect orders 

(Sidenote: I have come to appreciate that sometimes non-technical people give the simplest solutions when I can only think of methods that require more effort. The Google Form was his idea while I was thinking of how to implement an notification system when a user submits a custom-built form on the website) 

## First Attempt for development
The most important thing for this project is that end product must be easily maintainable for people who have no idea what web development is, especially when the person is focused on music. This means they should be able to easily edit components of their website, update their website to include more content and update lists of whatever they want (e.g. accomplishments, events, milestones). Their experience making changes to the website must be frictionless, otherwise they would not bother using the website.

That was a very hard problem to solve with the impossible triangle that is complexity, maintainability and speed

| ![The Triangle](/assets/images/maintainabilityTriangle.png) |
| :-: |
| You can only choose 2. And this is not the Vercel Logo. |

All 3 are desireable. Deliver fast, Easy to maintain, and is so innovative in features (contributing to its complexity) that it stands out from competitors.

However, there are trade-offs. 
- Choosing Speed and Complexity means sacrificing maintainability as you will not be concerned with tech debt and best practices while churning out a couple of features. Sacrificing maintainability means accumulating tech debt that will slow down development in future releases.
- Choosing Speed and Maintainability means that your product is not complex. Sacrificing complexity means your programs are simple and competitors can easily replicate your features.
- Choosing Maintainability and Complexity results in slower intial delivery as you will need to adhere to and be updated with best practices and you will also occassionally refactor the code to make it more maintainable. Sacrificing delivery speed means competitors who sacrifice maintainability may beat you to the market.

Implementing an interface for him to change the contents of the website adds a lot of complexity to the project. Not to mention, if he is unhappy with the layout of the website, it would mean my involvement again to code out another layout that may take another few hours, and even then he might still be unhappy with the new layout.

Inspired by my own website, I then decided to use YAML Ain't Markup Language as a way to store details for him to modify in 1 file. YAML is meant to be a [human-readable serialization language](https://yaml.org/), and I hoped that my friend might be able to navigate a YAML file and update the contents respectively. 

## The Revelation
As I continued developing the website, I noticed that I had put in a lot of hours just to create a skeleton of a front page. 

At the same time, as I was looking at the list of sites my friend had given as a reference, I noticed that one of them (which had the design that he liked the most) was using WordPress. 

| ![The image](/assets/images/wordpressf12.png) |
| :-: |
| The screenshot of the elements in the website. I am not sponsored btw. |

This made me re-evaluate the capabilities of WordPress despite the infamy of WordPress.com. As with any tool, I like to evaluate it through a tutorial video to see its capabilities right out of the box. [This was the video I watched](https://www.youtube.com/embed/zd5_MN-6kqs). 

I was amazed by the number of templates offered, as well as the simplicity of editing the website. This is when I knew the Next.js was not the answer to my friend's problem. If I were a non-technical person, I would much rather edit the website directly on the hosting platform than to edit a YAML file and run `npm run dev` on my command line (and somehow manually set execution exceptions because my system config is restrictive). Getting real-time feedback on how the website will look like is valuable. It was also refreshing to see alternatives to WordPress.com that are more affordable.

## Conclusion (?)
I already knew that solving problems is not about choosing the flashiest tools, but instead it's about choosing the right tools for the right job. New libraries have unstable APIs (I am especially looking at you PyTorch) which are prone to changes and can break an application that depends on it.

However, the most "common" tools might not be suited for the job as well. I get the impression that React is far more popular than WordPress in the field of web development, but WordPress still has its place, especially for people who are not into centering divs all day and configuring the styles. I used to be doubtful that [WordPress powers about 40% of the internet](https://w3techs.com/technologies/details/cm-wordpress), but now I can see why: Empowering everyday people with the option to create nice-looking websites.

This experience taught me to always align my technical decisions with the real-world needs and capabilities of the people I’m building for.