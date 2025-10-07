// 公共头部显隐
$(document).ready(function () {
  var p = 0,
    t = 10;
  $(window).scroll(function (e) {
    p = $(this).scrollTop();
    if (t <= p) {
      //向下滚
      $("header").css("opacity", 0);
      $("#header-box > div > div.mb-only > div.language-list").css(
        "opacity",
        0
      );
      $("#header-box > div > div.pc-pad > div").css(
        "opacity",
        0
      );
      
    } else {
      //向上滚
      $("header").css("opacity", 1);
    }
    setTimeout(function () {
      if (p < 0) {
        t = p + 2;
      } else {
        t = p;
      }
    }, 0);
  });
});
