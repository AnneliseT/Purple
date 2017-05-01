// margin
var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = 500 - margin.right - margin.left,
    height = 500 - margin.top - margin.bottom,
    radius = width/2;

// color range
var color = d3.scaleOrdinal()
    .range(["#ab8ff9", "#9f53ef", "#8120e8", "#5c0fad", "#3e0a75", "#2c0754"]);
    // .style("fill", function(d,i) { return 'rgb(128 , 20, ' + ((i * 15) + 100) + ')'});

// pie chart arc.
var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

// arc for the labels position
var labelArc = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

// generate pie chart
var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d.value; });

// define the svg for pie chart
var svg = d3.select("body").select("div.col-9")
.append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// import data
d3.csv("DataSample.csv", function(error, data) {
  if (error) throw error;

    // parse data
    data.forEach(function(d) {
        d.value = +d.value;
        d.category = d.category;
    })


    // // sort the price values
    // data.sort(function(a,b) {
    //   return b.value - a.value;
    // });

  var g = svg.selectAll(".arc")
      .data(pie(data))
     .enter().append("g")
      .attr("class", "arc");



  // append path
  g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.data.category); })
    // transition
    .transition()
      .ease(d3.easeLinear)
      .duration(500)
      .attrTween("d", tweenPie);


  // append text
  g.append("text")
    .transition()
      .ease(d3.easeLinear)
      .duration(500)
      .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
      .attr("dy", "2em")
      .text(function(d) {
        return d.data.category + "  "+d.data.value ;
       });
      });

// Helper function for animation of pie chart
function tweenPie(b) {
  b.innerRadius = 0;
  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
  return function(t) { return arc(i(t)); };
}
