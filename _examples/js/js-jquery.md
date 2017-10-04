---
title: JS and Jquery scripts
tag: JS
---

Fadein a element

~~~ javascript
window.onload = function(){
  $("#page-title").fadeIn()
}
~~~

Display a message with growl
~~~ javascript
$( ".growl" ).remove();
$( "#contact-form-message" ).after( "<div class='growl growl-static'><div class='alert alert-danger alert-dismissable' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>×</span> </button>   <strong>Something is wrong!</strong> Please complete captcha first. </div>  </div> " );
~~~
