---
title: Typography for MD
tag: Markdown
layout: toc
toc: true
---

# Typogrophy for markdown
This guide is diffrent to html typography!!

- list 1
- list 2
- list 3
- list 4

* one
* two
* Three

1. something
2. something else

# Headings
```
# h1 (Semibold 36px)
## h2 (Semibold 30px)
### h3 (Semibold 24px)
#### h4 (Semibold 18px)
##### h5 (Semibold 14px)
###### h6 (Semibold 12px)
```
```
<h1>h1 (Semibold 36px)</h1>
<h2>h2 (Semibold 30px)</h2>
<h3>h3 (Semibold 24px)</h3>
<h4>h4 (Semibold 18px)</h4>
<h5>h5 (Semibold 14px)</h5>
<h6>h6 (Semibold 12px)</h6>
```
# h1 (Semibold 36px)
## h2 (Semibold 30px)
### h3 (Semibold 24px)
#### h4 (Semibold 18px)
##### h5 (Semibold 14px)
###### h6 (Semibold 12px)

---

# Heading-Classes

```
<p class="h1">.h1 (Semibold 36px)</p>
<p class="h2">.h2 (Semibold 30px)</p>
<p class="h3">.h3 (Semibold 24px)</p>
<p class="h4">.h4 (Semibold 18px)</p>
<p class="h5">.h5 (Semibold 14px)</p>
<p class="h6">.h6 (Semibold 12px)</p>
```

# Sub-Headings

```
<h1>Heading 1 <small>Sub-heading</small></h1>
<h2>Heading 2 <small>Sub-heading</small></h2>
<h3>Heading 3 <small>Sub-heading</small></h3>
<h4>Heading 4 <small>Sub-heading</small></h4>
<h5>Heading 5 <small>Sub-heading</small></h5>
<h6>Heading 6 <small>Sub-heading</small></h6>
```

# Display Headings

Display headings are designed to stand out more than the normal headings. There are 4 sizes of display heading (.display-1, .display-2, .display-3, and .display-4).

So for example, a ```<h1>``` element could be rendered in 4 different sizes using display heading classes.

To create a display heading, add one of the above classes to the heading element.

```
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
```

# Lead Text
You can make a paragraph stand out by using Bootstrap's ```.lead``` class.

```
<p class="lead">
This is the article lead &mdash; it stands out at the start of the article.
</p>

<p>
This is normal text at the normal size etc...
</p>
```

<p class="lead">
This is the article lead &mdash; it stands out at the start of the article.
</p>

<p>
This is normal text at the normal size etc...
</p>

---

# Marked Text
The HTML ```<mark>``` element represents text as marked or highlighted for reference purposes, due to its relevance in another context.

Here's an example of Bootstrap's rendering of this element:

```
<p>Sample <mark>marked text</mark>.</p>
```

<p>Sample <mark>marked text</mark>.</p>

---

# Abbreviations
In HTML, the <abbr> represents an abbreviation or acronym. The title attribute can be used to provide an expansion of the abbreviation.

In Bootstrap, abbreviations with a title attribute are rendered with a light dotted bottom border and a help cursor on hover.

```
<abbr title="Professor">Prof.</abbr>
```
<abbr title="Professor">Prof.</abbr>

---

# Initialism
You can add the Bootstrap ```.initialism``` class to render the abbreviation in a slightly smaller font size.

```
<abbr title="Structured Query Language" class="initialism">SQL</abbr> is used to query databases.
```

<abbr title="Structured Query Language" class="initialism">SQL</abbr> is used to query databases.

---

# Blockquotes

To apply Bootstrap's styles to the ```<blockquote>``` element, use the .blockquote class.

```
<blockquote class="blockquote">
<p>The most important moment of your life is now. The most important person in your life is the one you are with now, and the most important activity in your life is the one you are involved with now.</p>
</blockquote>
```

<blockquote class="blockquote">
<p>The most important moment of your life is now. The most important person in your life is the one you are with now, and the most important activity in your life is the one you are involved with now.</p>
</blockquote>

---

## Blockquotes — Source

Bootstrap renders the ```<cite>``` and ```<footer>``` elements nested inside the ```<blockquote>``` element like this:

```
<blockquote class="blockquote">
<p>Most of us are awash with beliefs of all sorts. We are steeped in the common sense and prevailing wisdom of our culture, traditions, communities, profession, family, and friends.</p>
<footer>Tom Campbell in <cite>My Big Toe</cite></footer>
</blockquote>
```

<blockquote class="blockquote">
<p>Most of us are awash with beliefs of all sorts. We are steeped in the common sense and prevailing wisdom of our culture, traditions, communities, profession, family, and friends.</p>
<footer>Tom Campbell in <cite>My Big Toe</cite></footer>
</blockquote>

---

## Blockquotes — Reverse
You can use the Bootstrap ```.blockquote-reverse``` class to right-align the blockquote:

```
<blockquote class="blockquote blockquote-reverse">
<p>Most of us are awash with beliefs of all sorts. We are steeped in the common sense and prevailing wisdom of our culture, traditions, communities, profession, family, and friends.</p>
<footer>Tom Campbell in <cite>My Big Toe</cite></footer>
</blockquote>
```

<blockquote class="blockquote blockquote-reverse">
<p>Most of us are awash with beliefs of all sorts. We are steeped in the common sense and prevailing wisdom of our culture, traditions, communities, profession, family, and friends.</p>
<footer>Tom Campbell in <cite>My Big Toe</cite></footer>
</blockquote>

---

# Lists
Bootstrap applies various styles and has a number of classes specifically for lists.

## Lists — Unstyled
You can use the Bootstrap ```.list-unstyled``` class to render lists without their default list-style and left-margin:

```
<ul class="list-unstyled">
  <li>Cats</li>
  <li>Dogs</li>
  <li>Elephants</li>
</ul>
```

<ul class="list-unstyled">
  <li>Cats</li>
  <li>Dogs</li>
  <li>Elephants</li>
</ul>

---

## Lists — Inline
ou can use the Bootstrap ```.list-inline``` and ```.list-inline-item``` classes to render lists as display: inline-block and to apply some padding:

```
<ul class="list-inline">
  <li class="list-inline-item">Cats</li>
  <li class="list-inline-item">Dogs</li>
  <li class="list-inline-item">Elephants</li>
</ul>
```

<ul class="list-inline">
  <li class="list-inline-item">Cats</li>
  <li class="list-inline-item">Dogs</li>
  <li class="list-inline-item">Elephants</li>
</ul>

---

# Description Lists
In Bootstrap, description lists are rendered like this:

```
<dl>
<dt>Arahat</dt>
<dd>The "Perfected One", who has overcome The Three Poisons of Desire, Hatred and Ignorance. </dd>
<dt>Bodhi</dt>
<dd>Awakened wisdom.</dd>
<dt>Zen</dt>
<dd>Meditative absorption in which all dualistic distinctions are eliminated.</dd>
</dl>
```

<dl>
<dt>Arahat</dt>
<dd>The "Perfected One", who has overcome The Three Poisons of Desire, Hatred and Ignorance. </dd>
<dt>Bodhi</dt>
<dd>Awakened wisdom.</dd>
<dt>Zen</dt>
<dd>Meditative absorption in which all dualistic distinctions are eliminated.</dd>
</dl>

---


# Description Lists — Horizontal
You can make the terms and descriptions line up horizontally by adding Bootstrap's row class to the dl tag, then any of the grid system's predefined classes to the dt and dd tags.

```
<dl class="dl-horizontal">
<dt class="col-sm-2">Arahat</dt>
<dd class="col-sm-10">The "Perfected One", who has overcome The Three Poisons of Desire, Hatred and Ignorance. </dd>
<dt class="col-sm-2">Bodhi</dt>
<dd class="col-sm-10">Awakened wisdom.</dd>
<dt class="col-sm-2">Zen</dt>
<dd class="col-sm-10">Meditative absorption in which all dualistic distinctions are eliminated.</dd>
</dl>
```

<dl class="dl-horizontal">
<dt class="col-sm-2">Arahat</dt>
<dd class="col-sm-10">The "Perfected One", who has overcome The Three Poisons of Desire, Hatred and Ignorance. </dd>
<dt class="col-sm-2">Bodhi</dt>
<dd class="col-sm-10">Awakened wisdom.</dd>
<dt class="col-sm-2">Zen</dt>
<dd class="col-sm-10">Meditative absorption in which all dualistic distinctions are eliminated.</dd>
</dl>

---

# Code
In Bootstrap, the ```<code>``` element is rendered like this:

```
The <code>accesskey</code> attribute can be used on any HTML5 element.
```

The <code>accesskey</code> attribute can be used on any HTML5 element.

---

# Keyboard Input
In Bootstrap, the ```<kbd>``` element is rendered like this:
```
To save the document on a Mac, press <kbd><kbd>Command</kbd>+<kbd>S</kbd></kbd>
```

To save the document on a Mac, press <kbd><kbd>Command</kbd>+<kbd>S</kbd></kbd>

---
# Preformatted Text
In Bootstrap, the ```<pre>``` element is rendered like this:

```
<pre>This text has
been formatted using
   the HTML pre tag. The browser should
      display all white space
as it was entered.
</pre>
```

<pre>This text has
been formatted using
   the HTML pre tag. The browser should
      display all white space
as it was entered.
</pre>

---

# Sample Text
In Bootstrap, the ```<samp>``` element is rendered like this
```
Computer says <samp>Not enough memory</samp>. I always thought I had a good memory!
```

Computer says <samp>Not enough memory</samp>. I always thought I had a good memory!

---
# Variables
```
<var>E</var> = <var>m</var> <var>c</var><sup>2</sup>
```

<var>E</var> = <var>m</var> <var>c</var><sup>2</sup>

---
