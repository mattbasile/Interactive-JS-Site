//HOME PAGE
var navLinks = {
    home: {
        img: '/img/bear_1.jpg',
        content:'Come on Home!' 
    },
    career: {
        img: '/img/GRIZZLY_GOD.png',
        content: "I'm a great Employee!"
    },
    about: {
        img: '/img/Bearstack.png',
        content: "Get to know me!"
    },
    interests: {
        img: '/img/panda_1.jpg',
        content: "Do we like the same things?"
    },
    contact: {
        img: '/img/Pand-kun.png',
        content: "Call me beep me, if you want to Reach me!"
    }
}; 

$('.nav-link').hover(
     function(){
        var key = $(this).text().toLowerCase();
        var link = navLinks[key];
        console.log(key);
        $('#pro-pic img').attr('src', link.img);
        $('#js-nav-text').text(link.content);
     },
     function(){
         $('#pro-pic img').attr('src', '/img/bear_2.jpg');
         $('#js-nav-text').text('Junior Front End Developer');
     }
);

//ANIMISTION 

//
////Grid
//$('.grid').masonry({
//  // set itemSelector so .grid-sizer is not used in layout
//  itemSelector: '.grid-item',
//  // use element for option
//  columnWidth: '.grid-sizer',
//  percentPosition: true,
//
//})
//// external JS: masonry.pkgd.js
//
//var $grid = $('.grid').masonry({
//  itemSelector: '.grid-item',
//  columnWidth: 160
//});
//
//$grid.on( 'click', '.grid-item', function() {
//  // change size of item via class
//  $( this ).toggleClass('grid-item--gigante');
//    $(this).siblings().toggleClass("no-tile");
//    $(".display-none").toggleClass('tile-text');
//    
//  // trigger layout
//  $grid.masonry();
// 
//});
//
//$grid.on( 'layoutComplete', function( event, laidOutItems ) {
//  console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
//     
//});
//
//$grid.on('click', '.fe-tile', ( function () {
//        $('.current-image').attr("src", "img/bear_1.jpg");
//        
//    }));
//$grid.on('click', '.fx-tile', ( function () {
//        $('.current-image').attr("src", "img/Grizzle-kun.png");
//     $(".d-none").toggleClass('.tile-text');
//    }));
//$grid.on('click', '.wo-tile', ( function () {
//        $('.current-image').attr("src", "img/Ice_bear.png");
//    }));
//$grid.on('click', '.ff-tile', ( function () {
//        $('.current-image').attr("src", "img/bear_2.jpg");
//    }));
//$grid.on('click', '.read-tile', ( function () {
//        $('.current-image').attr("src", "img/GRIZZLY_GOD.png");
//    }));
//$grid.on('click', '.soc-tile', ( function () {
//        $('.current-image').attr("src", "img/Ice_bear.png");
//    }));
//$grid.on('click', '.dog-tile', ( function () {
//        $('.current-image').attr("src", "img/panda_1.jpg");
//    }));
//$grid.on('click', '.st-tile', ( function () {
//        $('.current-image').attr("src", "img/Pand-kun.png");
//    }));
////
////if(onclick === even)



////Contact
//$(document).ready(function(){ 
//    $('#characterLeft').text('140 characters left');
//    $('#message').keydown(function () {
//        var max = 140;
//        var len = $(this).val().length;
//        if (len >= max) {
//            $('#characterLeft').text('You have reached the limit');
//            $('#characterLeft').addClass('red');
//            $('#btnSubmit').addClass('disabled');            
//        } 
//        else {
//            var ch = max - len;
//            $('#characterLeft').text(ch + ' characters left');
//            $('#btnSubmit').removeClass('disabled');
//            $('#characterLeft').removeClass('red');            
//        }
//    });    
//});

//Interests
$(document).ready(function(){
   console.log("Ready To Rock");   
});

var interestsContent = {
    frontend: {
        img: '/icons/Front-End-Icon-256.png',
        h1:'Front End Development',
        p: "In my freetime I'm a self taught developer. My primary training has come through Treehouse learning online, but I love to create sites on my own and team up with my Brother to create our web series focused on front end development"
    },
    exercise: {
        img: '/icons/Front-End-Icon-256.png',
        h1:'Exercise',
        p: "In my freetime I'm a self taught developer. My primary training has come through Treehouse learning online, but I love to create sites on my own and team up with my Brother to create our web series focused on front end development"
    },
    reading: {
        img: '/icons/Front-End-Icon-256.png',
        h1:'Reading',
        p: "In my freetime I'm a self taught developer. My primary training has come through Treehouse learning online, but I love to create sites on my own and team up with my Brother to create our web series focused on front end development"
    },
    nysports: {
        img: '/icons/Front-End-Icon-256.png',
        h1:'New York Sports Fan',
        p: "In my freetime I'm a self taught developer. My primary training has come through Treehouse learning online, but I love to create sites on my own and team up with my Brother to create our web series focused on front end development"
    },
    cooking: {
        img: '/icons/Front-End-Icon-256.png',
        h1:'Cooking',
        p: "In my freetime I'm a self taught developer. My primary training has come through Treehouse learning online, but I love to create sites on my own and team up with my Brother to create our web series focused on front end development"
    },
     sociology: {
        img: '/icons/Front-End-Icon-256.png',
        h1:'Sociology',
        p: "In my freetime I'm a self taught developer. My primary training has come through Treehouse learning online, but I love to create sites on my own and team up with my Brother to create our web series focused on front end development"
    },
     fishing: {
        img: '/icons/Front-End-Icon-256.png',
        h1:'Fishing',
        p: "In my freetime I'm a self taught developer. My primary training has come through Treehouse learning online, but I love to create sites on my own and team up with my Brother to create our web series focused on front end development"
    },
     vidPro: {
        img: '/icons/Front-End-Icon-256.png',
        h1:'Video Production',
        p: "In my freetime I'm a self taught developer. My primary training has come through Treehouse learning online, but I love to create sites on my own and team up with my Brother to create our web series focused on front end development"
    },
     fantasyFootball: {
        img: '/icons/Front-End-Icon-256.png',
        h1:'Fantasy Football',
        p: "In my freetime I'm a self taught developer. My primary training has come through Treehouse learning online, but I love to create sites on my own and team up with my Brother to create our web series focused on front end development"
    }
}; 


 $('.click-icon').on('click', function(){
     var key = this.id;
     var link = interestsContent[key];
     console.log(link);
     $('.icon-container img').not(this).fadeOut();
     
     $(this).parent().removeClass('col-4').addClass('col-12').addClass('clicked');
     $(this).addClass('mx-auto').toggleClass('animation-wiggle');
     $("<h1 id='interests-header' class='text-center mx-2'></h1>").appendTo("body");
     $('#interests-header').text(link.h1);
     $("<p id='interests-text'class='text-center mx-auto'></p>").appendTo("body");
     $('#interests-text').text(link.p);
     $("<button type='button' id='exit' class='btn btn-danger mx-auto d-block my-5'>Exit</button>").appendTo("body");
     $('#exit').click(function(){
    window.location="/interest.html"; 
     $(document).ready().fadeIn('.click-icon');
     $(document).ready(function () {
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#middle').offset().top
    }, 'slow');
});
     });     
    
 });


//ABOUT
//SKILLS BARS
$('.skillbar').each(function(){
	$(this).find('.skillbar-bar').animate({
		width:$(this).attr('data-percent')
	},6000);
});