const flashcards = document.getElementsByClassName("flashcards")[0];
const createCards = document.getElementsByClassName("create-card")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let content = [];
//Variable declaration above

//Construct the flashcard itself
function divCreate(text) {
  //Create our new html elements
  let div = document.createElement("div");
  let h2Question = document.createElement("h2");
  let h2Answer = document.createElement("h2");

  //Create our new div class that will hold our flashcards
  div.className = "flashcard";

  //Create the image of the flashcard along with the css
  h2Question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top: 30px");
  h2Question.innerHTML = text.Question;

  h2Answer.setAttribute("style", "text-align: center; display: none; color: red");
  h2Answer.innerHTML = text.Answer;

  //Append the new items that will be part of the web page
  div.appendChild(h2Question);
  div.appendChild(h2Answer);

  //Makes sure to display our cards after a certain action
  div.addEventListener("click", function () {
    if (h2Answer.style.display === "none") {
      h2Answer.style.display = "block";
    }
    else {
      h2Answer.style.display = "none";
    }
  });

  //Append the entire div
  flashcards.appendChild(div);
}

//Object constructor to hold the card information
function card(Question, Answer) {
  this.Question = Question;
  this.Answer = Answer;
}

//Adds our new card using an object to hold the card info
function addCard() {
  let flashcard = new card(question.value, answer.value);
  //Pushes this new info into our content array which stores each card's info
  content.push(flashcard);
  divCreate(content[content.length - 1]);
  question.value = '';
  answer.value = '';
}

//Basic functions for remove, show, and
function delCard() {
  flashcards.innerHTML = "";
  content = [];
}

function showCard() {
  createCards.style.display = "block";
}

function hideCard() {
  createCards.style.display = "none";
}