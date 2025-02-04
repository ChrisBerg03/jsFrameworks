const array = [1, 2, 3, 4];

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

function reverseArr(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// console.log(reverseArr(array));

function doubleArr(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
// same as the above just a shorthand
const mapDoubled = array.map((item) => item * 2);
// console.log(mapDoubled);

// console.log(doubleArr(array));

function sortArr(arr) {}

function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
// const toReversed = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// reverseInPlace(toReversed);
// console.log(toReversed);
