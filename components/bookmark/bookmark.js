export function Bookmark() {
  const buttonsBookmark = document.querySelectorAll(
    '[data-js="button__bookmark"]'
  );
  console.log("length: " + buttonsBookmark.length);
  buttonsBookmark.forEach((button) => {
    console.log("test1");
    button.addEventListener("click", onBookmarkButtonClick);
  });
  //buttonsBookmark.addEventListener("click", onBookmarkButtonClick);

  let isBookmarked = false;

  function onBookmarkButtonClick() {
    console.log("clicked");
    if (!isBookmarked) {
      isBookmarked = true;
      buttonsBookmark.src = "/images/bookmark.svg";
    } else {
      isBookmarked = false;
      buttonsBookmark.src = "/images/bookmark-outline.svg";
    }

    //button.classList.add("btn__test");
    //button.classList.toggle("btn__test");
  }
}
