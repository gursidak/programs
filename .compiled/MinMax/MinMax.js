function findMinMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is Empty");
    }
    if (arr.length === 1) {
        return {
            min: arr[0],
            max: arr[0]
        };
    }
    var min = arr[0];
    var max = arr[0];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var number = arr_1[_i];
        if (min > number)
            min = number;
        if (max < number)
            max = number;
    }
    return {
        min: min,
        max: max
    };
}
console.log(findMinMax([1000, 11, -445, 1, 330, 3000]));
