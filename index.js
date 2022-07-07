import { Bookmark } from "./components/bookmark/bookmark.js";
import { ButtonAnswerClick } from "./components/button__answer/button__answer--click.js";

Bookmark();
ButtonAnswerClick();

// NAVIGATION --------------------------------------------------------->

//Alle Pages holen
const pages = document.querySelectorAll('[data-js="pages"]');

const navButtons = document.querySelectorAll('[data-js="toggle-index"]');
//console.log("navButtons.length: "+navButtons.length)
navButtons.forEach((navButton, index) => {

  navButton.addEventListener("click", onNavButtonClick);

  function onNavButtonClick() {
    const modulo = index % 4;
    console.log("click: " + modulo);

    pages.forEach((page, index)=>{

        if(index!=modulo){
            page.style.display = "none";
        }else{
            page.style.display = "block";
        }

    });

  }
});



//Page abschalten:
//page.style.display = "none";

//Welcher Button wurde gedrückt?
const x = 11 % 4;
//console.log(x);
