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
    function(){
        $('#pro-pic').html("<img class= 'mx-auto' src='img/bear_1.jpg'>").delay(100);
        $('.pro-text').html("<h1>Welcome</h1> <h4>Please Explore!</h4>");
        $('#pro-btn').fadeIn(100);
    },
    function(){
        $('#pro-pic').html("<img class= 'mx-auto' src='img/bear_2.jpg'>").delay(100);
        $('.pro-text').html("<h1>Matt Basile</h1> <h4>Junior Front End Developer</h4>");
});

//$('#pro-pic').hover(
//    function(){
//        $('.pro-text').html("<h1>Welcome!</h1>");
//    },
//    function(){
//        $('.pro-text').html("<h1>Matt Basile</h1>
//            <h4>Junior Front End Developer</h4>"); 
//});