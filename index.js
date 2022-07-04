let button = document.querySelector('[data-js="button"]');

function onButtonClick() {
  console.log("test");
  //alert("clicked");
  //button.classList.add("btn__test");
  button.classList.toggle("btn__test");
}

button.addEventListener("click", onButtonClick);
