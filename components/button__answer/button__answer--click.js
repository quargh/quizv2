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
}
