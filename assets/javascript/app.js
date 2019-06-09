// i got lost and i just had to start a new file and copy paste it all in to make sense of where i was wrong

$(document).ready(function () {
    // variables 
    var questions = [];
    var timeRemaining = 30;
    
    // this is the result of the "setInterval" function. We need this number to stop the interval when the game is done
    var intervalId;

    // functions

    // This creates the questiosn that the user will answer
    function populateQuestionArray() {
        questions.push({ question: "Admiral Hopper was adverse to change?", correctAnswer: false });
        questions.push({ question: 'The first computer "bug" was a moth that kept the code from running?', correctAnswer: true });
        questions.push({ question: "The person who wrote COBAL has a US Navy ship named for them?", correctAnswer: true });
        questions.push({ question: "Admiral Hopper was the grandfather of computer programing?", correctAnswer: false });
        questions.push({ question: 'Eleven inches wire representes  the distance a signal travels in one nanosecond?', correctAnswer: true });
    }

    // Based on the question array this will create some html elements on the page
    function createQuestionElements() {
        for (i = 0; i < questions.length; i++) {
            // create a div with a class to hold the true false questions
            var newQuestion = $(`<div id="question-${i}">`);

            var radioAnswerTrue = $(`<input class=true value=true id="${i}-true" name="${i}" type= radio >True<br>`);
            var radioAnswerFalse = $(`<input class=false value=false id="${i}-false" name="${i}" type= radio>False<br>`);

            // Put the divs and the radio buttons on the screen
            newQuestion.text(questions[i].question);
            $("#questionBox").append(newQuestion);          
            $("#questionBox").append(radioAnswerTrue);
            $("#questionBox").append(radioAnswerFalse);

            $(`#${i}-true`).on('click', function(event) {
                handleItemClick(event.currentTarget.id, true);
            });

            $(`#${i}-false`).on('click', function(event) {
                handleItemClick(event.currentTarget.id, false);
            });
        }
    }

    function handleItemClick(htmlElementId, wordInButtonTheyClickOn) {
        // id looks like: 0-true or 0-false
        var index = parseInt(htmlElementId);
        // get the question from the questions array,
        var currentQuestion = questions[index];
        // compare that answer with the value they provided (wordInButtonTheyClickOn)
        if (currentQuestion.correctAnswer === wordInButtonTheyClickOn) {
            currentQuestion.isCorrect = true;
        } else {
            currentQuestion.isCorrect = false;
        }
    }

    // Registers a click event close the game and show the results page to the user
    function createStopGameEvent() {
        $("#stop").on("click", resolveGame);
    }

    // This is a function that will determine if the game is over (because of time)
    function decrement() { 
        timeRemaining--;
        //show number in the timer tag
        $("#timer").html(`<h2>${timeRemaining}<br> Seconds Remaining</h2>`);
        // once number hits zero run stop function
        if (timeRemaining === 0){
            resolveGame();
        }
    }

    // This will create the HTML elements to show the user the game results (and win/loss?)
    function resolveGame() {
        clearInterval(intervalId);
        $("#question-stuff").hide();
        $("#results").show();
        $("#restart").show();
        // show number of right
        var rightAnswers = 0;
        var wrongAnswers = 0;
        var skipped = 0;
        for(var i =0; i < questions.length; i++) {
            if (questions[i].isCorrect === true) {
                rightAnswers++;
            } else if (questions[i].isCorrect === false) {
                wrongAnswers++;
            } else {
                skipped++;
            }
        }
        
        $("#results").append(`<p>Questions correct:  ${rightAnswers}</p>`);
        $("#results").append(`<p>Questions Incorrect:  ${wrongAnswers}</p>`);
        $("#results").append(`<p>Questions Skipped:  ${skipped}</p>`);
    }

    // This function starts up the page
    function initPage() {
        $("#results").hide();
        $("#question-stuff").show();
            
        populateQuestionArray();
        createQuestionElements();
        createStopGameEvent();
        // Register a timer on the page to show the remaining time to the user
        intervalId = setInterval(decrement, 1000);
    }

    initPage();
});