var message = {
  currentWindowsId: 0,
  success: function (i, t) {
    this.show(i), this.delayClose(1500, t);
  },
  close: function () {
    this.currentWindowsId = 0;
    var i = document.getElementById("global-message");
    if (null != i) {
      var t = i.parentNode;
      null != t && t.removeChild(i);
    }
    var e = document.getElementById("global-message");
    if (null != e) {
      var l = e.parentNode;
      null != l && l.removeChild(e);
    }
  },
  delayClose: function (i, t) {
    var e = parseInt(1e5 * Math.random());
    this.currentWindowsId = e;
    var l = this;
    setTimeout(function () {
      l.currentWindowsId == e && l.close(), null != t && t();
    }, i);
  },
  show: function (i) {
    var l = document.createElement("div");
    (l.id = "global-message"),
      (l.innerHTML = `<div class="message">
        ${i}
      </div>`),
      document.getElementsByTagName("body")[0].appendChild(l);
  },
};
