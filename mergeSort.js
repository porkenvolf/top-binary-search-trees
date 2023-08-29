/* Build a function mergeSort that takes in an array and returns 
a sorted array, using a recursive merge sort methodology. */

export default function mergeSort(array) {
    // Exit condition
    if (array.length <= 1) return array;

    // Break the array in two halves
    const breakPoint = Math.floor(array.length / 2);
    const leftHalf = [...array];
    const rightHalf = leftHalf.splice(breakPoint);

    // divide left half
    const sortLeft = mergeSort(leftHalf);

    // divide right half
    const sortRight = mergeSort(rightHalf);

    return merge(sortLeft, sortRight);
}

function merge(array1, array2) {
    // both must be sorted already
    let output = [];
    let i = 0;
    let j = 0;
    while (true) {
        if (array1[i] <= array2[j]) {
            output.push(array1[i]);
            i++;
        } else if (array1[i] > array2[j]) {
            output.push(array2[j]);
            j++;
        } else if (!array1[i]) {
            const tmp = [...array2];
            output = output.concat(tmp.splice(j));
            break;
        } else if (!array2[j]) {
            const tmp = [...array1];
            output = output.concat(tmp.splice(i));
            break;
        }
    }
    return output;
}
