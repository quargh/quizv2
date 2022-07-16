export function BuildBookmarksPage(questions) {
  // Build Cards dynamically via JS

  const mainSection = document.querySelector(
    '[data-js="main-section-bookmarks"]'
  );

  //clear all
  mainSection.innerHTML = "";

  //const cardList = document.querySelectorAll();

  questions.forEach((card, index) => {
    if (questions[index].isBookmarked) {
      const article = document.createElement("article");
      article.classList.add("card");
      mainSection.append(article);

      const questionHeadline = document.createElement("h2");
      questionHeadline.classList.add("card__heading");
      questionHeadline.innerText = "Question";
      article.append(questionHeadline);

      const image = document.createElement("img");
      image.setAttribute("data-page", index);
      image.setAttribute("data-js", "button__bookmark");
      image.setAttribute("src", "/images/bookmark.svg");
      image.setAttribute("alt", "bookmark");
      image.classList.add("card__bookmark");
      article.append(image);

      const wrapper = document.createElement("div");
      wrapper.setAttribute("data-js", "wrapper");
      article.append(wrapper);

      const question = document.createElement("p");
      question.innerText = questions[index].question;
      wrapper.append(question);

      const centerDiv = document.createElement("div");
      centerDiv.classList.add("center");
      wrapper.append(centerDiv);

      const button = document.createElement("button");
      button.setAttribute("type", "button");
      button.setAttribute("data-js", "button");
      button.classList.add("button__gen");
      button.classList.add("btn__show");
      button.innerText = "Show answer";
      centerDiv.append(button);

      const answer = document.createElement("div");
      answer.classList.add("card__answer");
      answer.setAttribute("data-js", "answer");
      wrapper.append(answer);

      const answerHeadline = document.createElement("h2");
      answerHeadline.classList.add("card__heading");
      answerHeadline.setAttribute("data-js", "answer_headline");
      answerHeadline.innerText = "Answer:";
      answer.append(answerHeadline);

      const answerText = document.createElement("p");
      answerText.classList.add("card__text");
      answerText.setAttribute("data-js", "answer_text");
      answerText.innerText = questions[index].answer;
      answer.append(answerText);

      const wordCloud = document.createElement("div");
      wordCloud.classList.add("holder");
      article.append(wordCloud);

      questions[index].tags.forEach((tag, index) => {
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.classList.add("btn__a");
        button.innerText = tag;
        wordCloud.append(button);
      });
    }
  });
}

/*
const questions = [
    {
        question: "Wie heisst die Hauptstadt von Frankreich?",
        answer: "Paris",
        tags: ["Marseille", "Paris", "Lille", "Lyon"],
    },
    {
        question: "Wie heisst die Hauptstadt von Paraguay?",
        answer: "Asunsión",
        tags: ["Montevideo", "La Paz", "Asunción", "Buenos Aires"],
    },
    {
        question: "Auf welcher Insel liegt Haiti?",
        answer: "Hispaniola",
        tags: ["Aruba", "Curaçao", "Bonaire", "Hispaniola"],
    },
    {
        question: "Was ist der Sinn des Lebens?",
        answer: "42",
        tags: ["39", "42", "5000", "9000"],
    },
];

*/
