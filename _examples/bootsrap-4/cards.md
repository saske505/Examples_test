---
title: Cards
tag: Bootstrap 4
---

# Basic Card

To create a basic card, apply the ```.card``` and ```.card-block``` classes to an element to create the outer card container.

Add ```.card-title``` to any heading elements and .card-text to text elements.

```
<div class="card card-block">
<h4 class="card-title">Boot Polish</h4>
<p class="card-text">Boot polish is a waxy paste, cream, or liquid used to polish, shine, and waterproof leather shoes or boots to extend the footwear's life, and restore, maintain and improve their appearance.</p>
<a href="#" class="btn btn-primary">More</a>
</div>
```

<div class="card card-block">
<h4 class="card-title">Boot Polish</h4>
<p class="card-text">Boot polish is a waxy paste, cream, or liquid used to polish, shine, and waterproof leather shoes or boots to extend the footwear's life, and restore, maintain and improve their appearance.</p>
<a href="#" class="btn btn-primary">More</a>
</div>

---

# Header & Footer

You can add a header and/or footer by adding a ```<div>``` with ```.card-header``` or ```.card-footer```.

```
<div class="card" style="max-width: 20rem;">
<div class="card-header">
Sponsored Content
</div>
<div class="card-block">
<h4 class="card-title">Ugg Boots</h4>
<p class="card-text">Best ugg boots on the planet. Free shipping, 24/7 customer service.</p>
</div>
<div class="card-footer">
By Uuuuggghhh.com
</div>
</div>
```
<div class="card" style="max-width: 20rem;">
<div class="card-header">
Sponsored Content
</div>
<div class="card-block">
<h4 class="card-title">Ugg Boots</h4>
<p class="card-text">Best ugg boots on the planet. Free shipping, 24/7 customer service.</p>
</div>
<div class="card-footer">
By Uuuuggghhh.com
</div>
</div>

---

# HTML Headers

You can also apply the ```.card-header``` class to any HTML header element (i.e. `<h1>` - `<h6>` tags).

```
<div class="card" style="max-width: 20rem;">
<h3 class="card-header">
Cold Feet?
</h3>
<div class="card-block">
<h4 class="card-title">Ugg Boots</h4>
<p class="card-text">Best ugg boots on the planet. Free shipping, 24/7 customer service.</p>
</div>
<div class="card-footer">
By Uuuuggghhh.com
</div>
</div>
```

<div class="card" style="max-width: 20rem;">
<h3 class="card-header">
Cold Feet?
</h3>
<div class="card-block">
<h4 class="card-title">Ugg Boots</h4>
<p class="card-text">Best ugg boots on the planet. Free shipping, 24/7 customer service.</p>
</div>
<div class="card-footer">
By Uuuuggghhh.com
</div>
</div>

---

# Nav Tab

Add the `.card-header-tabs` class to the `<ul>` element.

```
<div class="card" style="max-width: 20rem;">
<div class="card-header">
<ul class="nav nav-tabs card-header-tabs">
<li class="nav-item">
<a class="nav-link active" href="#">Ugg</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Moccasins</a>
</li>
<li class="nav-item">
<a class="nav-link disabled" href="#">Go Go</a>
</li>
</ul>
</div>
<div class="card-block">
<h4 class="card-title">Ugg Boots</h4>
<p class="card-text">Best ugg boots on the planet. Free shipping, 24/7 customer service.</p>
</div>
<div class="card-footer">
By Uuuuggghhh.com
</div>
</div>
```

<div class="card" style="max-width: 20rem;">
<div class="card-header">
<ul class="nav nav-tabs card-header-tabs">
<li class="nav-item">
<a class="nav-link active" href="#">Ugg</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Moccasins</a>
</li>
<li class="nav-item">
<a class="nav-link disabled" href="#">Go Go</a>
</li>
</ul>
</div>
<div class="card-block">
<h4 class="card-title">Ugg Boots</h4>
<p class="card-text">Best ugg boots on the planet. Free shipping, 24/7 customer service.</p>
</div>
<div class="card-footer">
By Uuuuggghhh.com
</div>
</div>

---

# Nav Pill

Add the `.card-header-pills` class to the `<ul>` element.


```
<div class="card" style="max-width: 20rem;">
<div class="card-header">
<ul class="nav nav-pills card-header-pills">
<li class="nav-item">
<a class="nav-link active" href="#">Ugg</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Moccasins</a>
</li>
<li class="nav-item">
<a class="nav-link disabled" href="#">Go Go</a>
</li>
</ul>
</div>
<div class="card-block">
<h4 class="card-title">Ugg Boots</h4>
<p class="card-text">Best ugg boots on the planet. Free shipping, 24/7 customer service.</p>
</div>
<div class="card-footer">
By Uuuuggghhh.com
</div>
</div>
```

<div class="card" style="max-width: 20rem;">
<div class="card-header">
<ul class="nav nav-pills card-header-pills">
<li class="nav-item">
<a class="nav-link active" href="#">Ugg</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Moccasins</a>
</li>
<li class="nav-item">
<a class="nav-link disabled" href="#">Go Go</a>
</li>
</ul>
</div>
<div class="card-block">
<h4 class="card-title">Ugg Boots</h4>
<p class="card-text">Best ugg boots on the planet. Free shipping, 24/7 customer service.</p>
</div>
<div class="card-footer">
By Uuuuggghhh.com
</div>
</div>

---

# Flush Content (Remove Padding)

By default, the `.card-block` class has padding. This provides a nice aesthetically pleasing space between the content and the card border.

Sometimes you might want to remove the padding and have content line up flush against the sides of the card.

```
<div class="card" style="max-width: 202px;">

<!-- Heading -->
<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<h6 class="card-subtitle text-muted">Sun disappears!</h6>
</div>

<!-- Image -->
<img src="http://via.placeholder.com/350x150" alt="Photo of sunset">

<!-- Text Content -->
<div class="card-block">
<p class="card-text">The sun disappeared behind the horizon today. Experts claim it could be gone for good!</p>
</div>

</div>
```

<div class="card" style="max-width: 202px;">

<!-- Heading -->
<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<h6 class="card-subtitle text-muted">Sun disappears!</h6>
</div>

<!-- Image -->
<img src="http://via.placeholder.com/350x150" alt="Photo of sunset">

<!-- Text Content -->
<div class="card-block">
<p class="card-text">The sun disappeared behind the horizon today. Experts claim it could be gone for good!</p>
</div>

</div>

To create flush content, don't put that content inside a `.card-block` (because it has padding).

Instead, remove the .card-block from the outer `<div>` and nest it inside (in its own `<div>`).

Now you can place the (flush) content outside the `.card-block` (but still inside the `.card`). This effectively removes the padding — allowing the content to line up flush against the sides of the card. You can have multiple `.card-block` elements if required.

Note that when using content with a fixed width (such as images), you may need to specify the width of the card to match that of the content.

---

# Top & Bottom

You can have content such as images line up flush with the top of the card (so that the top corners of the image fit flush with the rounded corners of the card).

To do this, apply either the `.card-img-top` or `.card-img-bottom` class to the `<img>` tag.

```
<div class="card" style="max-width: 202px;">

<!-- Image -->
<img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Photo of sunset">

<!-- Text Content -->
<div class="card-block">
<p class="card-text">Well it was good while it lasted...</p>
</div>

</div>
```

<div class="card" style="max-width: 202px;">

<!-- Image -->
<img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Photo of sunset">

<!-- Text Content -->
<div class="card-block">
<p class="card-text">Well it was good while it lasted...</p>
</div>

</div>

---

# List Groups

You can add list groups to cards. Use the `.list-group-flush` class to place it flush against the card's border.

```
<div class="card" style="max-width: 20rem;">

<!-- Card Header -->
<div class="card-header">
Sun Gone
</div>

<!-- Card Block -->
<div class="card-block">
<p class="card-text">Expert opinions are divided. Here's what they say will happen next.</p>
</div>

<!-- List Group -->
<ul class="list-group list-group-flush">
<li class="list-group-item">The Sun will come back</li>
<li class="list-group-item">The Sun won't come back</li>
<li class="list-group-item">It will have babies and spawn thousands more suns</li>
<li class="list-group-item">Good night!</li>
</ul>

</div>
```

<div class="card" style="max-width: 20rem;">

<!-- Card Header -->
<div class="card-header">
Sun Gone
</div>

<!-- Card Block -->
<div class="card-block">
<p class="card-text">Expert opinions are divided. Here's what they say will happen next.</p>
</div>

<!-- List Group -->
<ul class="list-group list-group-flush">
<li class="list-group-item">The Sun will come back</li>
<li class="list-group-item">The Sun won't come back</li>
<li class="list-group-item">It will have babies and spawn thousands more suns</li>
<li class="list-group-item">Good night!</li>
</ul>

</div>

---

# Links

Add the `.card-link` class to the `<a>` element to display links inside cards.

```
<div class="card" style="max-width: 20rem;">

<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<p class="card-text">Here are the top resources for all things related to the Sun.</p>
<!-- Links -->
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>

</div>
```

<div class="card" style="max-width: 20rem;">

<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<p class="card-text">Here are the top resources for all things related to the Sun.</p>
<!-- Links -->
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>

</div>

---

# Text Alignment

You can use any of Bootstrap's text alignment classes to align text within the card. These are `.text-left`, `.text-right`, `.text-center`, `.text-justify`, and `.text-nowrap`.

```
<div class="card text-center" style="max-width: 202px;">

<!-- Heading -->
<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<h6 class="card-subtitle text-muted">Sun disappears!</h6>
</div>

<!-- Image -->
<img src="http://via.placeholder.com/350x150" alt="Photo of sunset">

<!-- Text Content -->
<div class="card-block">
<p class="card-text">The sun disappeared behind the horizon today. Experts claim it could be gone for good!</p>
<a href="#" class="btn btn-primary">Full Report</a>
</div>

</div>
```

<div class="card text-center" style="max-width: 202px;">

<!-- Heading -->
<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<h6 class="card-subtitle text-muted">Sun disappears!</h6>
</div>

<!-- Image -->
<img src="http://via.placeholder.com/350x150" alt="Photo of sunset">

<!-- Text Content -->
<div class="card-block">
<p class="card-text">The sun disappeared behind the horizon today. Experts claim it could be gone for good!</p>
<a href="#" class="btn btn-primary">Full Report</a>
</div>

</div>

---

# Contextual Color

Bootstrap has contextual classes available for cards. These enable you to switch the color based on the context.

You can use `.card-primary`, `.card-success`, `.card-info`, `.card-warning`, and `.card-danger`.

On darker colors, you can use `.card-inverse` to invert the text color.

```
<div class="card card-inverse card-danger" style="max-width: 20rem;">

<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<p class="card-text">Here are the top resources for all things related to the Sun.</p>
<!-- Links -->
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>

</div>
```

<div class="card card-inverse card-danger" style="max-width: 20rem;">

<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<p class="card-text">Here are the top resources for all things related to the Sun.</p>
<!-- Links -->
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>

</div>

---

# Border Color

You can also use contextual colors on the card's border.

To do this, use one of the `.card-outline-*` classes.

<div class="card card-outline-danger" style="max-width: 20rem;">

<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<p class="card-text">Here are the top resources for all things related to the Sun.</p>
<!-- Links -->
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>

</div>

# Image Overlay

You can apply a background image to a card, then have text appear over the top.

To do this, apply the `.card-img-overlay` class to the text content.

```
<div class="card card-inverse text-center" style="max-width: 202px;">

<!-- Image -->
<img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Photo of sunset">

<!-- Text Overlay -->
<div class="card-img-overlay">
<h4 class="card-title">What Next?</h4>
<p class="card-text">Is this the end?</p>
</div>

<div class="card-block">
Tune in next week to find out!
</div>

</div>
```

<div class="card card-inverse text-center" style="max-width: 202px;">

<!-- Image -->
<img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Photo of sunset">

<!-- Text Overlay -->
<div class="card-img-overlay">
<h4 class="card-title">What Next?</h4>
<p class="card-text">Is this the end?</p>
</div>

<div class="card-block">
Tune in next week to find out!
</div>

</div>

---

# Card Width

Cards will fill the horizontal space by default. You can change the width via a number of methods.

## CSS

You can specify the width explicitly using CSS. For example, you can use properties such as 'width' or 'max-width'. Some of the above examples use CSS to constrain the width of the cards.

## Grid

As with any other content, you can place your cards inside a Bootstrap grid.

```
<div class="container-fluid">
<div class="row">
<div class="col-xs-6">

<div class="card">
<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<p class="card-text">Here are the top resources for all things related to the Sun.</p>
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>
</div>

</div>
<div class="col-xs-6">

<div class="card">
<div class="card-block">
<h4 class="card-title">Sun Up</h4>
<p class="card-text">Looks like the Sun has returned. Here's why.</p>
<a href="#" class="btn btn-primary">Download Report</a>
</div>
</div>

</div>
</div>
</div>
```

<div class="container-fluid">
<div class="row">
<div class="col-xs-6">

<div class="card">
<div class="card-block">
<h4 class="card-title">Sun Gone</h4>
<p class="card-text">Here are the top resources for all things related to the Sun.</p>
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>
</div>

</div>
<div class="col-xs-6">

<div class="card">
<div class="card-block">
<h4 class="card-title">Sun Up</h4>
<p class="card-text">Looks like the Sun has returned. Here's why.</p>
<a href="#" class="btn btn-primary">Download Report</a>
</div>
</div>

</div>
</div>
</div>

---

# Card Groups

Card groups allow you to present multiple cards as a single attached element, with equal widths and heights.

To do this, nest all cards within a `.card-group` element.

If the example doesn't appear correctly, it is probably due to the small viewport size. Try this preview instead.

```
<div class="card-group">

<!-- Card 1 -->
<div class="card">
<div class="card-header">Sun Gone</div>
<div class="card-block">
<p class="card-text">The top resources for all things related to the Sun.</p>
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>
</div>

<!-- Card 2 -->
<div class="card">
<div class="card-header">Sun Up</div>
<div class="card-block">
<p class="card-text">Looks like the Sun has returned. Here's <a href="#" class="card-link">why</a>.</p>
</div>
</div>

</div>
```

<div class="card-group">

<!-- Card 1 -->
<div class="card">
<div class="card-header">Sun Gone</div>
<div class="card-block">
<p class="card-text">The top resources for all things related to the Sun.</p>
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>
</div>

<!-- Card 2 -->
<div class="card">
<div class="card-header">Sun Up</div>
<div class="card-block">
<p class="card-text">Looks like the Sun has returned. Here's <a href="#" class="card-link">why</a>.</p>
</div>
</div>

</div>

---

# Card Decks

Card decks are similar to card groups, except the cards inside card decks aren't attached to each other.

To do this, nest all cards within a `.card-deck` element that is nested inside a `.card-deck-wrapper`.

If the example doesn't appear correctly, it is probably due to the small viewport size. Try this preview instead.

```
<div class="card-deck-wrapper">
<div class="card-deck">

<!-- Card 1 -->
<div class="card">
<div class="card-header">Sun Gone</div>
<div class="card-block">
<p class="card-text">The top resources for all things related to the Sun.</p>
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>
</div>

<!-- Card 2 -->
<div class="card">
<div class="card-header">Sun Up</div>
<div class="card-block">
<p class="card-text">Looks like the Sun has returned. Here's <a href="#" class="card-link">why</a>.</p>
</div>
</div>

</div>
</div>
```

<div class="card-deck-wrapper">
<div class="card-deck">

<!-- Card 1 -->
<div class="card">
<div class="card-header">Sun Gone</div>
<div class="card-block">
<p class="card-text">The top resources for all things related to the Sun.</p>
<a href="#" class="card-link">Sun Gone</a>
<a href="#" class="card-link">Still Gone</a>
</div>
</div>

<!-- Card 2 -->
<div class="card">
<div class="card-header">Sun Up</div>
<div class="card-block">
<p class="card-text">Looks like the Sun has returned. Here's <a href="#" class="card-link">why</a>.</p>
</div>
</div>

</div>
</div>

---

# Card Columns

Bootstrap columns enable you to display multiple cards inside each column, each card stacked on top of the other.

To do this, nest all cards within a `.card-columns` element.

If the example doesn't appear correctly, it is probably due to the small viewport size. Try this preview instead.

```
<div class="card-columns">

<!-- Card 1 -->
<div class="card">
<div class="card-header">Card 1</div>
<div class="card-block">
<p class="card-text">Text for this card.</p>
</div>
</div>

<!-- Card 2 -->
<div class="card">
<div class="card-block">
<h4 class="card-title">Card 2</h4>
<p class="card-text">Text for this card.</p>
</div>
</div>

<!-- Card 3 -->
<div class="card">
<div class="card-header">Card 3</div>
<div class="card-block">
<p class="card-text">Text for this card. Here's <a href="#" class="card-link">why</a>.</p>
</div>
<div class="card-footer">Footer</div>
</div>

<!-- Card 4 -->
<div class="card">
<div class="card-header">Card 4</div>
<div class="card-block">
<p class="card-text">Text for this card.</p>
</div>
<div class="card-footer">Footer</div>
</div>

<!-- Card 5 -->
<div class="card">
<div class="card-block">
<h4 class="card-title">Card 5</h4>
<p class="card-text">Text for this card.</p>
</div>
</div>

<!-- Card 6 -->
<div class="card">
<div class="card-header">Card 6</div>
<div class="card-block">
<p class="card-text">Text for this card. Here's <a href="#" class="card-link">why</a>.</p>
</div>
</div>

<!-- Card 7 -->
<div class="card">
<div class="card-header">Card 7</div>
<div class="card-block">
<p class="card-text">Text for this card. Here's <a href="#" class="card-link">why</a>.</p>
</div>
<div class="card-footer">Footer</div>
</div>

<!-- Card 8 -->
<div class="card">
<div class="card-block">
<h4 class="card-title">Card 8</h4>
<p class="card-text">Text for this card.</p>
</div>
</div>

</div>
```

<div class="card-columns">

<!-- Card 1 -->
<div class="card">
<div class="card-header">Card 1</div>
<div class="card-block">
<p class="card-text">Text for this card.</p>
</div>
</div>

<!-- Card 2 -->
<div class="card">
<div class="card-block">
<h4 class="card-title">Card 2</h4>
<p class="card-text">Text for this card.</p>
</div>
</div>

<!-- Card 3 -->
<div class="card">
<div class="card-header">Card 3</div>
<div class="card-block">
<p class="card-text">Text for this card. Here's <a href="#" class="card-link">why</a>.</p>
</div>
<div class="card-footer">Footer</div>
</div>

<!-- Card 4 -->
<div class="card">
<div class="card-header">Card 4</div>
<div class="card-block">
<p class="card-text">Text for this card.</p>
</div>
<div class="card-footer">Footer</div>
</div>

<!-- Card 5 -->
<div class="card">
<div class="card-block">
<h4 class="card-title">Card 5</h4>
<p class="card-text">Text for this card.</p>
</div>
</div>

<!-- Card 6 -->
<div class="card">
<div class="card-header">Card 6</div>
<div class="card-block">
<p class="card-text">Text for this card. Here's <a href="#" class="card-link">why</a>.</p>
</div>
</div>

<!-- Card 7 -->
<div class="card">
<div class="card-header">Card 7</div>
<div class="card-block">
<p class="card-text">Text for this card. Here's <a href="#" class="card-link">why</a>.</p>
</div>
<div class="card-footer">Footer</div>
</div>

<!-- Card 8 -->
<div class="card">
<div class="card-block">
<h4 class="card-title">Card 8</h4>
<p class="card-text">Text for this card.</p>
</div>
</div>

</div>

---
