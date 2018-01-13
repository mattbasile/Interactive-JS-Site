$('#quiz').quiz({
  resultsScreen: '#results-screen',
  counter: true,
  homeButton: '#custom-home',
  counterFormat: 'Question %current of %total',
  questions: [
    {
      'q': 'Which is not true?',
      'options': [
        'I\'m both an older and younger brother',
        'I have 10 cousins',
        'My family has a reunion every 5 years', 
      ],
      'correctIndex': 2,
      'correctResponse': 'Good job, that was obvious.',
      'incorrectResponse': 'Come on, that was the easy one!'
    },
    {
      'q': 'Which is not true?',
      'options': [
        'I was born in London',
        'I\’ve been to all 7 continents',
        'I\m a citizen of the United States'
      ],
      'correctIndex': 1,
      'correctResponse': 'Correct! I\'ve only been to 4!',
      'incorrectResponse': 'Sorry lad, maybe next time!'
    },
    {
      'q': 'Which is not true?',
      'options': [
        'I own a dog with a human\’s name',
        'I shared a fish with my roommate in college named Andre (after Andre 3000)',
        'I hate pets'
      ],
      'correctIndex': 2,
      'correctResponse': 'Who hates pets?',
      'incorrectResponse': 'I love to name my pets after people!'
    },
    {
      'q': 'Which is not true?',
      'options': [
        'I can do 200 pushups in 3 minutes',
        'I had 4 surgeries before the age of 18',
        'I\’m nearly blind without my glasses or contacts'
        
      ],
      'correctIndex': 0,
      'correctResponse': 'Maybe once upon a time...not any more',
      'incorrectResponse': 'They keep getting harder huh?'
    },
        {
      'q': 'Which is not true?',
      'options': [
        'My favorite food is Lobster',
        ' I love coffee, but I think it’s bad for my teeth and stomach.',
        'I used to eat ice cream everyday after school in middle school. '
      ],
      'correctIndex': 0,
      'correctResponse': 'They\'re kind of just big bugs, right?',
      'incorrectResponse': 'Close! But not really 😂 '
    },
  ]
});