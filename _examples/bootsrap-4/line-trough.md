---
title: Line trough headings
tag: Bootstrap 4
---


<!-- content to be placed inside <body>…</body> -->

<!-- In this example, the text will appear to have a strikethrough -->
<h2 class="background">Strikethrough title</h2>

<!-- We can get rid of the strikethrough look by adding a span tag and applying a background color to the span. Applying a background to the h2:after won't work because it won't adjust and hug the text. -->
<h2 class="background"><span>Line-behind title</span></h2>

<!-- We can achieve a double-lined strikethrough by adding a box-shadow to the tag. You could probably also just use a top & bottom border, then position both. -->
<h2 class="background double"><span>Double-lined title</span></h2>

<!-- This method doesn't need a <span> or background color. Source: https://css-tricks.com/forums/topic/css-trick-for-a-horizontal-type-line-behind-text/#post-138193 -->
<h2 class="no-background"><span>Line-behind title <b>(no bg)</b></span></h2>

<!-- My new preferred choice... this method doesn't need a <span>. Source: https://css-tricks.com/forums/topic/css-trick-for-a-horizontal-type-line-behind-text/#post-132492 -->
<h2 class="no-span">Line-behind title <b>(no span/no bg)</b></h2>


<style>
/**
 * Horizontal Type Line Behind Text
 * Inspired by this discussion @ CSS-Tricks: https://css-tricks.com/forums/topic/css-trick-for-a-horizontal-type-line-behind-text/#post-151970
 * Available on jsFiddle: http://jsfiddle.net/ericrasch/jAXXA/
 * Available on Dabblet: http://dabblet.com/gist/2045198
 * Available on GitHub Gist: https://gist.github.com/2045198
 */

h2 {
    font: 33px sans-serif;
    margin-top: 30px;
    text-align: center;
    text-transform: uppercase;
}

h2.background {
    position: relative;
    z-index: 1;

    &:before {
        border-top: 2px solid #dfdfdf;
        content:"";
        margin: 0 auto; /* this centers the line to the full width specified */
        position: absolute; /* positioning must be absolute here, and relative positioning must be applied to the parent */
        top: 50%; left: 0; right: 0; bottom: 0;
        width: 95%;
        z-index: -1;
    }

    span {
        /* to hide the lines from behind the text, you have to set the background color the same as the container */
        background: #fff;
        padding: 0 15px;
    }
}

h2.double:before {
    /* this is just to undo the :before styling from above */
    border-top: none;
}

h2.double:after {
    border-bottom: 1px solid blue;
    -webkit-box-shadow: 0 1px 0 0 red;
    -moz-box-shadow: 0 1px 0 0 red;
    box-shadow: 0 1px 0 0 red;
    content: "";
    margin: 0 auto; /* this centers the line to the full width specified */
    position: absolute;
    top: 45%; left: 0; right: 0;
    width: 95%;
    z-index: -1;
}

h2.no-background {
    position: relative;
    overflow: hidden;

    span {
        display: inline-block;
        vertical-align: baseline;
        zoom: 1;
        *display: inline;
        *vertical-align: auto;
        position: relative;
        padding: 0 20px;

        &:before, &:after {
            content: '';
            display: block;
            width: 1000px;
            position: absolute;
            top: 0.73em;
            border-top: 1px solid red;
        }

        &:before { right: 100%; }
        &:after { left: 100%; }
    }
}

h2.no-span {
    display: table;
    white-space: nowrap;
    &:before, &:after {
      border-top: 1px solid green;
      content: '';
      display: table-cell;
      position: relative;
      top: 0.5em;
      width: 45%;
    }
    &:before { right: 1.5%; }
    &:after { left: 1.5%; }
}
</style>
