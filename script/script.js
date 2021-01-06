$("a[href^='#']").on("click", function (ev) {
    ev.preventDefault();

    let target = this.hash;
    target = $(target);

    $("html, body").animate({
        "scrollTop": target.offset().top
    }, 2000, "swing")
})

$(window).scroll(function() {
    if($(window).scrollTop() > 300) {
      $('i').css({"opacity":"1", "pointer-events":"auto"});
    } else {
      $('i').css({"opacity": "0", "pointer-events": "none"});
    }
  });

  $('i').on("click", function() {
    $('html').animate({scrollTop: 0}, 2000, "swing");
  });

  $(".hide-arrow").on("click", () => {
      $("i").slideToggle();
  })