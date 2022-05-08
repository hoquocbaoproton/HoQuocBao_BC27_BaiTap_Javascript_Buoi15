var checkValue = function (location, object) {
  switch (location) {
    case '':
      location = 0;
      break;
    case 'a':
      location = 2;
      break;
    case 'b':
      location = 1;
      break;
    case 'c':
      location = 0.5;
      break;
  }

  switch (object) {
    case 1:
      object = 2.5;
      break;
    case 2:
      object = 1.5;
      break;
    case 3:
      object = 1;
      break;
  }
  return [location, object];
};

var showResult = function () {
  var standard = +document.getElementById('standard__ex-1').value;
  var location = document.getElementById('location__ex-1').value;
  var object = +document.getElementById('object__ex-1').value;
  var subject1 = +document.getElementById('subject1__ex-1').value;
  var subject2 = +document.getElementById('subject3__ex-1').value;
  var subject3 = +document.getElementById('subject3__ex-1').value;
  var text = document.getElementById('result-ex-1');

  var sumSubjects;

  if (subject1 === 0 || subject2 === 0 || subject3 === 0) {
    text.textContent =
      '🥲 Bạn đã rớt. Thi lần 2 nhớ đánh full C, auto 2.5 điểm';
    return;
  } else {
    sumSubjects = subject1 + subject2 + subject3;
  }

  var [location, object] = checkValue(location, object);

  console.log(sumSubjects, location, object);

  var finalSum = sumSubjects + location + object;
  if (finalSum < standard) {
    return (text.textContent = '🥲 Bạn đã rớt.');
  } else {
    return (text.textContent = `🥳 Bạn đã đậu với số điểm ${finalSum}`);
  }
};
