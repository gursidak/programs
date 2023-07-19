/*  -------- This is O(n²) method -------- */

function maxSubArray(nums: number[]): {
  maxSum: number;
  maxSumSubArray: number[];
} {
  let subArrays: number[][] = [];
  let maxSum = Number.NEGATIVE_INFINITY;
  let maxSumSubArray = [];
  let i = 0,
    j = 0;
  for (i = 0; i < nums.length; i++) {
    subArrays.push([nums[i]]);
    for (j = i + 1; j < nums.length; j++) {
      const temp = subArrays[subArrays.length - 1];
      subArrays.push([...temp, nums[j]]);
    }
  }

  for (let i = 0; i < subArrays.length; i++) {
    const sum = subArrays[i].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    if (sum > maxSum) {
      maxSum = sum;
      maxSumSubArray = subArrays[i];
    }
  }

  return { maxSum, maxSumSubArray };
}

const res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

console.log(res);
