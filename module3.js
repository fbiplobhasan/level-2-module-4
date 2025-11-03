//* ‍stateless vs stateful

// Video (1)

//     let count = 5;

// const counter = (amount) => {
//     count = count + amount;
//     return count;
// }

// console.log(counter(3));
// console.log(counter(2));
// console.log(counter(2));


// const counter = {
//     count: 0,

//     add(amount) {
//         this.count = this.count + amount
//     },
//     print() {
//         console.log(this.count);
//     },
// };
// counter.add(2)
// counter.add(3)
// counter.print();

// Video (2)
// const createCounter = () => {
//     let count = 0;
//     return (amount) => {
//         count = count + amount;
//         return count;
//     }
// };

// const counter = createCounter();
// console.log(counter(3));
// console.log(counter(5));

// 02
//! Class constructor create
// class Counter {
//     constructor(count) {
//         this.count = count;
//     }
//     add(amount) {
//         this.count = this.count + amount;
//     }
//     print() {
//         console.log(this.count);
//     }
// }


// const counter1 = new Counter(0);

// counter1.add(2)
// counter1.add(3)
// counter1.print();

// const counter2 = new Counter(10);
// counter2.add(20)
// counter2.add(30)
// counter2.print();

// Video (3)
// Stack Implementation using Array
class Stack {
    constructor() {
        this.items = [];
    }
    push(value) {
        this.items.push(value);
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        console.log(this.items.slice().reverse().join(" => "));
    }
}

const stack = new Stack();

console.log(stack.peek());
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
console.log(stack.peek());
console.log(stack.pop());

