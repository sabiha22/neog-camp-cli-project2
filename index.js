var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Sabiha",
    score: 5,
  },

  {
    name: "Sania",
    score: 4,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Delhi"
}, 
{
  question: "What is the name of my college? ",
  answer: "BITS Pilani"
},
{
  question: "What is my favourite dish? ",
  answer: "Rajma chawal"
},
{
  question: "My favorite sport? ",
  answer: "Basketball"
},
{
  question: "Favourite cartoon? ",
  answer: "Oswald"
}];

function welcome() {
 var userName = readlineSync.question("What is your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Sabiha?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase())     { // branching
    console.log("correct answer");
    score = score + 1;
    } else {
    console.log("wrong answer");
   }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
   // var currentQuestion = questions[i];
    play(questions[i].question, questions[i].answer)
  }
}

function showScores() {
  console.log("You SCORED: ", score);
  console.log("Check out the high scores, if you should be there ping me with the screenshot and I'll update it");
  for (var i=0; i<highScores.length; i++) {
   // var currentQuestion = questions[i];
    console.log(highScores[i].name,highScores[i].score)
  }
  
}
welcome();
game();
showScores();