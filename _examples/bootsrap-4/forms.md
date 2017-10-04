---
title: Forms
tag: Bootstrap 4
---

# A form

```
<form action="/html/tags/html_form_tag_action.cfm">
  <div class="container">
    <div class="form-group row">
      <label for="first_name" class="col-xs-3 col-form-label mr-4">First Name</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="first_name" name="first_name">
      </div>
    </div>
    <div class="form-group row">
      <label for="last_name" class="col-xs-3 col-form-label mr-4">Last Name</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="last_name" name="last_name">
      </div>
    </div>
    <div class="form-group row">
      <label for="phone" class="col-xs-3 col-form-label mr-4">Phone</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="phone" name="phone">
      </div>
    </div>

    <div class="form-group row">
      <label for="email" class="col-xs-3 col-form-label mr-4">Email</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="email" name="email">
      </div>
    </div>

    <div class="form-group row">
      <label for="website" class="col-xs-3 col-form-label mr-4">website</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="website" name="website">
      </div>
    </div>

    <div class="form-group row">
      <div class="offset-xs-3 col-xs-9">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </div>
  </div>
</form>
```

<form action="/html/tags/html_form_tag_action.cfm">
  <div class="container">
    <div class="form-group row">
      <label for="first_name" class="col-xs-3 col-form-label mr-4">First Name</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="first_name" name="first_name">
      </div>
    </div>
    <div class="form-group row">
      <label for="last_name" class="col-xs-3 col-form-label mr-4">Last Name</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="last_name" name="last_name">
      </div>
    </div>
    <div class="form-group row">
      <label for="phone" class="col-xs-3 col-form-label mr-4">Phone</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="phone" name="phone">
      </div>
    </div>

    <div class="form-group row">
      <label for="email" class="col-xs-3 col-form-label mr-4">Email</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="email" name="email">
      </div>
    </div>

    <div class="form-group row">
      <label for="website" class="col-xs-3 col-form-label mr-4">website</label>
      <div class="col-xs-9">
        <input type="text" class="form-control" id="website" name="website">
      </div>
    </div>

    <div class="form-group row">
      <div class="offset-xs-3 col-xs-9">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </div>
  </div>
</form>

---

# Column size

```
<div class="row">
<div class="col-5">
<input type="text" class="form-control" placeholder=".col-5">
</div>
<div class="col-3">
<input type="text" class="form-control" placeholder=".col-3">
</div>
</div>
```

<div class="row">
<div class="col-5">
<input type="text" class="form-control" placeholder=".col-5">
</div>
<div class="col-3">
<input type="text" class="form-control" placeholder=".col-3">
</div>
</div>

---

# Helper text

```
<label for="accountId">Account Id</label>
<input type="text" id="accountId" class="form-control" aria-describedby="helpAccountId">
<span id="helpAccountId" class="form-text text-muted">Your account ID is located at the top of your invoice.</span>
```

<label for="accountId">Account Id</label>
<input type="text" id="accountId" class="form-control" aria-describedby="helpAccountId">
<span id="helpAccountId" class="form-text text-muted">Your account ID is located at the top of your invoice.</span>

---

# Validation

```
<div class="form-group has-success">
<label class="col-form-label" for="username">Success</label>
<input type="text" class="form-control form-control-success" id="username" aria-describedby="usernameStatus">
<div class="form-control-feedback">Congratulations on your new username!</div>
</div>

<div class="form-group has-warning">
<label class="col-form-label" for="password">Warning</label>
<input type="password" class="form-control form-control-warning" id="password" aria-describedby="passwordStatus">
<div class="form-control-feedback">C'mon, you can do better than that username...</div>
</div>

<div class="form-group has-danger">
<label class="col-form-label" for="phone">Danger</label>
<input type="tel" class="form-control form-control-danger" id="phone" aria-describedby="phoneStatus">
<div class="form-control-feedback">That username's so bad, we can't accept it.</div>
</div>
```

<div class="form-group has-success">
<label class="col-form-label" for="username">Success</label>
<input type="text" class="form-control form-control-success" id="username" aria-describedby="usernameStatus">
<div class="form-control-feedback">Congratulations on your new username!</div>
</div>

<div class="form-group has-warning">
<label class="col-form-label" for="password">Warning</label>
<input type="password" class="form-control form-control-warning" id="password" aria-describedby="passwordStatus">
<div class="form-control-feedback">C'mon, you can do better than that username...</div>
</div>

<div class="form-group has-danger">
<label class="col-form-label" for="phone">Danger</label>
<input type="tel" class="form-control form-control-danger" id="phone" aria-describedby="phoneStatus">
<div class="form-control-feedback">That username's so bad, we can't accept it.</div>
</div>

---
