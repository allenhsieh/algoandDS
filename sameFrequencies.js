function sameFrequency(num1, num2) {
  let string1 = num1.toString();
  let string2 = num2.toString();
  if (string1.length !== string2.length) {
    return false;
  }
  let counter1 = {};
  for (let letter1 of string1) {
    counter1[letter1] ? counter1[letter1] += 1 : counter1[letter1] = 1;
  }
  for (let letter2 of string2) {
    if (!counter1[letter2]) {
      return false;
    } else {
      counter1[letter2] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(112, 211));