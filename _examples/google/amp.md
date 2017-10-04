---
title: Amp integration
tag: Google
---

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/highlight.min.js"></script>

<script>hljs.initHighlightingOnLoad();</script>

## Links

Here is the Google guide to AMP

[![Link](https://placehold.it/50x50)](https://www.ampproject.org/docs/tutorials/create/basic_markup)


## Create Your AMP HTML Page

The following markup is a decent starting point or boilerplate. Copy this and save it to a file with a .html extension.

```html
<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>Hello, AMPs</title>
    <link rel="canonical" href="http://example.ampproject.org/article-metadata.html" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "Open-source framework for publishing content",
        "datePublished": "2015-10-07T12:02:41Z",
        "image": [
          "logo.jpg"
        ]
      }
    </script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  </head>
  <body>
    <h1>Welcome to the mobile web</h1>
  </body>
</html>
```

## Images

```html
<amp-img src="welcome.jpg" alt="Welcome" height="400" width="800"></amp-img>
```


## CSS

 Style elements using class or element selectors in an inline stylesheet in the `<head>`, called `<style amp-custom>`


````css

<style amp-custom>
/* any custom style goes here */
body {
background-color: white;
}
amp-img {
background-color: gray;
border: 1px solid black;
}
</style>

````

## Validate code

1. Open your page in your browser.
2. Add "#development=1" to the URL, for example, http://localhost:8000/released.amp.html#development=1.
3. Open the Chrome DevTools console and check for validation errors.
