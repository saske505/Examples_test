---
title: Cheatsheet
tag: Jekyll
layout: toc
toc: true
---

# Fontmatter

```
permalink: '/hello'
published: false
category: apple
categories: ['html', 'css']
tags: ['html', 'css']
```

# config

```
source: .
destination: _site
exclude: [dir, file, ...]
include: ['.htaccess']
```

# varibales

# site

{% raw %}
``` html
{{ site.time }}                 - current time
{{ site.pages }}                - list of pages
{{ site.posts }}                - list of posts
{{ site.related_posts }}        - list
{{ site.categories.CATEGORY }}  - list
{{ site.tags.TAG }}             - list
{{ site.static_files }}
```
{% endraw %}

# page

{% raw %}
``` liquid
{{ page.content }}  - un-rendered content
{{ page.title }}
{{ page.excerpt }}  - un-rendered excerpt
{{ page.url }}
{{ page.date }}
{{ page.id }}       - unique id for RSS feeds
{{ page.categories }}
{{ page.tags }}
{{ page.path }}
{{ post.excerpt | remove: '<p>' | remove: '</p>' }}
{{ post.excerpt | strip_html }}

<!-- blog pagination: -->
{{ page.next }}
{{ page.previous }}
```
{% endraw %}

# Dates

{% raw %}
``` liquid
{{ page.date | date: "%b %d, %Y" }}
```
{% endraw %}

# to string

{% raw %}
```
| array_to_string
```
{% endraw %}

# if

{% raw %}
~~~ html
{% if page.example.feature %}
{% else if xyz %}
{% else %}
{% endif %}
~~~
{% endraw %}
