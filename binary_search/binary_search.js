function binarySearch(list, item) {
    let start = 0;
    let finish = list.length - 1
    let counter = 0

    while (start <= finish) {
        let midIndex = Math.floor((start + finish) / 2)
        let midResult = list[midIndex]

        if (item === midResult) {
            return {
                counter: counter,
                result: midResult,
                index: midIndex
            }
        } else if (midResult > item) {
            counter++
            finish = midIndex - 1
        } else {
            counter++
            start = midIndex + 1
        }
    }

    return null
}

console.log(binarySearch([1, 3, 5, 7, 9], -10));
console.log(binarySearch([1, 3, 5, 7, 9], 5));
console.log(binarySearch([1, 3, 5, 7, 9], 9));
console.log(binarySearch(fillArray(128), 128));
console.log(binarySearch(fillArray(256), 256));

function fillArray(n) {
    arr = [];
    for (i = 1; i <= n; ++i) {
        arr.push(i);
    }
    return arr;
}