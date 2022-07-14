import {BuildIndex} from "./components/buildIndex.js";
import {BuildBookmarks} from "./components/buildBookmarks.js";
import {Bookmark} from "./components/bookmark/bookmark.js";
import {ButtonAnswerClick} from "./components/button__answer/button__answer--click.js";


let questions = [];
const url = "https://opentdb.com/api.php?amount=10";


fetch(url)
    // nimmt den Inhalt als Text, der in JSON formatiert ist und wandelt es in JS Objekt um:
    .then((jsonObject) => jsonObject.json())
    .then((javascriptObject) => mapResults(javascriptObject.results))
    .catch(error => console.error(error.message));

function mapResults(results) {
    questions = results.map((result) => {

        let random = Math.round(Math.random());

        let isBookmarked = false;
        if(random%2===0){
            isBookmarked = true;
        }


        return {
            question: result.question,
            answer: result.correct_answer,
            tags: result.incorrect_answers,
            isBookmarked: isBookmarked
        };
    });
    console.log(questions);
    BuildIndex(questions);
    Bookmark(questions);
    ButtonAnswerClick();

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
        console.log("click modulo: " + modulo);

        pages.forEach((page, index) => {
            if (index !== modulo) {
                page.style.display = "none";
            } else {
                page.style.display = "block";
            }
        });
        if(modulo ===1){
            BuildBookmarks(questions);
            Bookmark(questions);
            ButtonAnswerClick();
        }
    }
});

//Page abschalten:
//page.style.display = "none";

//Welcher Button wurde gedrückt?
//const x = 11 % 4;
//console.log(x);