---
title: Grid system
tag: Bootstrap 4
---

# The grid system

Grid systems enable you to create advanced layouts using rows and columns. The Bootstrap grid system can have up to 12 columns, and you can specify how these columns scale for different viewport sizes.

Here's an example of a Bootstrap grid:

The numbers at the end of each class name represent the number of columns that the column spans. So .col-sm-1 spans one column and .col-sm-8 spans eight. The sm means that the colspan applies to small devices and everything above. You can also use md, lg, and xl for medium, large, and extra large.

Extra small devices are catered for by omitting the middle abbreviation. For example .col-8 spans eight columns on extra small devices and up (in other words, all devices).

Here's the code for the above grid:

<!-- Styles (so that we can see the grid) -->
<style>
.bs-example  div[class^="col"] {
	border: 1px solid white;
	background: #f5f5f5;
	text-align: center;
	padding-top: 8px;
	padding-bottom: 8px;
	}
</style>

<div class="bs-example">
	<!-- Bootstrap Grid -->

	<div class="row">
	  <div class="col-sm-3">.col-sm-3</div>
	  <div class="col-sm-6">.col-sm-6</div>
	  <div class="col-sm-3">.col-sm-3</div>
	</div>



	<div class="row">
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	  <div class="col-sm-1">.col-sm-1</div>
	</div>
	<div class="row">
	  <div class="col-sm-2">.col-sm-2</div>
	  <div class="col-sm-3">.col-sm-3</div>
	  <div class="col-sm-7">.col-sm-7</div>
	</div>
	<div class="row">
	  <div class="col-sm-4">.col-sm-4</div>
	  <div class="col-sm-4">.col-sm-4</div>
	  <div class="col-sm-4">.col-sm-4</div>
	</div>
	<div class="row">
	  <div class="col-sm-5">.col-sm-5</div>
	  <div class="col-sm-7">.col-sm-7</div>
	</div>
	<div class="row">
	  <div class="col-sm-6">.col-sm-6</div>
	  <div class="col-sm-6">.col-sm-6</div>
	</div>
	<div class="row">
	  <div class="col-sm-12">.col-sm-12</div>
	</div>
</div>

---

# Stacked to Horizontal

The following example uses the same markup, but this time we use md for "medium". This means that, if the viewport is smaller than "medium" (i.e. less than 768 pixels), the cells in the grid will be stacked on top of each other, and each cell will take up the full width.

If you are viewing this on a wide screen, this example might not look any different to the previous one. However, if you resize your browser down, the cells will eventually shift into the stacked position (and the previous example will remain intact).

```
<!-- Styles (so that we can see the grid) -->
<style>
.bs-example  div[class^="col"] {
	border: 1px solid white;
	background: #f5f5f5;
	text-align: center;
	padding-top: 8px;
	padding-bottom: 8px;
	}
</style>
<div class="bs-example">
	<!-- Bootstrap Grid -->
	<div class="row">
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	</div>
	<div class="row">
	  <div class="col-md-2">.col-md-2</div>
	  <div class="col-md-3">.col-md-3</div>
	  <div class="col-md-7">.col-md-7</div>
	</div>
	<div class="row">
	  <div class="col-md-4">.col-md-4</div>
	  <div class="col-md-4">.col-md-4</div>
	  <div class="col-md-4">.col-md-4</div>
	</div>
	<div class="row">
	  <div class="col-md-5">.col-md-5</div>
	  <div class="col-md-7">.col-md-7</div>
	</div>
	<div class="row">
	  <div class="col-md-6">.col-md-6</div>
	  <div class="col-md-6">.col-md-6</div>
	</div>
	<div class="row">
	  <div class="col-md-12">.col-md-12</div>
	</div>
</div>
```

<!-- Styles (so that we can see the grid) -->
<style>
.bs-example  div[class^="col"] {
	border: 1px solid white;
	background: #f5f5f5;
	text-align: center;
	padding-top: 8px;
	padding-bottom: 8px;
	}
</style>
<div class="bs-example">
	<!-- Bootstrap Grid -->
	<div class="row">
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	  <div class="col-md-1">.col-md-1</div>
	</div>
	<div class="row">
	  <div class="col-md-2">.col-md-2</div>
	  <div class="col-md-3">.col-md-3</div>
	  <div class="col-md-7">.col-md-7</div>
	</div>
	<div class="row">
	  <div class="col-md-4">.col-md-4</div>
	  <div class="col-md-4">.col-md-4</div>
	  <div class="col-md-4">.col-md-4</div>
	</div>
	<div class="row">
	  <div class="col-md-5">.col-md-5</div>
	  <div class="col-md-7">.col-md-7</div>
	</div>
	<div class="row">
	  <div class="col-md-6">.col-md-6</div>
	  <div class="col-md-6">.col-md-6</div>
	</div>
	<div class="row">
	  <div class="col-md-12">.col-md-12</div>
	</div>
</div>
