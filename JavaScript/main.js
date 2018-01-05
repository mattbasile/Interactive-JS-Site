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

//CAREER-MODALS
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});

//Quiz
// Array of all the questions and choices to populate the questions. This might be saved in some JSON file or a database and we would have to read the data in.
var all_questions = [{
  question_string: "I was born in this country:",
  choices: {
    correct: "England",
    wrong: ["United States", "Singapore"]
  }
}, {
  question_string: "I know all these coding languages:",
  choices: {
    correct: "C++",
    wrong: ["HTML", "SCSS", "JavaScript"]
  }
}, {
  question_string: "These have all been my pet's names",
  choices: {
    correct: "Rupert",
    wrong: ["Zeus", "Sophia", "Rocky"]
  }
}, {
  question_string: 'I have no food allergies',
  choices: {
    correct: "True",
    wrong: ["False"]
  }
}];

// An object for a Quiz, which will contain Question objects.
var Quiz = function(quiz_name) {
  // Private fields for an instance of a Quiz object.
  this.quiz_name = quiz_name;
  
  // This one will contain an array of Question objects in the order that the questions will be presented.
  this.questions = [];
}

// A function that you can enact on an instance of a quiz object. This function is called add_question() and takes in a Question object which it will add to the questions field.
Quiz.prototype.add_question = function(question) {
  // Randomly choose where to add question
  var index_to_add_question = Math.floor(Math.random() * this.questions.length);
  this.questions.splice(index_to_add_question, 0, question);
}

// A function that you can enact on an instance of a quiz object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the quiz in.
Quiz.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Hide the quiz results modal
  $('#quiz-results').hide();
  
  // Write the name of the quiz
//  $('#quiz-name').text(this.quiz_name);
  
  // Create a container for questions
  var question_container = $('<div>').attr('id', 'question').insertAfter('#quiz-name');
  
  // Helper function for changing the question and updating the buttons
  function change_question() {
    self.questions[current_question_index].render(question_container);
    $('#prev-question-button').prop('disabled', current_question_index === 0);
    $('#next-question-button').prop('disabled', current_question_index === self.questions.length - 1);
    
    // Determine if all questions have been answered
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  }
  
  // Render the first question
  var current_question_index = 0;
  change_question();
  
  // Add listener for the previous question button
  $('#prev-question-button').click(function() {
    if (current_question_index > 0) {
      current_question_index--;
      change_question();
    }
  });
  
  // Add listener for the next question button
  $('#next-question-button').click(function() {
    if (current_question_index < self.questions.length - 1) {
      current_question_index++;
      change_question();
    }
  });
  
  // Add listener for the submit answers button
  $('#submit-button').click(function() {
    // Determine how many questions the user got right
    var score = 0;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === self.questions[i].correct_choice_index) {
        score++;
      }
    }
    
    // Display the score with the appropriate message
    var percentage = score / self.questions.length;
    console.log(percentage);
    var message;
    if (percentage === 1) {
      message = 'Great job!'
    } else if (percentage >= .75) {
      message = 'You did alright.'
    } else if (percentage >= .5) {
      message = 'Better luck next time.'
    } else {
      message = 'Maybe you should try a little harder.'
    }
    $('#quiz-results-message').text(message);
    $('#quiz-results-score').html('You got <b>' + score + '/' + self.questions.length + '</b> questions correct.');
    $('#quiz-results').slideDown();
    $('#quiz button').slideUp();
  });
  
  // Add a listener on the questions container to listen for user select changes. This is for determining whether we can submit answers or not.
  question_container.bind('user-select-change', function() {
    var all_questions_answered = true;
    for (var i = 0; i < self.questions.length; i++) {
      if (self.questions[i].user_choice_index === null) {
        all_questions_answered = false;
        break;
      }
    }
    $('#submit-button').prop('disabled', !all_questions_answered);
  });
}

// An object for a Question, which contains the question, the correct choice, and wrong choices. This block is the constructor.
var Question = function(question_string, correct_choice, wrong_choices) {
  // Private fields for an instance of a Question object.
  this.question_string = question_string;
  this.choices = [];
  this.user_choice_index = null; // Index of the user's choice selection
  
  // Random assign the correct choice an index
  this.correct_choice_index = Math.floor(Math.random() * wrong_choices.length + 1);
  
  // Fill in this.choices with the choices
  var number_of_choices = wrong_choices.length + 1;
  for (var i = 0; i < number_of_choices; i++) {
    if (i === this.correct_choice_index) {
      this.choices[i] = correct_choice;
    } else {
      // Randomly pick a wrong choice to put in this index
      var wrong_choice_index = Math.floor(Math.random(0, wrong_choices.length));
      this.choices[i] = wrong_choices[wrong_choice_index];
      
      // Remove the wrong choice from the wrong choice array so that we don't pick it again
      wrong_choices.splice(wrong_choice_index, 1);
    }
  }
}

// A function that you can enact on an instance of a question object. This function is called render() and takes in a variable called the container, which is the <div> that I will render the question in. This question will "return" with the score when the question has been answered.
Question.prototype.render = function(container) {
  // For when we're out of scope
  var self = this;
  
  // Fill out the question label
  var question_string_h2;
  if (container.children('h2').length === 0) {
    question_string_h2 = $('<h2>').appendTo(container);
  } else {
    question_string_h2 = container.children('h2').first();
  }
  question_string_h2.text(this.question_string);
  
  // Clear any radio buttons and create new ones
  if (container.children('input[type=radio]').length > 0) {
    container.children('input[type=radio]').each(function() {
      var radio_button_id = $(this).attr('id');
      $(this).remove();
      container.children('label[for=' + radio_button_id + ']').remove();
    });
  }
  for (var i = 0; i < this.choices.length; i++) {
    // Create the radio button
    var choice_radio_button = $('<input>')
      .attr('id', 'choices-' + i)
      .attr('type', 'radio')
      .attr('name', 'choices')
      .attr('value', 'choices-' + i)
      .attr('checked', i === this.user_choice_index)
      .appendTo(container);
    
    // Create the label
    var choice_label = $('<label>')
      .text(this.choices[i])
      .attr('for', 'choices-' + i)
      .appendTo(container);
  }
  
  // Add a listener for the radio button to change which one the user has clicked on
  $('input[name=choices]').change(function(index) {
    var selected_radio_button_value = $('input[name=choices]:checked').val();
    
    // Change the user choice index
    self.user_choice_index = parseInt(selected_radio_button_value.substr(selected_radio_button_value.length - 1, 1));
    
    // Trigger a user-select-change
    container.trigger('user-select-change');
  });
}

// "Main method" which will create all the objects and render the Quiz.
$(document).ready(function() {
  // Create an instance of the Quiz object
  var quiz = new Quiz('My Quiz');
  
  // Create Question objects from all_questions and add them to the Quiz object
  for (var i = 0; i < all_questions.length; i++) {
    // Create a new Question object
    var question = new Question(all_questions[i].question_string, all_questions[i].choices.correct, all_questions[i].choices.wrong);
    
    // Add the question to the instance of the Quiz object that we created previously
    quiz.add_question(question);
  }
  
  // Render the quiz
  var quiz_container = $('#quiz');
  quiz.render(quiz_container);
});




