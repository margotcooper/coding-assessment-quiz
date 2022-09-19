// TODO: add game logic
//make timer start and first question/card show when start button is clicked
console.log(questions);
var startBtn = document.getElementById("startBtn");
var timeEl = document.getElementById("timeleft");
var answerButtons = document.querySelector(".btn-grid");
var currentQuestion = 0;
var btnArray = document.querySelectorAll(".btn");

//show question and corresponding answers
var timeLeft = 60;
//add later - remove main menu section when quiz is started

function startTimer() {
  var newTimer = setInterval(function () {
    timeLeft--;

    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(newTimer);
    }
  }, 1000);
}

function showQuestion() {
  // document.getElementById("btnOne").textContent =
  //   questions[currentQuestion].answers[0].text;
  // document
  //   .getElementById("btnOne")
  //   .setAttribute(
  //     "data-boolean",
  //     questions[currentQuestion].answers[0].correct
  //   );
}
//if correct answer is clicked, display on webpage under answers 'Correct!' and show next question

// function checkAnswer(event) {
//   console.log(event.target);
//   var isCorrect = event.target.dataset.boolean;

//   if (isCorrect == "true") {
//     console.log("yo das good");
//   } else {
//     console.log("nah das whack");
//   }

//   currentQuestion++;
//   if (currentQuestion < questions.length) {
//     showQuestion();
//   }
// }
//else, display 'Wrong' under answers and go to next question

//show final page when quiz is over - 'All done!'
//Your final score is () - where () is the calculated score of the game.

//add field to 'Enter initials:'

//add 'Submit' button
//display highscores.html with this attempt's score appended into a sorted list, from largest to smallest.
function startQuiz() {
  console.log(questions.length);

  // while (currentQuestion < question.length) {
  startTimer();
  startBtn.setAttribute("disabled", "true");
  // showQuestion();
  var questionEl = document.getElementById("questions");
  console.log(questionEl[currentQuestion]);
  for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].innerHTML = questions[currentQuestion].answers[i].text;
  }
  questionEl.textContent = questions[currentQuestion].question;
  // answerButtons.innerHTML = questions[currentQuestion].answers;
  //textContent and innerHTML do the same thing practically
}
// }
console.log(questions);
startBtn.addEventListener("click", (event) => {
  console.log(event);
  startQuiz();
});

// document.getElementById("btnOne").addEventListener("click", checkAnswer);
