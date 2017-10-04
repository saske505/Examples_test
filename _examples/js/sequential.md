---
title: Sequential reveal
tag: JS
---

<ul class="list-group">
    <li class="list-group-item"><a  href="home">Home</a></li>
    <li class="list-group-item"><a  href="links">Links</a></li>
    <li class="list-group-item"><a  href="contact">Contact</a></li>
    <li class="list-group-item"><a  href="home">Home</a></li>
    <li class="list-group-item"><a  href="links">Links</a></li>
    <li class="list-group-item"><a  href="contact">Contact</a></li>
    <li class="list-group-item"><a  href="home">Home</a></li>
    <li class="list-group-item"><a  href="links">Links</a></li>
    <li class="list-group-item"><a  href="contact">Contact</a></li>
    <li class="list-group-item"><a  href="home">Home</a></li>
    <li class="list-group-item"><a  href="links">Links</a></li>
    <li class="list-group-item"><a  href="contact">Contact</a></li>
    <li class="list-group-item"><a  href="home">Home</a></li>
    <li class="list-group-item"><a  href="links">Links</a></li>
    <li class="list-group-item"><a  href="contact">Contact</a></li>
    <li class="list-group-item"><a  href="home">Home</a></li>
    <li class="list-group-item"><a  href="links">Links</a></li>
    <li class="list-group-item"><a  href="contact">Contact</a></li>
    <li class="list-group-item"><a  href="home">Home</a></li>
    <li class="list-group-item"><a  href="links">Links</a></li>
    <li class="list-group-item"><a  href="contact">Contact</a></li>
    <li class="list-group-item"><a  href="home">Home</a></li>
    <li class="list-group-item"><a  href="links">Links</a></li>
    <li class="list-group-item"><a  href="contact">Contact</a></li>
</ul>

<style>
  #page-content .list-group-item {
    opacity : 0;
  }
</style>

<script>
window.onload = $(function() {
      $("#page-content .list-group-item").each(function(index, item) {
          setTimeout(function() {
              $(item).animate({top: '-10', opacity: '1'}, 500);
          }, index*175);
      });
  });

</script>
