---
layout: page
permalink: /blog/
top-image: "assets/images/HalifaxNoonGun.jpg"
title: "My Blog Posts"
text: "Sometime I like to pen down my thoughts, not only for others to see but also for future me to see how I have changed."
image-description: "One of the highlights of visiting Halifax was the noon gun. It was said to have scared then-POTUS Bill Clinton's security detail when the cannon went off."
image-source: https://commons.wikimedia.org/wiki/File:Ricercare_a_6_from_The_Musical_Offering.jpg
---
{% for post in site.posts %}
### {{ post.date | date_to_string }}: [{{post.title}}]({{post.url}})   
{{ post.excerpt }}
-----
{% endfor %}
