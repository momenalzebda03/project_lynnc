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

var tag_header = document.querySelectorAll(".col_child");
var mouse_click = document.querySelectorAll(".mouse_click");
var div_width = document.querySelectorAll(".div_width");
var span_online = document.querySelectorAll(".span_online");
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < mouse_click.length; i++) {
      mouse_click[i].classList.remove("active_bottom");
    }
    this.querySelector(".mouse_click").classList.add("active_bottom");

    for (let i = 0; i < div_width.length; i++) {
      div_width[i].classList.remove("border_active");
    }
    this.querySelector(".div_width").classList.add("border_active");

    for (let i = 0; i < span_online.length; i++) {
      span_online[i].classList.remove("active_online");
    }
    this.querySelector(".span_online").classList.add("active_online");
  });
}

var divCircles = document.querySelectorAll(".div_circle");
divCircles.forEach(function (circle, index) {
  circle.addEventListener("click", function () {
    mouse_click.forEach(function (item) {
      item.classList.remove("active_bottom");
    });
    div_width.forEach(function (item) {
      item.classList.remove("border_active");
    });
    span_online.forEach(function (item) {
      item.classList.remove("active_online");
    });
    var correspondingMouseClickItem = document.querySelector(
      `.mouse_click[data-bs-slide-to="${index}"]`
    );
    correspondingMouseClickItem.classList.add("active_bottom");
    var correspondingDivWidthItem =
      correspondingMouseClickItem.querySelector(".div_width");
    correspondingDivWidthItem.classList.add("border_active");
    var correspondingSpanOnlineItem =
      correspondingMouseClickItem.querySelector(".span_online");
    correspondingSpanOnlineItem.classList.add("active_online");
  });
});
