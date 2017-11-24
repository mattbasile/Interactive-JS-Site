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
