//
//
//$('.a')
// .mouseover(function(){
//    $(this).html()toggle(1000);
//}) 
// .mouseout(function(){
//    $(this).toggle(500);
//});

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

//$('#pro-pic').hover(
//    function(){
//        $('.pro-text').html("<h1>Welcome!</h1>");
//    },
//    function(){
//        $('.pro-text').html("<h1>Matt Basile</h1>
//            <h4>Junior Front End Developer</h4>"); 
//});


//ANIMISTION 

////Chart
//var ctxD = document.getElementById("doughnutChart").getContext('2d');
//var myLineChart = new Chart(ctxD, {
//    type: 'doughnut',
//    data: {
//        labels: ["FX Research", "Front End Development", "Working Out", "Reading", "Self Torture", "Fantasy Football"],
//        datasets: [
//            {
//                data: [30, 30, 15, 15, 5, 5],
//                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "purple"],
//                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774", "green"]
//            }
//        ]
//    },
//    options: {
//        responsive: true
//    }    
//});

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
  // trigger layout
  $grid.masonry();
    
});

$grid.on( 'layoutComplete', function( event, laidOutItems ) {
  console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
     
});
