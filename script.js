document.addEventListener("DOMContentLoaded", function(c) {
    window.addEventListener("load", function(c) {
        function a() {
            b += 2.5;
            d.setAttribute("transform", "translate(" + b + ")");
            e.setAttribute("transform", "translate(" + b + ")");
            900 <= Math.abs(b) && (b = 0);
            requestAnimationFrame(a);
        }
        var b = 0,
            d = document.getElementById("top"),
            e = document.getElementById("bottom");
        window.requestAnimationFrame(a) || window.webkitRequestAnimationFrame(a) || window.mozRequestAnimationFrame(a) || window.oRequestAnimationFrame(a) || window.msRequestAnimationFrame(a);
    }, !1);
});



let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "QWERTY";

let btn = document.getElementById("testbtn");

btn.addEventListener("click", function() {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText(`Вы нажали на кнопку: "${item}"`);
    tg.MainButton.show();
  }
});

Telegram.WebApp.onEvent("mainButtonClicked", function() {
  tg.sendData(item);
});
