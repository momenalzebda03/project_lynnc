$(document).ready(function () {
  var bollen = true;
  $("#button_click").click(function () {
    if (bollen) {
      $("#menu").removeClass("fas fa-bars").addClass("fas fa-times");
      bollen = false;
    } else {
      $("#menu").removeClass("fas fa-times").addClass("fas fa-bars");
      bollen = true;
    }
  });

  $(".section_solutions").hover(
    function () {
      $(this).parent().find(".link_color").addClass("active");
      $("#link_color").removeClass("active");
    },
    function () {
      $(this).parent().find(".link_color").removeClass("active");
      $("#link_color").addClass("active");
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
  $on.on("click", function () {
    if (bollen) {
      $video[0].play();
      bollen = false;
    } else {
      $video[0].pause();
      bollen = true;
    }
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

  $(".div_number").each(function () {
    $(this).on("click", function () {
      $(".mouse_click").removeClass("div_iconsearch");
      $(this).addClass("div_iconsearch");
    });
  });

  $(document).ready(function () {
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
  });

  var swiper = new Swiper(".mySwiper", {
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
