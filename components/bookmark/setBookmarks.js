export function SetBookmarks(questions, callback) {
  //console.log("execute");
  const buttonsBookmark = document.querySelectorAll(
    '[data-js="button__bookmark"]'
  );
  //console.log("length: " + buttonsBookmark.length);

  console.log("buttonsBookmark.length: " + buttonsBookmark.length);
  //console.log(buttonsBookmark);

  buttonsBookmark.forEach((button) => {
    //console.log("index: "+index);
    //console.log("testing: "+button.src);
    button.addEventListener("click", onBookmarkButtonClick);

    //TODO woher weiß ich, ob es schon gebookmarked ist?

    const questionsIndex = button.getAttribute("data-page");

    //console.log("isBookmarked: " + isBookmarked);

    //let isBookmarked = false;

    function onBookmarkButtonClick() {
      //const index = button.getAttribute("data-page");
      //console.log("data-page :::" + questionsIndex); //Outputs 123

      //console.log("modulo: " + modulo);
      if (!questions[questionsIndex].isBookmarked) {
        questions[questionsIndex].isBookmarked = true;
        button.src = "/images/bookmark.svg";
      } else {
        questions[questionsIndex].isBookmarked = false;
        button.src = "/images/bookmark-outline.svg";
      }
      if (callback !== null) {
        callback();
      }
    }
  });
}
