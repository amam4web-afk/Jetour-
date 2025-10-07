// 头部显隐
$(document).ready(function () {
  var p = 0;
  $(window).scroll(function (e) {
    p = $(this).scrollTop();
    //  console.log("top",p,p == 500)
    if (p >= 500) {
        $("header").css("display", "none");
    } else {
        $("header").css("display", "flex");
    }
  });
});
