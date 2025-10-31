// 01
// const start = performance.now();

// for (let i = 0; i < 500; i++) {
//     console.log(i);
// }
// const end = performance.now();
// console.log(`This code took ${end - start} ms`);

// 02
// console.time("task");
// for (let i = 0; i <= 600000; i++) {
//     console.log(i);
// }
// console.timeEnd("task");

// 03
// const firstArray = []
// const secondArray = []
// for (let i = 0; i < 600000; i++) {
//     if (i < 300000) {
//         firstArray.push(i);
//     }
//     secondArray.push(i);
// }

// console.log("first array", firstArray.length);
// console.log("second array", secondArray.length);

// console.time("map1");
// const firstUserList = firstArray.map((number) => ({ userId: number }));
// console.timeEnd("map1");

// console.time("map2");
// const secondUserList = secondArray.map((number) => ({ userId: number }));
// console.timeEnd("map2");

// 04
// const firstArray = []
// const secondArray = []
// for (let i = 0; i < 600000; i++) {
//     if (i < 300000) {
//         firstArray.push(i);
//     }
//     secondArray.push(i);
// }

// console.log("first array", firstArray.length);
// console.log("second array", secondArray.length);

// const firstUserList = firstArray.map((number) => ({ userId: number }));
// const secondUserList = secondArray.map((number) => ({ userId: number }));

// console.time("find")
// const user = secondUserList.find((user) => user.userId === 500000)
// console.timeEnd("find")

// 05
// const firstArray = []
// const secondArray = []
// for (let i = 0; i < 600000; i++) {
//     if (i < 300000) {
//         firstArray.push(i);
//     }
//     secondArray.push(i);
// }

// console.log("first array", firstArray.length);
// console.log("second array", secondArray.length);

// const firstUserList = firstArray.map((number) => ({ userId: number }));
// const secondUserList = secondArray.map((number) => ({ userId: number }));

// console.time("find")
// // const user = secondUserList.find((user) => user.userId === 500000)
// const user = secondUserList[500000]
// console.timeEnd("find")

// 06
// const set = new Set();
// set.add("apple");
// set.add("banana");
// set.add("mango");
// set.add("apple") //(note) duplicat data she nayna

// console.log(set);

// 07
// const mezba = { userName: "Mezba" }
// const mizan = { userName: "Mizan" }
// const tanmoy = { userName: "Tanmoy" }

// const set = new Set();
// set.add("mizan");
// set.add("mezba");
// set.add("tanmoy");
// set.add("mizan")
// console.log(set.size);

// 08
// const arr = ["apple", "mango", "banana", "apple"];
// const set = new Set(arr);
// const newArr = Array.from(set);
// // array korar por push kora jabe
// newArr.push("tomato");
// console.log(newArr);

// 09
// const arr = ["apple", "mango", "banana", "apple"];
// const set = new Set(arr);
// console.log(set.delete("tomato"));
// console.log(set);

// Brute Force
// 10
// const arr = ["apple", "banana", "mango", "apple"];

// const removeDupArr = (arr) => {
//     const newArr = [];
//     arr.forEach(element => {
//         if (!newArr.includes(element)) {
//             newArr.push(element);
//         }
//     });
//     return newArr;
// }

// console.log(removeDupArr(arr));

// set implementation
// 11
// const arr = ["apple", "banana", "mango", "apple"];
// const removeDupSet = (arr) => {
//     const set = new Set(arr);
//     return Array.from(set);
// }

// console.log(removeDupSet(arr));

function generateSimleData(size) {
    const itemPool = [
        "Apple",
        "Mango",
        "Banana",
        "Dragon",
        "Grap",
        "Strawberry",
        "Pineapple",
        "Watermelon",
        "Cherry",
        "Bluberry",
    ];
    const generatedData = [];
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * itemPool.length);
        generatedData.push(itemPool[randomIndex]);
    }
    return generatedData;
}

const hugeDataSet = generateSimleData(500000);
console.log("Data size", hugeDataSet.length6);

// Brute Force
const arrStartTime = performance.now();
const removeDupArr = (arr) => {
    const newArr = [];
    arr.forEach((element) => {
        if (!newArr.includes(element)) {
            newArr.push(element)
        }
    });
    return newArr
}
const arrEndTime = performance.now();
console.log(`Array Implementation took ${arrEndTime - arrStartTime}`);

// Set implementation
const setStartTime = performance.now();
const removeDupSet = (arr) => {
    const set = new Set(arr);
    return Array.from(set);
};
console.log(removeDupSet(hugeDataSet));
const setEndTime = performance.now();
console.log(`Set Implementaion took ${setEndTime - setStartTime}`);