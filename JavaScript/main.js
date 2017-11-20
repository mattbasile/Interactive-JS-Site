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
