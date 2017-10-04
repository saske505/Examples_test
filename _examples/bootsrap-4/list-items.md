---
title: List items
tag: Bootstrap 4
---

## example 1

<div class="row">
  <div class="col-lg-3 col-md-3 col-sm-3">
    <div role="tablist" aria-multiselectable="true">
      <div class="card mb-4">
          <div class="list-group" id="side-nav">

            <a id="question_forloop_index" class="list-group-item justify-content-between pt-2 active"
              data-toggle="collapse"
              data-parent="#faq"
              href="#answer_forloop_index"
              aria-controls="answer_forloop_index"
              aria-expanded="true">
                  <h5> Category 1 </h5>
                  <span class=" badge-pill">10</span>
            </a>

              <div id="answer_forloop_index" class="collapse in show" role="tabcard" aria-labelledby="question_forloop_index}}">
                <div class="card pl-2 pr-2 pb-2 pt-2">
                <div class="list-group">
                        <a href="_sub.url_" class="list-group-item">
                          Post nr 1
                        </a>
                        <a href="_sub.url_" class="list-group-item">
                          Post nr 2
                        </a>
                        <a href="_sub.url_" class="list-group-item active">
                          Post nr 3
                        </a>
                        <a href="_sub.url_" class="list-group-item">
                          Post nr 4
                        </a>
                        <a href="_sub.url_" class="list-group-item">
                          Post nr 5
                        </a>
                </div>
                </div>
              </div>

              <a id="question_forloop_index" class="list-group-item justify-content-between pt-2"
                data-toggle="collapse"
                data-parent="#faq"
                href="#answer_forloop_index2"
                aria-controls="answer_forloop_index2"
                aria-expanded="false">
                    <h5> Category 2 </h5>
                    <span class=" badge-pill">3</span>
              </a>

              <div id="answer_forloop_index2" class="collapse" role="tabcard" aria-labelledby="question_forloop_index2">
                <div class="card pl-2 pr-2 pb-2 pt-2">
                <div class="list-group">
                        <a href="_sub.url_" class="list-group-item">
                          Post nr 6
                        </a>
                        <a href="_sub.url_" class="list-group-item">
                          Post nr 7
                        </a>
                        <a href="_sub.url_" class="list-group-item">
                          Post nr 8
                        </a>
                        <a href="_sub.url_" class="list-group-item">
                          Post nr 9
                        </a>
                        <a href="_sub.url_" class="list-group-item">
                          Post nr 10
                        </a>
                </div>
                </div>
              </div>

          </div>

    </div>
  </div>
</div>

</div>


<style>
#side-nav .list-group-item {
  padding-top: 0px;
  padding-bottom: 0px;
}

#side-nav .list-group-item:hover {
  background-color: #0061B8;
  color: white;

}

#side-nav .list-group a.active {
  text-decoration: underline;
  color: blue;
}

</style>

<script>

window.onload = function () {
$("a.list-group-item").click(function(){
    $(this).toggleClass("active");
    console.log("toggled");
});
}

</script>

<!-- ####################################################################### -->
<!-- Examnple 2 -->
<!-- ####################################################################### -->

## example 2

<div class="card">
  <div class="card-header pt-4">
    <h6>Recent posts <small>· <a href="/blog">View All</a></small></h6>
  </div>
    {% for post in site.posts %}
      {% unless post.path contains "_posts/front-page" %}
      <div class="card">
        <div class="list-group list-group-flush">
              <a href="{{ post.url }}" class="list-group-item list-group-item-action">
              <!-- <img src="{{ post.preview_image_path }}" class="img-fluid mr-4" > -->
              {{ post.title }}
              </a>
        </div>
      </div>
    {% endunless %}
  {% endfor %}
</div>
