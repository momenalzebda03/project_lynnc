$(document).ready(function () {
  var bollen = true;
  $("#button_click").click(function () {
    if (bollen) {
      $("#menu").attr("src", "images/images_home/menu_close.svg");
      bollen = false;
    } else {
      $("#menu").attr("src", "images/images_home/menu.svg");
      bollen = true;
    }
  });

  $(".section_solutions").hover(
    function () {
      $(this).parent().find(".li_link").addClass("link_active");
      $("#link_color").removeClass("link_active");
    },
    function () {
      $(this).parent().find(".li_link").removeClass("link_active");
      $("#link_color").addClass("link_active");
    }
  );

  var tag_header = $(".row_hover");
  tag_header.each(function () {
    var chekd = $(this);
    chekd.click(function () {
      $(".div_icon").removeClass("active_carousel");
      $(".color_links").removeClass("active_title");
      chekd.find(".div_icon").addClass("active_carousel");
      chekd.find(".color_links").addClass("active_title");
    });
  });

  var tag_header = $(".col_child_1");
  tag_header.each(function () {
    var chekd = $(this);
    chekd.click(function () {
      $(".mouse_click").removeClass("active_image");
      $(".div_width").removeClass("border_active1");
      $(".span_online").removeClass("active_online1");
      $(".loop_text").removeClass("active_white");
      $(".loop_text1").removeClass("active_white1");
      chekd.find(".mouse_click").addClass("active_image");
      chekd.find(".div_width").addClass("border_active1");
      chekd.find(".span_online").addClass("active_online1");
      chekd.find(".loop_text").addClass("active_white");
      chekd.find(".loop_text1").addClass("active_white1");
    });
  });

  var tag_header = $(".col_child_page");
  tag_header.each(function () {
    var chekd = $(this);
    chekd.click(function () {
      $(".mouse_click").removeClass("active_bottom");
      $(".div_width").removeClass("border_active");
      $(".span_online").removeClass("active_online");
      chekd.find(".mouse_click").addClass("active_bottom");
      chekd.find(".div_width").addClass("border_active");
      chekd.find(".span_online").addClass("active_online1");
    });
  });

  $(".div_circle").each(function (index, circle) {
    $(circle).on("click", function () {
      $(".mouse_click").removeClass("active_bottom");
      $(".div_width").removeClass("border_active");
      $(".span_online").removeClass("active_online");
      var correspondingMouseClickItem = $(
        `.mouse_click[data-bs-slide-to="${index}"]`
      );
      correspondingMouseClickItem.addClass("active_bottom");
      var correspondingDivWidthItem =
        correspondingMouseClickItem.find(".div_width");
      correspondingDivWidthItem.addClass("border_active");
      var correspondingSpanOnlineItem =
        correspondingMouseClickItem.find(".span_online");
      correspondingSpanOnlineItem.addClass("active_online");
    });
  });

  $(".div_circle1").each(function (index, circle) {
    $(circle).on("click", function () {
      $(".mouse_click").removeClass("active_image");
      $(".div_width1").removeClass("border_active1");
      $(".span_online").removeClass("active_online1");
      $(".loop_text1").removeClass("active_white1");
      $(".loop_text").removeClass("active_white");
      var correspondingMouseClickItem = $(
        `.mouse_click[data-bs-slide-to="${index}"]`
      );
      correspondingMouseClickItem.addClass("active_image");
      var correspondingDivWidthItem =
        correspondingMouseClickItem.find(".div_width1");
      correspondingDivWidthItem.addClass("border_active1");
      var correspondingSpanOnlineItem =
        correspondingMouseClickItem.find(".span_online");
      correspondingSpanOnlineItem.addClass("active_online1");
      var correspondingLoopText1Item =
        correspondingMouseClickItem.find(".loop_text1");
      correspondingLoopText1Item.addClass("active_white1");
      var correspondingLoopTextItem =
        correspondingMouseClickItem.find(".loop_text");
      correspondingLoopTextItem.addClass("active_white");
    });
  });

  var iconAnimation = $("#icon_top");
  function scrollSmooth() {
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
      iconAnimation.on("click", scrollSmooth);
    } else {
      iconAnimation.on("click", scroll);
    }
  }

  var desiredPosition = 500;
  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition >= desiredPosition) {
      $("#div_up").css("display", "block");
    } else {
      $("#div_up").css("display", "none");
    }
  });

  addEventListenerBasedOnWidth();
  $(window).on("resize", function () {
    if (iconAnimation.off) {
      iconAnimation.off("click", scrollSmooth);
    } else {
      iconAnimation.unbind("click", scroll);
    }
    addEventListenerBasedOnWidth();
  });

  $(".div_number:nth-child(1)").on("click", removeFilters);
  $(".div_number:nth-child(2)").on("click", applyGrayscaleToHalf);

  function removeFilters() {
    const $images = $("#imageContainer img");
    $images.removeClass("grayscale-filter");
  }
  function applyGrayscaleToHalf() {
    const $images = $("#imageContainer img");
    $images.each(function (index) {
      if (index < $images.length / 2) {
        $(this).addClass("grayscale-filter");
      } else {
        $(this).removeClass("grayscale-filter");
      }
    });
  }

  var $on = $("#on");
  var $video = $("video");
  $on.on("click", () => {
    $on.css("display", "none");
    $video[0].play();
    $video[0].controls = true;
  });

  var $buttonCreate = $("#button_create");
  var $buttonLogin = $("#button_login");
  var $colorButton = $("#color_button");
  var $form1 = $("#form1");
  var $form2 = $("#form2");
  $buttonCreate.on("click", function () {
    $buttonLogin.css("color", "black");
    $buttonCreate.css("color", "white");
    $colorButton.css("--before_left", "52%");
    $colorButton.css("--before_border", "0 10px 10px 0");
    $form1.css("display", "none");
    $form2.css("display", "flex");
  });
  $buttonLogin.on("click", function () {
    $buttonCreate.css("color", "black");
    $buttonLogin.css("color", "white");
    $colorButton.css("--before_left", "0");
    $colorButton.css("--before_border", "10px 0 0 10px");
    $form1.css("display", "flex");
    $form2.css("display", "none");
  });

  var $buttonCreate1 = $("#button_create1");
  var $buttonLogin1 = $("#button_login1");
  var $colorButton1 = $("#color_button1");
  $buttonCreate1.on("click", function () {
    $buttonLogin1.css("color", "black");
    $buttonCreate1.css("color", "#05D35D");
    $colorButton1.css("--before_left", "48%");
  });
  $buttonLogin1.on("click", function () {
    $buttonCreate1.css("color", "black");
    $buttonLogin1.css("color", "#05D35D");
    $colorButton1.css("--before_left", "2%");
  });

  $(".div_number").each(function () {
    $(this).on("click", function () {
      $(".mouse_click").removeClass("div_iconsearch");
      $(this).addClass("div_iconsearch");
    });
  });

  $("input[type='checkbox']").change(function () {
    var isChecked = $(this).prop("checked");
    var checkboxId = $(this).attr("id");
    if (isChecked) {
      $(".div_news img[data-title='" + checkboxId + "']").css(
        "filter",
        "grayscale(100%)"
      );
    } else {
      $(".div_news img[data-title='" + checkboxId + "']").css("filter", "none");
    }
  });

  $(".image_search").on("click", function () {
    let value = $("#solutionSearchInput").val().toLowerCase();
    $(".div_news").each(function () {
      let title = $(this).find("img").attr("data-title").toLowerCase();
      if (title.includes(value) || value === "") {
        $(this).css("filter", "none");
      } else {
        $(this).css("filter", "grayscale(100%)");
      }
    });
  });

  $("#icon_click").click(function () {
    if (bollen) {
      $("#icon_true").css("opacity", "0");
      $("#icon_false").css("opacity", "1");
      $(".div_childimage .icon_left").each(function (index) {
        var rightPosition = (4 - index) * 60 + 70;
        $(this).css("right", rightPosition + "px");
      });
      bollen = false;
    } else {
      $("#icon_true").css("opacity", "1");
      $("#icon_false").css("opacity", "0");
      $(".div_childimage .icon_left").each(function (index) {
        var rightPosition = index * 0 + 10;
        $(this).css("right", rightPosition + "px");
      });
      bollen = true;
    }
  });

  $(".div_column #news").each(function () {
    var newsText = $(this).text();
    if (newsText === "news") {
    } else if (newsText === "Partnership") {
      $(this).closest(".div_new").css("background-color", "#3b60643e");
      $(this).closest(".div_new").css("color", "#3B6064");
    }
  });

  $(".toggle_all").click(function () {
    $(".blog_hover").removeClass("active_blog");
    $(this).addClass("active_blog");
    if ($(this).hasClass("show")) {
      $(this).removeClass("color_black");
      $(".toggle_all").removeClass("new-content");
      $(this).addClass("new-content");
    } else {
      $(this).addClass("color_black");
      $(".toggle_all").removeClass("new-content");
    }
  });
  $(document).on("click", function (e) {
    if (!$(e.target).hasClass("toggle_all")) {
      $(".toggle_all").addClass("color_black");
      $(".toggle_all").removeClass("new-content");
    }
  });

  var defaultSources = [
    "images/images_about/lynnc3.png",
    "images/images_about/lynnc2.png",
    "images/images_about/lynnchome.png",
    "images/images_about/lynnc2.png",
    "images/images_about/lynnc3.png",
  ];

  setInterval(function () {
    var imageElements = $(".image_lynnc");
    if (imageElements.length > 0) {
      imageElements.eq(0).attr("src", "images/images_about/lynnc1.png");
      setTimeout(() => {
        imageElements.eq(0).attr("src", "images/images_about/lynnchome.png");
        imageElements.eq(4).attr("src", "images/images_about/lynnchome.png");
      }, 50);
      setTimeout(() => {
        imageElements.eq(0).attr("src", "images/images_about/lynnc1.png");
        imageElements.eq(4).attr("src", "images/images_about/lynnc1.png");
      }, 100);
      imageElements.eq(1).attr("src", "images/images_about/lynnc3.png");
      setTimeout(() => {
        imageElements.eq(1).attr("src", "images/images_about/lynnchome.png");
        imageElements.eq(3).attr("src", "images/images_about/lynnchome.png");
      }, 1800);
      setTimeout(() => {
        imageElements.eq(1).attr("src", "images/images_about/lynnc3.png");
        imageElements.eq(3).attr("src", "images/images_about/lynnc3.png");
      }, 1850);
      imageElements.eq(3).attr("src", "images/images_about/lynnc3.png");
      imageElements.eq(4).attr("src", "images/images_about/lynnc1.png");
      setTimeout(() => {
        imageElements.eq(1).attr("src", "images/images_about/lynnc2.png");
        imageElements.eq(3).attr("src", "images/images_about/lynnc2.png");
        imageElements.eq(2).attr("src", "images/images_about/lynnc3.png");
        setTimeout(() => {
          imageElements.eq(2).attr("src", "images/images_about/lynnchome.png");
        }, 5000);
        setTimeout(() => {
          imageElements.eq(2).attr("src", "images/images_about/lynnc3.png");
        }, 5050);
        setTimeout(() => {
          for (var i = 0; i < imageElements.length; i++) {
            imageElements.eq(i).attr("src", defaultSources[i]);
          }
        }, 2000);
      }, 2000);
    }
  }, 5000);

  var $colorRangeInputs = $(".textColorRange");
  var $paragraphs = $(".span_size");
  $colorRangeInputs.on("input", function () {
    var textColorValue = $(this).val();
    var textColor = "rgb(" + textColorValue + ", 0, 0)";
    var index = $colorRangeInputs.index(this);
    $paragraphs.eq(index).css("color", textColor);
  });

  new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
