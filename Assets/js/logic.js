// TODO: add game logic
//make timer start and first question/card show when start button is clicked
console.log(questions);
var startBtn = document.getElementById("startBtn");
var timeEl = document.getElementById("timeleft");
var timeLeft, currentQuestion;
//show question and corresponding answers

function startQuiz() {
  timeLeft = 60;
  startTimer();
  startBtn.setAttribute("disabled", "true");
  currentQuestion = 0;
  showQuestion();
}
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
  document.getElementById("question").textContent =
    questions[currentQuestion].question;

  document.getElementById("btnOne").textContent =
    questions[currentQuestion].answers[0].text;
  document
    .getElementById("btnOne")
    .setAttribute(
      "data-boolean",
      questions[currentQuestion].answers[0].correct
    );
}
//if correct answer is clicked, display on webpage under answers 'Correct!' and show next question

function checkAnswer(event) {
  console.log(event.target);
  var isCorrect = event.target.dataset.boolean;

  if (isCorrect == "true") {
    console.log("yo das good");
  } else {
    console.log("nah das whack");
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  }
}
//else, display 'Wrong' under answers and go to next question

//show final page when quiz is over - 'All done!'
//Your final score is () - where () is the calculated score of the game.

//add field to 'Enter initials:'

//add 'Submit' button

//display highscores.html with this attempt's score appended into a sorted list, from largest to smallest.

startBtn.addEventListener("click", startQuiz);
document.getElementById("btnOne").addEventListener("click", checkAnswer);
