/** Init global the app variable **/
if (typeof App === "undefined") var App = {};

/** Init global Select2 input **/
$(document).ready(() => {
  // View more
  $(".viewmore").on("click", function () {
    $("body .rever__detail--viewmore").addClass("active");
    $("body .collapses").removeClass("hidden");
    $("body .collapses").addClass("active");
    $(this).removeClass("active");
    $(this).addClass("hidden");
  });
  $(".collapses").on("click", function () {
    $("body .rever__detail--viewmore").removeClass("active");
    $("body .viewmore").removeClass("hidden");
    $("body .viewmore").removeClass("active");
    $("body .viewmore").addClass("active");
    $(this).addClass("hidden");
  });
  $(".close-blue").on("click", function () {
    $("body .weonline247").addClass("close");
  });
  var s = $(".sticker");
  var pos = s.position();
  $(window).scroll(function () {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });
  $(".cta-form.request-info").on("click", function () {
    $("body .form-247").toggleClass("active");
    $("body").append('<div class="mdialog"></div>');
  });

  $(".close-popup-btn").on("click", function () {
    $("body .form-247").removeClass("active");
    $("body .mdialog").remove();
  });
  $(".carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
      },
      992: {
        items: 1,
        nav: true,
        margin: 0,
      },
    },
  });
  $(".groups-select").on("click", function () {
    // $(this).find('.list').removeClass('hide');
    $(this).find(".list").show();
    $(".light-bg").show();
  });
  $(".light-bg").on("click", function () {
    $(".list").hide();
    $(this).hide();
  });
  $(".list span").on("click", function () {
    let value = $(this).text();
    let valueSelect = $(this).parent().find("~#value-select").val();
    valueSelect = value;
    $(this).parent().parent().find("#value-select").val(value);
    // $(this).parent().parent().find(".list").addClass("hide");
    $('body .list').hide();
  });
});
