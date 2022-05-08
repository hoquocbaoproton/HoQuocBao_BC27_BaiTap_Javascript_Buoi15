const selectCustomer = document.getElementById('customer_ex4');
const connectInput = document.getElementById('connectNumbers_ex4');
const btnShowResult = document.getElementById('btn__results-ex-4');
const result = document.getElementById('result-ex-4');

const changeCustomer = function () {
  if (selectCustomer.value === 'corp') {
    connectInput.classList.remove('hidden');
  } else {
    connectInput.classList.add('hidden');
  }
};

selectCustomer.addEventListener('change', changeCustomer);

btnShowResult.addEventListener('click', function () {
  const customerId = document.getElementById('customerId_ex4').value;
  const premiumChannels = +document.getElementById('premiumChannels_ex4').value;
  const connectNumbers = connectInput.value;

  let billFee;
  let basicFee;
  let premiumHire;
  let sumBill;

  if (!btnShowResult) return;

  if (selectCustomer.value === 'civil') {
    billFee = 4.5;
    basicFee = 20.5;
    premiumHire = 7.5 * premiumChannels;
    sumBill = billFee + basicFee + premiumHire;
  } else if (selectCustomer.value === 'corp') {
    billFee = 15;
    connectNumbers <= 10
      ? (basicFee = 75)
      : (basicFee = 75 + 5 * (connectNumbers - 10));
    premiumHire = 50 * premiumChannels;
    sumBill = billFee + basicFee + premiumHire;
  } else {
    result.innerHTML = `bạn chưa chọn loại cable`;
    return;
  }

  result.innerHTML = `Mã khách hàng ${customerId}; tiền cáp ${sumBill}$`;
});
