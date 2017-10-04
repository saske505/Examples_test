---
title: Toc
tag: Bootstrap 4
layout: toc
toc: true
---

# bugs
Major | Numbers in front of heading breaks anchor.

# Step 1

Add this to Gemfile

~~~
gem 'jekyll-toc'
~~~

# Step 2

Add this to the _config.yml file

~~~
gems:
  - jekyll-toc
~~~

# Step 3

Add fontmatter to enable the toc

# Step 4

Add the js file. The code was removed from application.js to its own script.

~~~
\assets\js\custom\toc.js
~~~

Remove the duplicate js code from

~~~
\assets\js\application.js
~~~

# Step 5

Copy this file. Some changes where made to the original to fix padding-right issue

~~~
\_sass\custom\docs.scss
~~~

# Step 6

Create the layout to use

~~~
\_layouts\toc.html
~~~
