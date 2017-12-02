//HOME PAGE
$('#pro-pic img').hover(
    function () {
        $(this).attr("src", "img/bear_1.jpg");
        $('.pro-text').html("<h1 class= 'pt-2'>Welcome</h1> <h4>Please Explore!</h4>");
        $('#pro-btn').fadeIn(100);
    },
    function () {
        $(this).attr("src", "img/bear_2.jpg");
        $('.pro-text').html("<h1 class= 'pt-2'>Matt Basile</h1> <h4>Junior Front End Developer</h4>");
});



//ANIMISTION 


//Grid
$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true,

})
// external JS: masonry.pkgd.js

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 160
});

$grid.on( 'click', '.grid-item', function() {
  // change size of item via class
  $( this ).toggleClass('grid-item--gigante');
    $(this).siblings().toggleClass("no-tile");
    $(".display-none").toggleClass('tile-text');
    
  // trigger layout
  $grid.masonry();
 
});

$grid.on( 'layoutComplete', function( event, laidOutItems ) {
  console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
     
});

$grid.on('click', '.fe-tile', ( function () {
        $('.current-image').attr("src", "img/bear_1.jpg");
        
    }));
$grid.on('click', '.fx-tile', ( function () {
        $('.current-image').attr("src", "img/Grizzle-kun.png");
     $(".d-none").toggleClass('.tile-text');
    }));
$grid.on('click', '.wo-tile', ( function () {
        $('.current-image').attr("src", "img/Ice_bear.png");
    }));
$grid.on('click', '.ff-tile', ( function () {
        $('.current-image').attr("src", "img/bear_2.jpg");
    }));
$grid.on('click', '.read-tile', ( function () {
        $('.current-image').attr("src", "img/GRIZZLY_GOD.png");
    }));
$grid.on('click', '.soc-tile', ( function () {
        $('.current-image').attr("src", "img/Ice_bear.png");
    }));
$grid.on('click', '.dog-tile', ( function () {
        $('.current-image').attr("src", "img/panda_1.jpg");
    }));
$grid.on('click', '.st-tile', ( function () {
        $('.current-image').attr("src", "img/Pand-kun.png");
    }));
//
//if(onclick === even)


//Chart
// Seed data to populate the donut pie chart
var seedData = [{
  "label": "React",
  "value": 25,
  "link": "https://facebook.github.io/react/"
}, {
  "label": "Redux",
  "value": 25,
  "link": "https://redux.js.org/"
}, {
  "label": "Vue.js",
  "value": 25,
  "link": "https://vuejs.org/"
}, {
  "label": "AngularJS",
  "value": 25,
  "link": "https://angularjs.org/"
}, {
  "label": "Meteor",
  "value": 25,
  "link": "https://meteorhacks.com/meteor-js-web-framework-for-everyone"
}, {
  "label": "Node.js",
  "value": 25,
  "link": "https://nodejs.org/"
}];

// Define size & radius of donut pie chart
var width = 450,
    height = 450,
    radius = Math.min(width, height) / 2;

// Define arc colours
var colour = d3.scaleOrdinal(d3.schemeCategory20);

// Define arc ranges
var arcText = d3.scaleOrdinal()
  .range([0, width]);

// Determine size of arcs
var arc = d3.arc()
  .innerRadius(radius - 130)
  .outerRadius(radius - 10);

// Create the donut pie chart layout
var pie = d3.pie()
  .value(function (d) { return d["value"]; })
  .sort(null);

// Append SVG attributes and append g to the SVG
var svg = d3.select("#donut-chart")
  .attr("width", width)
  .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

// Define inner circle
svg.append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 100)
  .attr("fill", "#fff") ;

// Calculate SVG paths and fill in the colours
var g = svg.selectAll(".arc")
  .data(pie(seedData))
  .enter().append("g")
  .attr("class", "arc")
		
  // Make each arc clickable 
  .on("click", function(d, i) {
    window.location = seedData[i].link;
  });

	// Append the path to each g
	g.append("path")
  	.attr("d", arc)
  	.attr("fill", function(d, i) {
    	return colour(i);
  	});

	// Append text labels to each arc
	g.append("text")
  	.attr("transform", function(d) {
    	return "translate(" + arc.centroid(d) + ")";
  	})
  	.attr("dy", ".35em")
  	.style("text-anchor", "middle")
  	.attr("fill", "#fff")
		.text(function(d,i) { return seedData[i].label; })
  
g.selectAll(".arc text").call(wrap, arcText.range([0, width]));

// Append text to the inner circle
svg.append("text")
  .attr("dy", "-0.5em")
  .style("text-anchor", "middle")
  .attr("class", "inner-circle")
  .attr("fill", "#36454f")
  .text(function(d) { return 'JavaScript'; });

svg.append("text")
  .attr("dy", "1.0em")
  .style("text-anchor", "middle")
  .attr("class", "inner-circle")
  .attr("fill", "#36454f")
  .text(function(d) { return 'is lots of fun!'; });

// Wrap function to handle labels with longer text
function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    console.log("tspan: " + tspan);
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > 90) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}
