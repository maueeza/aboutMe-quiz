console.log("Hello, Maueeza here!");
var readLineSync = require('readline-sync');
var userName = readLineSync.question('May I have your name? ');
console.log("Welcome "+userName+", Let's see how much you know Maueeza! ");
var score = 0;
function play(question, answer)
{
  var userAns = readLineSync.question(question);
  if(userAns.toLowerCase() === answer.toLowerCase())
  {
    console.log("Right!");
    score = score + 1;
    console.log("Your score is : "+score);
    console.log("--------");

  }
  else
  {
    console.log("Wrong!");
    score = score - 1;
    console.log("Your score is : "+score);
    console.log("--------");
  }
}

var questionOne = {
  question : "Where do I Stay? ",
  answer : "Pune"
};

var questionTwo = {
  question : "Where do I work? ",
  answer : "Tech Mahindra"
};

var questionThree = {
  question : "What is my hometown? ",
  answer : "Ratnagiri"
};
var questionFour = {
  question : "What is my favourite Color? ",
  answer : "Blue"
};
var questionFive = {
  question : "What is my favourite Icecream flavour? ",
  answer : "Rajbhog"
};

var QuestionList = [questionOne,questionTwo,questionThree, questionFour, questionFive ]

for(i = 0 ; i < QuestionList.length; i++)
{
  var CurrentQuestion = QuestionList[i];
  play(QuestionList[i].question, QuestionList[i].answer);
}


console.log("Well done! Your total score is : "+score);