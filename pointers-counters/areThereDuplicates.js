function areThereDuplicates() {
  let lookup = {};
  for (let i = 0; i < arguments.length; i++) {
    if (lookup[arguments[i]]) {
      return true;
    } else {
      lookup[arguments[i]] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(0, 1, 2));