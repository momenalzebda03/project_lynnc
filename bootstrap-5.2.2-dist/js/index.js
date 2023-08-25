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

var tag_header = document.querySelectorAll(".col_child_1");
var mouse_click = document.querySelectorAll(".mouse_click");
var div_width = document.querySelectorAll(".div_width");
var span_online = document.querySelectorAll(".span_online");
var loop_text = document.querySelectorAll(".loop_text");
var loop_text1 = document.querySelectorAll(".loop_text1");
for (let i = 0; i < tag_header.length; i++) {
  var chekd = tag_header[i];
  chekd.addEventListener("click", function () {
    for (let i = 0; i < mouse_click.length; i++) {
      mouse_click[i].classList.remove("active_image");
    }
    this.querySelector(".mouse_click").classList.add("active_image");

    for (let i = 0; i < div_width.length; i++) {
      div_width[i].classList.remove("border_active1");
    }
    this.querySelector(".div_width").classList.add("border_active1");

    for (let i = 0; i < span_online.length; i++) {
      span_online[i].classList.remove("active_online1");
    }
    this.querySelector(".span_online").classList.add("active_online1");

    for (let i = 0; i < loop_text.length; i++) {
      loop_text[i].classList.remove("active_white");
    }
    this.querySelector(".loop_text").classList.add("active_white");

    for (let i = 0; i < loop_text1.length; i++) {
      loop_text1[i].classList.remove("active_white1");
    }
    this.querySelector(".loop_text1").classList.add("active_white1");
  });
}

var tag_header = document.querySelectorAll(".col_child_page");
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

var divCircles = document.querySelectorAll(".div_circle1");
divCircles.forEach(function (circle, index) {
  circle.addEventListener("click", function () {
    mouse_click.forEach(function (item) {
      item.classList.remove("active_image");
    });
    div_width.forEach(function (item) {
      item.classList.remove("border_active1");
    });
    span_online.forEach(function (item) {
      item.classList.remove("active_online1");
    });
    loop_text1.forEach(function (item) {
      item.classList.remove("active_white1");
    });
    loop_text.forEach(function (item) {
      item.classList.remove("active_white");
    });
    var correspondingMouseClickItem = document.querySelector(
      `.mouse_click[data-bs-slide-to="${index}"]`
    );
    correspondingMouseClickItem.classList.add("active_image");
    var correspondingDivWidthItem =
      correspondingMouseClickItem.querySelector(".div_width1");
    correspondingDivWidthItem.classList.add("border_active1");
    var correspondingSpanOnlineItem =
      correspondingMouseClickItem.querySelector(".span_online");
    correspondingSpanOnlineItem.classList.add("active_online1");
    var correspondingSpanOnlineItem =
      correspondingMouseClickItem.querySelector(".loop_text1");
    correspondingSpanOnlineItem.classList.add("active_white1");
    var correspondingSpanOnlineItem =
      correspondingMouseClickItem.querySelector(".loop_text");
    correspondingSpanOnlineItem.classList.add("active_white");
  });
});

var button_create = document.getElementById("button_create");
var button_login = document.getElementById("button_login");
var color_button = document.getElementById("color_button");
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
button_create.addEventListener("click", () => {
  button_login.style.color = "black";
  button_create.style.color = "white";
  color_button.style.setProperty("--before_left", "52%");
  color_button.style.setProperty("--before_border", "0 10px 10px 0");
  form1.style.display = "none";
  form2.style.display = "flex";
});
button_login.addEventListener("click", () => {
  button_create.style.color = "black";
  button_login.style.color = "white";
  color_button.style.setProperty("--before_left", "0");
  color_button.style.setProperty("--before_border", "10px 0 0 10px");
  form1.style.display = "flex";
  form2.style.display = "none";
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
