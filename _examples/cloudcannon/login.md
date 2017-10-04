---
title: Login links for cloudcannon
tag: Cloudcannon
---

# CloudCannon login and edit

Add a login button that shows logout also

### html
~~~html
<a href="/update" class="btn btn-default cms-login">login<a>
<a href="/logout" class="btn btn-danger cms-logout hidden">logout<a>
~~~

### js
~~~js
if (window.location.host === "app.cloudcannon.com") {
  console.log("Inside CloudCannon!");
  $( ".cms-login" ).addClass( "hidden" );
  $( ".cms-logout" ).removeClass( "hidden" );
} else {
  console.log("Not in CloudCannon.");
}
~~~

### css
~~~css
.hidden {
  display: none;
}
~~~



# Link directly

~~~html
<a href="cloudcannon:collections/_staff/">Edit all staff</a>
<a href="cloudcannon:collections/_staff/jane-doe.md">Edit Jane Doe</a>
<a href="cloudcannon:collections/_posts/2015-07-30-welcome-post.md">Edit Welcome Post</a>
<a href="cloudcannon:status">Link to Site Status and Recent Activity</a>
~~~

# List posts and add edit links

~~~java
<ul class="blog-posts">
   for post in site.posts
    <li class="blog-post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url }}">Read more</a>

      <!-- Editor Link -->
      <a href="cloudcannon:collections/{{ post.path }}" class="editor-link">Edit post</a>
    </li>
   endfor
</ul>
~~~

# Edit link on a collection item page

~~~html
<a href="cloudcannon:collections/{{ page.relative_path }}" class="editor-link">Edit</a>
~~~
