function findSmallIndex(arr) {
  let smallNum = arr[0];
  let smallIndex = 0;

  for (let i in arr) {
    if (arr[i] < smallNum) {
      smallNum = arr[i];
      smallIndex = i;
    }
  }

  return smallIndex;
}

function selectionSort(nums) {
  let arr = new Array();
  let smallest_index;
  for (let j = 0, length = nums.length; j < length; j++) {
    smallest_index = findSmallIndex(nums);
    arr[j] = nums.splice(smallest_index, 1);
  }

  return arr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
