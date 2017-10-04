---
title: Add table class
tag: JS
---

# Add a table class to table elements

{% raw %}
~~~ js
<script>
console.log('test');

var b = document.getElementsByTagName("table");


for (i = 0; i < b.length; i++) {
    b[i].setAttribute("class", "table");
    console.log('loop');
}

</script>
~~~
{% endraw %}
