var button_click = document.getElementById("button_click");
var menu = document.getElementById("menu");
var bollen = true;
button_click.addEventListener("click", () => {
  if (bollen == true) {
    menu.classList = "fas fa-times";
    bollen = false;
  } else {
    menu.classList = "fas fa-bars";
    bollen = true;
  }
});

var link_color = document.getElementById("link_color");
$(document).ready(function () {
  $(".section_solutions").hover(
    function () {
      $(this).parent().find(".link_color").addClass("active");
      link_color.classList.remove("active");
    },
    function () {
      $(this).parent().find(".link_color").removeClass("active");
      link_color.classList.add("active");
    }
  );
  $(".link_color").hover(
    function () {
      $(this).parent().find(".link_color").addClass("active");
      link_color.classList.remove("active");
    },
    function () {
      $(this).parent().find(".link_color").removeClass("active");
      link_color.classList.add("active");
    }
  );
  $(".div_section_block").hover(
    function () {
      $(this).parent().find(".link_color").addClass("active");
      link_color.classList.remove("active");
    },
    function () {
      $(this).parent().find(".link_color").removeClass("active");
      link_color.classList.add("active");
    }
  );
});
