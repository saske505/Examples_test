---
title: Website developer's documentation
layout: default
---

<meta http-equiv="refresh" content="0; url=/map" />

# Readme

## Live version

http://spindrift-lily.cloudvent.net/examples

## Currently working on map experiment

[View documentation](/examples/maps/maps-documentation/)

[View example](/examples/maps/maps-example/)

[View json data](/json/maps.json)

## Buttons with toggle

<form class="container">
  <div class="row">
    <div class="col-sm-4 col-xs-12">
      <p class="font-weight-bold">Year</p>
      <div data-toggle="buttons">
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="oil" checked autocomplete="off"> 2017
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="coolant" checked autocomplete="off"> 2016
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="breakfluid" checked autocomplete="off"> 2015
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="screenwash" checked autocomplete="off"> 2014
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="leaks" checked autocomplete="off"> 2013
        </label>
      </div>
    </div>
    <div class="col-sm-4 col-xs-12">
      <p class="font-weight-bold">Type</p>
      <div data-toggle="buttons">
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="tyres" checked autocomplete="off"> Assualt
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="wiperblades" checked autocomplete="off"> Murder
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="lights" checked autocomplete="off"> Theft
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="indicators" checked autocomplete="off"> Something
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="cleanliness" checked autocomplete="off"> Something else
        </label>
      </div>
    </div>

    <div class="col-sm-4 col-xs-12">
      <p class="font-weight-bold">Specifics</p>
      <div data-toggle="buttons">
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="horn" checked autocomplete="off"> Male
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="breaks" checked autocomplete="off"> Female
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="seatbelt" checked autocomplete="off"> 20 - 30 Years
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="windscreen" checked autocomplete="off"> Gauteng
        </label>
        <label class="btn btn-block btn-success active">
          <input type="checkbox" name="cleanliness" checked autocomplete="off"> Conviction
        </label>
      </div>
    </div>
    <div class="col-sm-12 text-right">
      <button class="btn btn-lg" type="submit">Submit</button>
      <div id="formValues"></div>
    </div>

  </div>
</form>


<script>
$('[data-toggle="buttons"] .btn').on('click', function () {
    // toggle style
    $(this).toggleClass('btn-success btn-danger active');
});
</script>
