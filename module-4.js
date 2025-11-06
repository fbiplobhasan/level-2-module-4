// Video (1)

// const dataCache = new Map();

// const expensiveTask = (id) => {
//     console.log("ran the expensive task for: ", id);
//     return {
//         id: id,
//         data: `Some data for id ${id}`,
//         timestamp: new Date().getTime(),
//     }
// }

// const getData = (id) => {
//     if (dataCache.has(id)) {
//         console.log("Cash hit for id: ", id);
//         return dataCache.get(id)
//     }
//     console.log("Cash miss for id: ", id);
//     const data = expensiveTask(id);
//     dataCache.set(id, data)
//     return data
// }

// console.log(dataCache);
// console.log(getData(123));
// console.log(getData(123));
// console.log(dataCache);

// Video(2)
// const USER_COUNT = 50000;
// let usersA = [];
// let usersB = [];

// const createUser = (id) => ({ id: `user_${id}`, name: `User${id}` });

// for (let i = 0; i < USER_COUNT; i++) {
//     usersA.push(createUser(i));
//     usersB.push(createUser(i + 25000));
// }

// const commonFriendsSlow = (usersA, usersB) => {

//     const startTime = performance.now()

//     const commonFriends = [];

//     usersA.forEach((userA) => {
//         usersB.forEach((userB) => {
//             if (userA.id === userB.id) {
//                 commonFriends.push(userB)
//             }
//         })
//     })
//     const endTime = performance.now()
//     return { count: commonFriends.length, timeTookFinish: endTime - startTime }
// }

// console.log(commonFriendsSlow(usersA, usersB));

// const commonFriendsFast = (usersA, usersB) => {

//     const startTime = performance.now()

//     const commonFriends = [];
//     const idListA = new Set(usersA.map((user) => user.id))
//     console.log(idListA);

//     usersB.forEach((userB) => {
//         if (idListA.has(userB.id)) {
//             commonFriends.push(userB)
//         }
//     })
//     const endTime = performance.now()

//     return { count: commonFriends.length, timeTookFinish: endTime - startTime }
// }

// console.log(commonFriendsFast(usersA, usersB));

// Video (3)

// import Stack from "./module3.js";

// const bracketChecker = (str) => {
//     const stack = new Stack();

//     const bracketMap = {
//         ")": "(",
//         "}": "{",
//         "]": "["
//     };

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (char === "(" || char === "{" || char === "[") {
//             stack.push(char)
//         } else if (char === ")" || char === "}" || char === "]") {
//             if (stack.isEmpty()) {
//                 return false;
//             }

//             const expected = bracketMap[char]
//             const got = stack.pop()

//             console.log("expected: ", expected, "got: ", got);

//             if (got !== expected) {
//                 return false
//             }
//         }

//     }
//     return stack.isEmpty()
// }

// console.log(bracketChecker("([{}])"));
// console.log('===============================');
// console.log(bracketChecker(")([{}])"));
// console.log('===============================');
// console.log(bracketChecker("([{})"));

// Video (5)
// const isPalindrome = (str) => {
//     const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//     const reversed = normalized.split("").reverse().join("");

//     if (reversed === normalized) {
//         return true;
//     }
//     return false
// }

// console.log(isPalindrome("Level"));

// const isPalindromeTwoPointer = (str) => {
//     const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//     let left = 0;
//     let right = normalized.length - 1;

//     while (left < right) {
//         if (normalized[left] !== normalized[right]) {
//             return false
//         }
//         left++;
//         right--;
//     }
//     return true

// }

// console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama"));
// console.log(isPalindromeTwoPointer("A man, a plan,fgdfgfg a canal: Panama"));

// const toSum = (arr, target) => {
//     const numbMap = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         const currentNumber = arr[i]
//         const complement = target - currentNumber;

//         console.log("current number", currentNumber);
//         console.log("complement", complement);

//         if (numbMap.has(complement)) {
//             return [numbMap.get(complement), i];
//         }
//         numbMap.set(currentNumber, i)
//         console.log(numbMap);
//     }
//     return undefined;
// }

// console.log(toSum([2, 11, 8, 1, 15], 9));