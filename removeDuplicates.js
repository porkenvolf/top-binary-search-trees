export default function removeDuplicates(sortedArray) {
    const output = [];
    output[0] = sortedArray[0];
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] !== output[output.length - 1])
            output.push(sortedArray[i]);
    }
    return output;
}
