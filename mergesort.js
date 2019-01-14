function split(arr) {
  const middle = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middle);
  const secondHalf = arr.slice(middle);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const splitArr = split(arr);
  const firstHalf = mergeSort(splitArr[0]);
  const secondHalf = mergeSort(splitArr[1]);
  return merge(firstHalf, secondHalf);
}