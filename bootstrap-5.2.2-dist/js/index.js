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
  $(".li_overflow").hover(
    function () {
      link_color.classList.remove("active");
    },
    function () {
      link_color.classList.add("active");
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  const divSectionBlocks = document.querySelectorAll(".div_section_block");
  const sectionSolutions = document.querySelectorAll(".section_solutions");
  divSectionBlocks.forEach((block, index) => {
    block.addEventListener("mouseover", function () {
      sectionSolutions[index].classList.add("flex-display");
    });
    block.addEventListener("mouseout", function () {
      sectionSolutions[index].classList.remove("flex-display");
    });
    sectionSolutions[index].addEventListener("mouseover", function () {
      this.classList.add("flex-display");
    });
    sectionSolutions[index].addEventListener("mouseout", function () {
      this.classList.remove("flex-display");
    });
  });
});
