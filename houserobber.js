var rob = function(nums) {
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // if a space exists 2 spaces back
    if (nums[i - 2]) {
      // init a max variable and set it to the value at current index + value at index - 2
      let max = nums[i] + nums[i-2];
      // loop backwards from index - 3 until 0
      for (let j = i - 3; j >= 0; j--) {
        // if current index value + backward loop index is greater than current Max
        if (max < nums[i] + nums[j]) {
          // set it to current max
          max = nums[i] + nums[j];
        }
      }
      // change current value at i to max value
        nums[i] = max;
    }
  }
  return Math.max(nums[nums.length - 1], nums[nums.length - 2])
}