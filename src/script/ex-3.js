var showResultEx3 = function () {
  var incomePerYear = +document.getElementById('money_ex3').value;
  var personDepend = +document.getElementById('person_ex3').value;
  var result = document.getElementById('result-ex-3');

  if (incomePerYear < 10000000) {
    alert(`Đánh thuế người nghèo là một tội ác`);
    return;
  }

  var money = calcTax(incomePerYear, personDepend);
  var formattedNumber = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(money);
  result.innerHTML = `Số tiền thuế phải chịu là: ${formattedNumber} `;
};

var calcTax = function (incomePerYear, personDepend = 0) {
  // mình làm theo công thức trong demo, không theo công thức tính tiền grab, vì mình cũng không biết làm theo công thức nào khi trong demo nói rằng CÓ THỂ dùng công thức tính grab => mình nghĩ không bắt buộc phải theo vậy ạ.

  var taxRate; //%
  var taxableIncome = incomePerYear - 4e6 - personDepend * 1.6e6;
  var taxIncome;

  if (incomePerYear <= 60e6) {
    taxRate = 0.05;
    taxIncome = taxRate * taxableIncome;
    return taxIncome;
  } else if (incomePerYear > 60e6 && incomePerYear <= 120e6) {
    taxRate = 0.1;
    taxIncome = taxRate * taxableIncome;
    return taxIncome;
  } else if (incomePerYear > 120e6 && incomePerYear <= 210e6) {
    taxRate = 0.15;
    taxIncome = taxRate * taxableIncome;
    return taxIncome;
  } else if (incomePerYear > 210e6 && incomePerYear <= 384e6) {
    taxRate = 0.2;
    taxIncome = taxRate * taxableIncome;
    return taxIncome;
  } else if (incomePerYear > 384e6 && incomePerYear <= 624e6) {
    taxRate = 0.25;
    taxIncome = taxRate * taxableIncome;
    return taxIncome;
  } else if (incomePerYear > 624e6 && incomePerYear <= 960e6) {
    taxRate = 0.3;
    taxIncome = taxRate * taxableIncome;
    return taxIncome;
  } else {
    taxRate = 0.35;
    taxIncome = taxRate * taxableIncome;
    return taxIncome;
  }
};
