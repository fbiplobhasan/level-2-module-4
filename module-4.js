const expensiveTask = (id) => {
    console.log("ran the expensive task for: ", id);
    return {
        id: id,
        data: `Some data for id ${id}`,
        timestamp: new Date().getTime(),
    }
}

const getData = () => {
    return expensiveTask;
}

console.log(getData(123));