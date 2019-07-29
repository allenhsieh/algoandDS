function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (let letter1 of str1) {
    console.log('letter1', letter1);
    lookup[letter1] ? lookup[letter1] += 1 : lookup[letter1] = 1;
  }
  for (let letter2 of str2) {
    console.log('letter2', letter2);
    if (!lookup[letter2]) {
      return false
    } else {
      lookup[letter2] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('qqz', 'qzz'));
// BAD
// function validAnagram(str1, str2){
//   // add whatever parameters you deem necessary - good luck!
//   if (str1.length !== str2.length) {
//       return false;
//   }
//   if ((str1.length === str2.length) && str1.length === 0) {
//     return true;
//   }
//   var counter1 = {};
//   var counter2 = {};
//   for (let letter1 of str1) {
//       counter1[letter1] = (counter1[letter1] || 0) + 1;

//   }
//   for (let letter2 of str2) {
//       counter2[letter2] = (counter2[letter2] || 0) + 1;
//   }
//   for (let countLetter in counter1) {
//       if (counter1[countLetter] !== counter2[countLetter]) {
//           return false;
//       }
//   }
//   return true;
// }

// console.log(validAnagram('', ''));