---
tag: D3.js
---


<div id="d3">

</div>

<script src="https://d3js.org/d3.v4.min.js"></script>

<script>
//Make an SVG Container
 svgContainer = d3.select("#d3").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);

d3.select("#d3") .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter()
  .append("p")
  .text(function(d)
          { return "I'm number " + d + "!"; }
        );

// Update…
var p = d3.select("#d3")
          .selectAll("p")
          .data([1, 8, 15, 16, 23, 42])
          .transition()
          .delay(function(d,i){ return 100*i; })
          .duration(3000)
          // .attr("points", calculateChevron)
          .text(function(d)
            {
              return d;
            })

</script>
