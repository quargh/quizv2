export function SetQuestions() {
  // Build Cards dynamically via JS

  const mainSection = document.querySelector('[data-js="main-section"]');
  //const cardList = document.querySelectorAll();

  questions.forEach((card) => {
    const article = document.createElement("article");
    article.classList.add("card");
    mainSection.append(article);

    const questionHeadline = document.createElement("h2");
    questionHeadline.classList.add("card__heading");
    questionHeadline.innerText = "Question";
    article.append(questionHeadline);

    const image = document.createElement("img");
    image.setAttribute("data-js", "button__bookmark");
    image.setAttribute("src", "/images/bookmark.svg");
    image.setAttribute("alt", "bookmark");
    image.classList.add("card__bookmark");
    article.append(image);

    const wrapper = document.createElement("div");
    wrapper.setAttribute("data-js", "wrapper");
    article.append(wrapper);

    const question = document.createElement("p");
    question.innerText = "Wie heisst die Hauptstadt von Paraguay?";
    wrapper.append(question);

    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-js", "button");
    button.classList.add("button__gen");
    button.classList.add("btn__show");
    button.innerText = "Show answer";
    wrapper.append(button);

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
    answerText.innerText = "Asuncion";
    answer.append(answerText);

    const wordCloud = document.createElement("div");
    wordCloud.classList.add("holder");
    article.append(wordCloud);

    const button1 = document.createElement("button");
    button1.setAttribute("type", "button");
    button1.classList.add("btn_a");
    button1.innerText = "Geography";
    wordCloud.append(button1);

    const button2 = document.createElement("button");
    button2.setAttribute("type", "button");
    button2.classList.add("btn_a");
    button2.innerText = "World";
    wordCloud.append(button2);

    const button3 = document.createElement("button");
    button3.setAttribute("type", "button");
    button3.classList.add("btn_a");
    button3.innerText = "Capitals";
    wordCloud.append(button3);

    const button4 = document.createElement("button");
    button4.setAttribute("type", "button");
    button4.classList.add("btn_a");
    button4.innerText = "South America";
    wordCloud.append(button4);

    /*
    article.classList.add("card");
    mainSection.append(article);

    const headline = article.createElement("h2");
    headline.classList.add("card__heading");
    headline.innerText = "TestQuestion";
    article.append(headline);
  
    */
  });
}

const questions = [
  {
    question: "Wie heisst die Hauptstadt von Frankreich?",
    answer: "Paris",
  },
  {
    question: "Wie heisst die Hauptstadt von Paraguay?",
    answer: "Asunsion",
  },
  {
    question: "Wie heisst die Hauptstadt von Argentinien?",
    answer: "Buenos Aires",
  },
  {
    question: "Wie heisst die Hauptstadt von Griechenland?",
    answer: "Athen",
  },
];
