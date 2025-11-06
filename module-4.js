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