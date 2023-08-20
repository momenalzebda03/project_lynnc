var menu = document.getElementById("menu");
var bollen = true;
menu.addEventListener("click", () => {
  if (bollen == true) {
    menu.classList = "fas fa-times";
    bollen = false;
  } else {
    menu.classList = "fas fa-bars";
    bollen = true;
  }
});
