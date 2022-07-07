export function ButtonAnswerClick() {
  // Antworten holen:
  const answers = document.querySelectorAll('[data-js="answer"]');
  // Antworten unsichtbar schalten:
  answers.forEach((answer, index) => {
    answer.style.visibility = "hidden";
  });

  // Buttons holen:
  const buttons = document.querySelectorAll('[data-js="button"]');

  
  const elements = new Array();
  for (let i=0; i<buttons.length; i++){
    const element = new Object();
    element.button = buttons[i];
    element.answer = answers[i];
    element.index = i;
    elements.push(element);
  }
  
  // Click Listener:
  buttons.forEach((button, index) => {
    //console.log("index: " + index);
    button.addEventListener("click", onButtonClick);

    function onButtonClick() {
      //console.log(index);

      const myAnswer = elements[index].answer;
      const myButton = elements[index].button;

      if (myAnswer.style.visibility == "hidden") {
        myAnswer.style.visibility = "visible";
        myButton.textContent = "Hide answer";
      } else {
        myAnswer.style.visibility = "hidden";
        myButton.textContent = "Show answer";
      }
    }
  });
}
