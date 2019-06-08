
$(document).ready(function () {


  // ===========GLOBAL VARIABLES==============

  // Create Array of objects that contain questions and answers
  var questions = [];
  //variable to track number of wrong answers
  var wrongAns;

  //Variable to track number of correct answers
  var rightAns;
  //variable to track number of unanswered questions
  var unAnswered;
  //Variable to 
  var timeRemaining;

  // create an array of objects for the questions and answers
  questions.push({ question: "this is the question at index 0", correctAnswer: true });
  questions.push({ question: "this is question at index 1", correctAnswer: false });
  questions.push({ question: "this is the quesiton at index 2", correctAnswer: true });
  questions.push({ question: "this is the quesiton at index 3", correctAnswer: false });

  // =============Set up Listeners==================
  // listener for the submit button-this will submit the page of questions
  
  //listener for start quiz
  
  // listens for the stop button to be clicked. This will stop the clock and call the evaluation funciton
   $("#stop").on("click", function results() {
  });

  // =========Functions==========  
    

 // function pageLoader();
  for (i = 0; i < questions.length; i++) {
    questions;
    // create a div with a class to hold the true false questions
    identifier = i;

    var newQuestion = $("<div id=clever>");
    var radioAnswerTrue = $(`<input class=true value=true name=identifier${i} type= radio >True<br>`);
    var radioAnswerFalse = $(`<input class=false value=false name=identifier${i} type= radio>False<br>`);

  // Put the divs and the radio buttons on the screen
  newQuestion.text(questions[i].question);
  newQuestion
  $("#questionBox").append(newQuestion);
  $("#questionBox").append(radioAnswerTrue);
  $("#questionBox").append(radioAnswerFalse);
}





  //  ============FUNCTIONS that need to be written==============

  // start game function-call necessary functions
    // when the start button is clicked, the pageLoader() and countDown() will be called

//function countdown()
      // use the span with #timer to attach the clock function
      // set a variable to hold the timeremaining
      //create a function that will decrement the timer by 1 every time it's called
      // create the timer face with starting time of 30 seconds
    
        // for (var i = 30; i > 0; i--) {
        //   countDown = i
        //   setTimeout(countdownTimer(i), 1000);
        //   //console.log(countDown);
      
        // }
    // function countdownTimer(countDown){
    //   $("#timer").text(`${countDown} seconds`);

    // }

    // Count down timer
      // Start on click.    

// function evaluateSubmission () will evaluate answers selected. This  function will call on the results() function
    //create listeners to know what has been selected.  


  // function results()  This function will create an array where the elements are the questions answered incorrectly. This function will also track the number of questions answered incorrectly

  // function submit() this funciton will be called when the submit button is clicked. The function will stop the timer, clear the screen and call a function that reports the results
 
 
  function results() {
    //will provide test results
       // clear the board of all the questions
       //create 4 divs for the following:
           //All Done!
           //Correct Answers:
           //Incorrect Answers:
           //Unanswered: 
           console.log(" The stop button has been clicked");








  





  
  }
   


});