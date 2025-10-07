(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recall = function () {
      var clientWidth = win.innerWidth;
      if (!clientWidth) return;
      if (clientWidth > 1920) {
        clientWidth = 1920;
      }
      if (clientWidth <= 1920 && clientWidth > 1024) {
        docEl.style.fontSize = 100 * (clientWidth / 1920) + "px";
      } else if (clientWidth <= 1024 && clientWidth >= 768) {
        docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
      } else if (clientWidth < 768) {
        docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
      }
    };
  if (!doc.addEventListener) return;
  recall();
  win.addEventListener(resizeEvt, recall, false);
  doc.addEventListener("DOMContentLoaded", recall, false);
})(document, window);
