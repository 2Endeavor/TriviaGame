
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
  var timeRemaining;

  // create an array of objects for the questions and answers
  questions.push({ question: "this is test 0", correctAnswer: true })
  questions.push({ question: "this is a test1", correctAnswer: false })
  questions.push({ question: "this is a test 2", correctAnswer: true })
  questions.push({ question: "this is a test 3", correctAnswer: false })

  // =============Set up Listeners==================
  // listener for the submit button-this will submit the page of questions
  //listener for start quiz

  // =========Function to load the questions==========  

  // function pageLoader();
  $("#start").on("click", function () {
    console.log("I've been clicked :/");
  });

  for (i = 0; i < questions.length; i++) {
    questions
    // create a div with a class to hold the true false questions
    identifier = i;

    var newQuestion = $("<div id=clever>");
    var radioAnswerTrue = $(`<input class=true value=true name=identifier${i} type= radio >True<br>`);
    var radioAnswerFalse = $(`<input class=false value=false name=identifier${i} type= radio>False<br>`);
    console.log(radioAnswerFalse.val());



    // Put the divs and the radio buttons on the screen
    newQuestion.text(questions[i].question);
    newQuestion
    $("#questionBox").append(newQuestion);
    $("#questionBox").append(radioAnswerTrue);
    $("#questionBox").append(radioAnswerFalse);
  }






  //  ============FUNCTIONS==============

  // Create a submit button that will stop the timer and evaluate the answers

  // TextUpdate calls all the functions that update the screen when variables change

  // start game function-call necessary functions
  // pageLoader();
  // listens for the button to be clicked
  $("#stop").on("click", function () {
    console.log("I've been clicked :/");
    $("#questionBox").empty();
      //clear the screen
      //Tell the student their score

  });







//create listeners to know what has been selected.
// function evaluateSubmission ()
//var selectedAnswer


  // Count down timer
  // Start on click.


  //  function countdown()


  //Function to evaluate if answer provided is correct
    // comparet the correct answer to the answer provided
    // if answer is correct increment correctanswer counter
    // if answer is wrong, increment wrong answer counter

    // Add boot strap progress bar

  // Function to provide test results
    // clear the board of all the questions
    //create 4 divs for the following:
        //All Done!
        //Correct Answers:
        //Incorrect Answers:
        //Unanswered: 





});