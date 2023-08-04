export function maxSubArrayUsingKadane(arr: number[]) {
  let hasPositive = false;
  let hasNegative = false;

  let maxNumber = Number.NEGATIVE_INFINITY;
  let sum = 0;

  for (const num of arr) {
    if (num >= 0) {
      hasPositive = true;
    } else if (num < 0) {
      hasNegative = true;
    }
    if (num > maxNumber) maxNumber = num;
    sum += num;
  }

  if (hasPositive && !hasNegative) {
    console.log("ALL PSTIVE");

    const sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  }
  if (hasNegative && !hasPositive) {
    return maxNumber;
  }

  if (hasPositive && hasNegative) {
    console.log("MIXED");

    /* Kadane's algo  logic  */
    let maxSum = 0;
    let currSum = 0;
    for (const number of arr) {
      currSum += number;

      if (currSum > maxSum) maxSum = currSum;

      if (currSum < 0) currSum = 0;
    }
    return maxSum;
  }
}

const input = [
  [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  [5, 4, -1, 7, 8],
  [-5, -6, -1, -66, -100, -45],
  [
    -84, -87, -78, -16, -94, -36, -87, -93, -50, -22, -63, -28, -91, -60, -64,
    -27, -41, -27, -73, -37, -12, -69, -68, -30, -83, -31, -63, -24, -68, -36,
    -30, -3, -23, -59, -70, -68, -94, -57, -12, -43, -30, -74, -22, -20, -85,
    -38, -99, -25, -16, -71, -14, -27, -92, -81, -57, -74, -63, -71, -97, -82,
    -6, -26, -85, -28, -37, -6, -47, -30, -14, -58, -25, -96, -83, -46, -15,
    -68, -35, -65, -44, -51, -88, -9, -77, -79, -89, -85, -4, -52, -55, -100,
    -33, -61, -77, -69, -40, -13, -27, -87, -95, -40,
  ],
];

const res = maxSubArrayUsingKadane(input[1]);

console.log(res);
