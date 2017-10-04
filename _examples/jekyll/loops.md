---
title: Loops
tag: Jekyll
layout: toc
toc: true
---

# Posts

## show a list

{% raw %}
~~~ liquid
{% for item in site.posts %}
  {{ item }}
{% endfor %}
~~~
{% endraw %}
---

## Show categories from fontmatter

{% raw %}
~~~ liquid
{% assign categories = site.categories %}
{% for item in categories %}
  {{ item[0] }}
{% endfor %}
~~~
{% endraw %}

## Show categories based on folder path

You have to first create a folder in the root directory /categoryname/_posts/

The category will then work the same as if it was in fontmatter

# Collections

## Show a list

{% raw %}
~~~ liquid
{% for item in site.examples %}
  {{ item.title }}
{% endfor %}
~~~
{% endraw %}

## Show categories


## Show tags

{% raw %}
~~~ liquid
{% assign uniq_tags = site.examples
                      | map: 'tags'
                      | join: ","
                      | split: ","
                      | uniq %}
{{ uniq_tags | array_to_string }}
~~~
{% endraw %}

## Show all tags and add a active class

{% raw %}
~~~ liquid
{% assign tags =  site.examples | map: 'tags' | join: ','  | split: ',' | uniq %}
{% for tag in tags %}
  <h3>{{ tag }}</h3>
  <ul>
  {% for item in site.examples %}
    {% if item.tags contains tag %}
    <li>
      <a href="{{ site.baseurl }}{{ item.url }}">
        {% if item.path == page.path %}
        true
        {% endif %}
      </a>
    </li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}
~~~
{% endraw %}
