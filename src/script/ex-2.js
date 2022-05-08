var showResultEx2 = function () {
  var name = document.getElementById('name_ex2').value;
  var kw = +document.getElementById('kw_ex2').value;
  var result = document.getElementById('result-ex-2');

  var paid = calcPayment(kw);

  result.innerHTML = `Số tiền mà <span style="color:blue">${name}</span>  phải trả là: <span style="color:tomato">${paid}</span> đồng`;
};

var calcPayment = function (kw) {
  var paymentMoney;
  var first50kw = 500;
  var from50kwTo100 = 650;
  var from100kwTo150 = 850;
  var from150kwTo200 = 1100;
  var above200kw = 1300;
  if (kw < 50) {
    paymentMoney = kw * first50kw;
    return paymentMoney;
  } else if (kw >= 50 && kw < 100) {
    paymentMoney = 50 * first50kw + (kw - 50) * from50kwTo100;
    return paymentMoney;
  } else if (kw >= 100 && kw < 150) {
    paymentMoney =
      50 * (first50kw + from50kwTo100) + (kw - 100) * from100kwTo150;
    return paymentMoney;
  } else if (kw >= 150 && kw < 200) {
    paymentMoney =
      50 * (first50kw + from50kwTo100 + from100kwTo150) +
      (kw - 150) * from150kwTo200;
    return paymentMoney;
  } else {
    paymentMoney =
      50 * (first50kw + from50kwTo100 + from100kwTo150 + from150kwTo200) +
      (kw - 200) * above200kw;
    return paymentMoney;
  }
};
