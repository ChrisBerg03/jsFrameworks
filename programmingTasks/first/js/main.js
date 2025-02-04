const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const count = 0;

function loop() {
    // for looping over array and changing them
    for (let i = 0; i <= 10; i++) {
        console.log("basic for loop", i);
    }
}

let limit = 10;
function limitLoop() {
    for (let i = 0; i < limit; i++) {
        console.log("limit loop", i);
    }
}

let i = 0;

function whileLoop() {
    while (i <= limit) {
        console.log("while loop", i);
        i++;
    }
}

function forEachArrLoop() {
    // for looping over arrays
    arr.forEach((item) => {
        console.log("forEach loop", item);
    });
}

function arrForloop() {
    for (let i = 0; i <= arr.length; i++) {
        console.log("looping over arr with basic forLoop", i);
        // break;
        // return;
        // continue;
    }
}

function forOfLoop() {
    for (const item of arr) {
        console.log(item);
    }
}

function inLoop() {
    for (const i in arr) {
        console.log(arr[i]);
    }
}
