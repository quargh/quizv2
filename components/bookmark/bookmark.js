export function Bookmark(questions) {


  //console.log("execute");
  const buttonsBookmark = document.querySelectorAll(
    '[data-js="button__bookmark-index"]'
  );
  //console.log("length: " + buttonsBookmark.length);


  buttonsBookmark.forEach((button, index) => {
    //console.log("index: "+index);
    //console.log("testing: "+button.src);
    button.addEventListener("click", onBookmarkButtonClick);

    //TODO woher weiß ich, ob es schon gebookmarked ist?

    let isBookmarked = questions[index].isBookmarked;
    console.log("index: "+questions[index]);

    //let isBookmarked = false;

    function onBookmarkButtonClick() {




      //const index = button.getAttribute('data-page');
      //console.log("index:::"+index);//Outputs 123

      //console.log("clicked: "+isBookmarked);
      if (!isBookmarked) {
        isBookmarked = true;
        button.src = "/images/bookmark.svg";
        questions[index].isBookmarked = true;
      } else {
        isBookmarked = false;
        button.src = "/images/bookmark-outline.svg";
        questions[index].isBookmarked = false;
      }
    }

  });



}
