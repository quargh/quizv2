export function Bookmark() {
  console.log("execute");
  const buttonsBookmark = document.querySelectorAll(
    '[data-js="button__bookmark"]'
  );
  console.log("length: " + buttonsBookmark.length);


  buttonsBookmark.forEach((button, index) => {
    console.log("index: "+index);
    console.log("testing: "+button.src);
    button.addEventListener("click", onBookmarkButtonClick);


    let isBookmarked = false;

    function onBookmarkButtonClick() {
      console.log("clicked: "+isBookmarked);
      if (!isBookmarked) {
        isBookmarked = true;
        button.src = "/images/bookmark.svg";
      } else {
        isBookmarked = false;
        button.src = "/images/bookmark-outline.svg";
      }
    }

  });
  //buttonsBookmark.addEventListener("click", onBookmarkButtonClick);


}
