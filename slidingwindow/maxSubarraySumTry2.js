function maxSubarraySum(arr, num){
  if (arr.length < num) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}