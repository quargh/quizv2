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
