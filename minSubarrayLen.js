function minSubArrayLen(arr, target) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  while (start < arr.length) {
    if (total < sum && arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end-start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  if (minLen === infinity) {
    minLen = 0;
  }
  return minLen;
}