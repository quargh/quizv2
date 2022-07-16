import { BuildIndexPage } from "./components/buildIndexPage.js";
import { BuildBookmarksPage } from "./components/buildBookmarksPage.js";
import { SetBookmarks } from "./components/bookmark/setBookmarks.js";
import { ButtonAnswerClick } from "./components/button__answer/button__answer--click.js";

console.clear();

let questions = [];
const url = "https://opentdb.com/api.php?amount=10";

fetch(url)
  // nimmt den Inhalt als Text, der in JSON formatiert ist und wandelt es in JS Objekt um:
  .then((jsonObject) => jsonObject.json())
  .then((javascriptObject) => mapResults(javascriptObject.results))
  .catch((error) => console.error(error.message));

function mapResults(results) {
  questions = results.map((result) => {
    return {
      // Html Entities decoden
      question: decodeHtml(result.question),
      answer: decodeHtml(result.correct_answer),
      tags: result.incorrect_answers.map((answer) => {
        return (answer = decodeHtml(answer));
      }),
      // Zu Testzwecken 'isBookmarked' mit einer Wahrscheinlichkeit von 1:1 auf true setzen
      isBookmarked: Math.round(Math.random()) % 2,
    };
  });
  // Answer an Zufallsposition zu Tags-Array hinzufuegen
  questions.forEach((question) => {
    const random = Math.floor(Math.random() * question.tags.length);
    question.tags.splice(random, 0, question.answer);
  });

  console.log(questions);
  setupIndexPage();
}

// NAVIGATION --------------------------------------------------------->

// Alle Pages holen
const pages = document.querySelectorAll('[data-js="pages"]');

// Init
// alles außer Index wegschalten

pages.forEach((page, index) => {
  if (index !== 0) {
    page.style.display = "none";
  } else {
    page.style.display = "block";
  }
});

const navButtons = document.querySelectorAll('[data-js="toggle-index"]');
//console.log("navButtons.length: "+navButtons.length)
navButtons.forEach((navButton, index) => {
  navButton.addEventListener("click", onNavButtonClick);

  function onNavButtonClick() {
    const modulo = index % 4;
    //console.log("click modulo: " + modulo);

    pages.forEach((page, index) => {
      if (index !== modulo) {
        page.style.display = "none";
      } else {
        page.style.display = "block";
      }
    });
    if (modulo === 0) {
      //console.log("runIndex");
      setupIndexPage();
    }
    if (modulo === 1) {
      setupBookmarksPage();
    }
  }
});

function setupIndexPage() {
  //console.log(questions);
  BuildIndexPage(questions);
  SetBookmarks(questions);
  ButtonAnswerClick();
}
function setupBookmarksPage() {
  BuildBookmarksPage(questions);
  SetBookmarks(questions, setupBookmarksPage);
  ButtonAnswerClick();
}
//Page abschalten:
//page.style.display = "none";

//Welcher Button wurde gedrückt?
//const x = 11 % 4;
//console.log(x);

function decodeHtml(html) {
  let txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// Create page: submit button

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  // Standardverhalten verhindern
  event.preventDefault();

  const questionElement = form.elements.question;
  const questionValue = questionElement.value.trim();

  const answerElement = form.elements.answer;
  const answerValue = answerElement.value.trim();

  const tagsElement = form.elements.tags;
  const tagsValue = tagsElement.value.split(",").map(function (item) {
    return item.trim();
  });

  // Richtige Antwort in Tags splicen
  const random = Math.floor(Math.random() * tagsValue.length);
  tagsValue.splice(random, 0, answerValue);

  console.log(questionValue);
  console.log(answerValue);
  console.log(tagsValue);

  // In Questions pushen
  let obj = {};
  obj.question = questionValue;
  obj.answer = answerValue;
  obj.tags = tagsValue;
  obj.isBookmarked = false;

  questions.unshift(obj);

  console.clear();
  console.log(questions);

  form.reset();
  questionElement.focus();
});
