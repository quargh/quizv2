let button = document.querySelector('[data-js="button"]');
let buttonBookmark = document.querySelector('[data-js="button__bookmark"]');
let isBookmarked = false;

//--//

let answer = document.querySelector('[data-js="answer"]');

answer.style.visibility = "hidden";

//------------------------------------//

function onButtonClick() {

  if (answer.style.visibility == "hidden") {
    answer.style.visibility = "visible";
    button.textContent  = "Hide answer";
  } else {
    answer.style.visibility = "hidden";
    button.textContent  = "Show answer";
  }

}

button.addEventListener("click", onButtonClick);

function onBookmarkButtonClick() {
  if (!isBookmarked) {
    isBookmarked = true;
    buttonBookmark.src = "/images/bookmark.svg";
  } else {
    isBookmarked = false;
    buttonBookmark.src = "/images/bookmark-outline.svg";
  }

  //button.classList.add("btn__test");
  //button.classList.toggle("btn__test");
}

buttonBookmark.addEventListener("click", onBookmarkButtonClick);
