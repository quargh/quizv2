export function ButtonAnswerClick() {
  const wrappers = document.querySelectorAll('[data-js="wrapper"]');

  wrappers.forEach((card) => {
    const button = card.querySelector('[data-js="button"]');
    const answer = card.querySelector('[data-js="answer"]');

    answer.style.display = "none";

    button.addEventListener("click", onButtonClick);

    function onButtonClick() {
      console.log("klick");
      if (answer.style.display === "none") {
        answer.style.display = "block";
        button.textContent = "Hide answer";
      } else {
        answer.style.display = "none";
        button.textContent = "Show answer";
      }
    }
  });
}

/*
export function ButtonAnswerClick() {
  const wrappers = document.querySelectorAll('[data-js="wrapper"]');

  wrappers.forEach((card) => {
    const button = card.querySelector('[data-js="button"]');
    const answer = card.querySelector('[data-js="answer"]');

    answer.style.visibility = "hidden";

    button.addEventListener("click", onButtonClick);

    function onButtonClick() {
      console.log("klick");
      if (answer.style.visibility == "hidden") {
        answer.style.visibility = "visible";
        button.textContent = "Hide answer";
      } else {
        answer.style.visibility = "hidden";
        button.textContent = "Show answer";
      }
    }
  });






  const button = document.querySelector('[data-js="button"]');
  const answer = document.querySelector('[data-js="answer"]');
  function onButtonClick() {
    console.log("test");
  }
  button.addEventListener("click", onButtonClick);
  // Bookmark Button
  const bookmark = document.querySelector('[data-js="bookmark"]');
  let fill = document.querySelector('[data-js="bookmark"]');
  function onBookmark() {
    console.log("test");
  }
  bookmark.addEventListener("click", onBookmark);




}
*/
