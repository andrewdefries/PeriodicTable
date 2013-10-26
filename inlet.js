/*
	tributary google groups for this experiment
    http://bit.ly/X9ploB (further iterations)
    ...it has grown a lot since this early milestone (0)
*/


var svg = d3.select("svg");
var data;

var clist = new Object();
clist.Hydrogen = "#EA3445"
clist.Noble_gas = "#7BC9F0"
clist.Alkali_metals = "#F88437"
clist.Alkaline_earth_metals = "#0FD3BB"
clist.Semiconductors = "#B9C5B9"
clist.Other_nonmetals = "#5EA4C7"
clist.Halogens = "#CB71FD"
clist.Other_metals = "#09C4E7"
clist.Transition_metals = "#A6BCC4"
clist.Transition_metals2 = "#C4D6BA"
clist.vague = "#9B9B9B"

// deeper element json at 
// https://gist.github.com/4356217 
// traced from: http://www.pnathan.com/elements.json
// minor modifications included.

/*
d3.csv("data/periodictabledump3.csv", function(csv){
  data = csv;
  main(data);
});
*/

var data = tributary.periodictabledump3
main(data)

function get_location(d){
    var x = 20 + (48 * parseInt(d.group));
    var y = 20 + (48 * parseInt(d.row));
    return "translate(" + [x, y] + ")";
}

function main(data){

	var group1 = svg.append("g").classed("group1", true)

	var blocks = group1.selectAll("g").data(data)
		.enter()
		.append("g")
		.attr("transform", function(d,i){ return get_location(d)})

	var rects = blocks.append("rect")
        .attr({
            "x": 0,
            "y": 0,
            "width": 45,
            "height": 45,
            "rx": 5, 
            "ry": 5
        })
		.style("fill", function(d,i){return clist[d.named_type]})
	
	var text_content = blocks.append("text")
		.attr({x:3, y:14})
    	.style({
            "fill": "#232323",
            "stroke-width": 0 + "px",
            "font-size": 1.2 + "em",
            "text-anchor": "right",
            "alignment-baseline": "middle",
            "font-family": "sans-serif"
        })	
		.text(function(d,i){return d.Symbol})
}
