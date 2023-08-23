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

var icon_animation = document.getElementById("icon_top");
function scroll_smool() {
  window.scrollTo({
    top: 750,
    behavior: "smooth",
  });
}
function scroll() {
  window.scrollTo({
    top: 670,
    behavior: "smooth",
  });
}
function addEventListenerBasedOnWidth() {
  if (window.innerWidth <= 990) {
    icon_animation.addEventListener("click", scroll_smool);
  } else {
    icon_animation.addEventListener("click", scroll);
  }
}
addEventListenerBasedOnWidth();
window.addEventListener("resize", () => {
  if (icon_animation.removeEventListener) {
    icon_animation.removeEventListener("click", scroll_smool);
  } else {
    icon_animation.removeEventListener("click", scroll);
  }
  addEventListenerBasedOnWidth();
});

var tag_header = document.querySelectorAll(".row_hover");
var active_carousel = document.querySelectorAll(".div_icon");
var active_text = document.querySelectorAll(".color_links");
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < active_carousel.length; i++) {
      active_carousel[i].classList.remove("active_carousel");
    }
    this.querySelector(".div_icon").classList.add("active_carousel");

    for (let j = 0; j < active_text.length; j++) {
      active_text[j].classList.remove("active_title");
    }
    this.querySelector(".color_links").classList.add("active_title");
  });
}