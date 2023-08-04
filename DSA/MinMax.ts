function findMinMax(arr: number[]): { min: number; max: number } {
  if (arr.length === 0) {
    throw new Error("Array is Empty");
  }

  if (arr.length === 1) {
    return {
      min: arr[0],
      max: arr[0],
    };
  }

  let min = arr[0];
  let max = arr[0];

  for (const number of arr) {
    if (min > number) min = number;
    if (max < number) max = number;
  }
  return {
    min,
    max,
  };
}


console.log( findMinMax([1000, 11, -445, 1, 330, 3000]));

