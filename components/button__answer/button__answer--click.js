export function ButtonAnswerClick() {
  const button = document.querySelector('[data-js="button"]');

  //--//

  const answer = document.querySelector('[data-js="answer"]');

  answer.style.visibility = "hidden";

  //------------------------------------//

  function onButtonClick() {}
  /*oder*/
  onButtonClick = function () {
    if (answer.style.visibility == "hidden") {
      answer.style.visibility = "visible";
      button.textContent = "Hide answer";
    } else {
      answer.style.visibility = "hidden";
      button.textContent = "Show answer";
    }
  };

  button.addEventListener("click", onButtonClick);
}
