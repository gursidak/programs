function QuickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const smaller = [];
  const larger = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      smaller.push(arr[i]);
    } else {
      larger.push(arr[i]);
    }
  }

  return QuickSort(larger).concat(pivot, QuickSort(smaller));
}

const testInputs = [[6, 2, 8, 1, 4, 3, 7]];

const res = QuickSort(testInputs[0]);

console.log([...res]);
