// class Node {
//     constructor(value) {
//         this.value = value;
//         this.naxt = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.first = null
//         this.last = null
//         this.length = 0
//     }
//     enqueue(value) {
//         const newPerson = new Node(value);
//         if (!this.first) {
//             this.first = newPerson;
//             this.last = newPerson;
//         } else {
//             this.last.next = newPerson;
//             this.last = newPerson;
//         }
//         this.length++;
//         return this;
//     }
//     dequeue() {

//         if (!this.first) {
//             return null;
//         }

//         if (this.first === this.last) {
//             this.last = null
//         }

//         this.first = this.first.next;
//         this.length--;
//         return this;
//     }
// }

// let myQueue = new Queue();

// console.log(myQueue.enqueue("rakib"));
// console.log(myQueue.enqueue("hasib"));
// console.log(myQueue.dequeue());
// console.log(myQueue.enqueue("rafi"));
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());

class Stack {
    constructor() {
        this.arr = [];

    }
    push(value) {
        this.arr.push(value)
        return this.arr;
    }
    pop() {
        this.arr.pop();
        return this.arr;
    }
    lookUp() {
       return this.arr[this.arr.length - 1]
    }
}

let stack = new Stack();
console.log(stack.push(50));
console.log(stack.push(500));
console.log(stack.lookUp());
console.log('pop', stack.pop());