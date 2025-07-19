---
name: Martin Newell
genre:
    - Indie Rock
    - Jangle Pop
    - Blah Blah Blah
of:
    - Martin Newell
    - Lawrence "Lol" Elliot
    - Giles Smith
yearsActive: 
    - 1980s
    - 1990s
    - 2010s
    - 2020s
thumbAlt: The cleaners from venus in xxxx
description: An innovative lo-fi group from the early 80's

tags: 
---

<mark>The Cleaners From Venus</mark> were blah blah blah something, article here, etc

 {% for post in collections.martinnewell | sort(attribute="post.data.year") %} 
    <li><a href="/articles/releases/{{ post.data.name | slug }}/">{{ post.data.name }} - {{ post.data.year }}</a></li>
    {% endfor %}