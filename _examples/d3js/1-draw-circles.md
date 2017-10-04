---
tag: D3.js
---

~~~ javascript
// Create container
var svgContainer = d3.select("body")
                     .append("svg")
                     .attr("width", 200)
                     .attr("height", 200);

// Put something in the container
var svgShapes = svgContainer.append("circle")
                            .attr("cx", 30)
                            .attr("cy", 30)
                            .attr("r", 20)
                            .style("color", "red");


~~~
