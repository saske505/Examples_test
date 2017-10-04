---
title: Form working examples
tag: cloudcannon
---

<div class="row">
  <div class="col-lg-6">

    <div class="card">
  <div class="card-header">
  Request a quote
  </div>
  <div class="card-block">
  <h4 class="card-title"></h4>
  <p class="card-text">Feel free to drop me your info and I will get back to you</p>
  </div>

<div class="card-block">

<div id="contact-form-message">

</div>

  <form action="?" method="post" id="contact-form">
    <div class="container">

      <div class="form-group row">
        <label for="first_name" class="col-2 col-form-label">First Name</label>
        <div class="col-10">
          <input type="text" class="form-control" id="first_name" name="first_name">
        </div>
      </div>
      <div class="form-group row">
        <label for="last_name" class="col-2 col-form-label">Last Name</label>
        <div class="col-10">
          <input type="text" class="form-control" id="last_name" name="last_name">
        </div>
      </div>
      <div class="form-group row">
        <label for="phone" class="col-2 col-form-label">Phone</label>
        <div class="col-10">
          <input type="text" class="form-control" id="phone" name="phone">
        </div>
      </div>

      <div class="form-group row">
        <label for="email" class="col-2 col-form-label">Email</label>
        <div class="col-10">
          <input type="text" class="form-control" id="email" name="email">
        </div>
      </div>

      <div class="form-group row">
        <label for="website" class="col-2 col-form-label">website</label>
        <div class="col-10">
          <input type="text" class="form-control" id="website" name="website">
        </div>
      </div>


      <div class="form-group row">
        <label for="website" class="col-2 col-form-label">Your Email Address</label>
        <div class="col-10">
          <input type="text" class="form-control" id="_replyto" name="_replyto">
        </div>
      </div>


      <input type="hidden" name="_to" value="wentzelheinrich@gmail.com">
      <input type="text" name="_gotcha" style="display: none;">


<div class="g-recaptcha" data-sitekey="6LeSZigUAAAAAIXibJHz0BQilNAAzDwoxRWxTav9"></div>

      <div class="form-group row">
        <div class="offset-xs-3 col-xs-9">
          <button type="submit" class="btn btn-default">Submit</button>
        </div>
      </div>
    </div>
  </form>

  </div>
  <div class="card-footer">
  Request a quote
  </div>
  </div>

  </div>
</div>


<script>
// Helper function to get form data in the supported format
function getFormDataString(formEl) {
  var formData = new FormData(formEl),
      data = [];

  for (var keyValue of formData) {
    data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
  }

  return data.join("&");
}

// Fetch the form element
var formEl = document.getElementById("contact-form");

// Override the submit event
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
console.log("prevented default");


if (typeof grecaptcha === "undefined") {
  console.log('no grep');
  $( ".growl" ).remove();
  $( "#contact-form-message" ).after( "<div class='growl growl-static'><div class='alert alert-danger alert-dismissable' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>×</span> </button>   <strong>Something is wrong!</strong> Please complete captcha first. </div>  </div> " );
}

  if (grecaptcha) {
    var recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) { // reCAPTCHA not clicked yet
      console.log("recapcha failed");
      return false;
    }
  }

  var request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    console.log("email sent");
    $( "#contact-form").fadeOut( "slow", function() {
    // Animation complete.
      $( "#contact-form-message" ).append( "<div class='growl growl-static'><div class='alert alert-success alert-dismissable' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>×</span> </button>   <strong>Well done!</strong> Your message has been sent. </div>  </div> " );
    });
    if (request.status === 302) { // CloudCannon redirects on success
      // It worked
    }
  });

  request.open(formEl.method, formEl.action);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(getFormDataString(formEl));
});

function onSubmit(token) {
        document.getElementById("contact-form").submit();
      }

</script>
