export function Bookmark() {
  const buttonBookmark = document.querySelector('[data-js="button__bookmark"]');
  buttonBookmark.addEventListener("click", onBookmarkButtonClick);

  let isBookmarked = false;

  function onBookmarkButtonClick() {
    console.log("test");
    if (!isBookmarked) {
      isBookmarked = true;
      buttonBookmark.src = "/images/bookmark.svg";
    } else {
      isBookmarked = false;
      buttonBookmark.src = "/images/bookmark-outline.svg";
    }

    //button.classList.add("btn__test");
    //button.classList.toggle("btn__test");
  }
}
