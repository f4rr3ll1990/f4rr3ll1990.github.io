let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let productData;

$(".product-card__buttons .btn").click(function (e) {
  productData = {
    name: $(this).data("name"),
    price: $(this).data("price"),
    productId: $(this).data("product")
  };
  console.log(productData);
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    tg.MainButton.setText(`Купить: "${productData.name}"`);
    tg.MainButton.show();
  }
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData(JSON.stringify(productData));
});

$("#info").html(`${tg.initDataUnsafe.user.first_name}`);

$("#data").html(`${JSON.stringify(tg.initDataUnsafe)}`);



