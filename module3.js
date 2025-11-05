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
// class Stack {
//     constructor() {
//         this.items = [];
//     }
//     push(value) {
//         this.items.push(value);
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return undefined;
//         }
//         return this.items.pop();
//     }
//     peek() {
//         if (this.isEmpty()) {
//             return undefined;
//         }
//         return this.items[this.items.length - 1]
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }
//     print() {
//         console.log(this.items.slice().reverse().join(" => "));
//     }
// }

// const stack = new Stack();

// console.log(stack.peek());
// console.log(stack.isEmpty());

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.print();
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// Video (4)
// Queue Implementation using Array
// Array implementation
// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     enqueue(value) {
//         this.items.push(value);
//     }
//     dequeue() {
//         if (this.isEmpty()) {
//             return undefined;
//         }
//         return this.items.shift(); 
//     }
//     peek() {
//         if (this.isEmpty()) {
//             return undefined;
//         }
//         return this.items[0]
//     }
//     isEmpty() {
//         return this.items.length === 0;
//     }
//     print() {
//         console.log("Start ==> ", this.items.slice().reverse().join(" => "), "==> end");
//     }
// }

// const queue = new Queue();

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print();
// console.log(queue.peek());
// queue.dequeue();
// queue.print();

// Video (5) just visual class
// Video (6)
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// const head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// console.log(head);
// let temp = head;

// while (temp !== null) {
//     console.log(temp.value, " ");
//     temp = temp.next
// }

// Video (7)
// Linked List Implementation - append() and print()
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     append(value) {
//         const newNode = new Node(value);
// if the linked list is empty
//         if (this.head === null) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
// if the linked list is not empty
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//     }
//     prepend() { }
//     insert() { }
//     remove() { }
//     print() {
//         const arr = [];
//         let currentNode = this.head;
//         while (currentNode !== null) {
//             arr.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         console.log(arr.join(" ---> "), " ---> null ");
//     }
// }

// const linkedList = new LinkedList();

// linkedList.append(1)
// linkedList.append(2)
// linkedList.append(3)

// linkedList.print()

// Video (8) & (9)
// Linked List Implementation - prepend()
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     append(value) {
//         const newNode = new Node(value);
// if the linked list is empty
//         if (this.head === null) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
// if the linked list is not empty
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     prepend(value) {
//         const newNode = new Node(value);
// if the linked list is empty
//         if (this.head === null) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
// if the linked list is not empty
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     insert(index, value) {
//         if (index < 0 || index > this.length) {
//             console.log("Index out of bound:");
//             return undefined
//         }
// if the insert is in the start of the linked list
//         if (index === 0) {
//             return this.prepend(value)
//         }
// if the insert is in the end of the list
//         if (index === this.length) {
//             return this.append(value)
//         }

// if the insert is in the middle
// find the leading node
//         const leadingNode = this._traverseToIndex(index - 1);
//         const holdingNode = leadingNode.next;

//         const newNode = new Node(value)

//         leadingNode.next = newNode;
//         newNode.next = holdingNode;

//         this.length++;

//     }
//     remove() { }
// private helper method
//     _traverseToIndex(index) {
//         let count = 0;
//         let currentNode = this.head;
//         while (count !== index) {
//             currentNode = currentNode.next;
//             count++;
//         }
//         return currentNode
//     }
//     print() {
//         const arr = [];

//         let currentNode = this.head;

//         while (currentNode !== null) {
//             arr.push(currentNode.value);
//             currentNode = currentNode.next;
//         }
//         console.log(arr.join(" ---> "), " ---> null ");
//     }
// }

// const linkedList = new LinkedList();

// linkedList.append(0).append(1).append(2).append(3)

// linkedList.prepend(10)
// linkedList.prepend(20)
// linkedList.prepend(30)

// linkedList.insert(2, 100)

// linkedList.print()

// Video (10)
// Linked List Implementation - remove()

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        // if the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if the linked list is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        // if the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // if the linked list is not empty
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.log("Index out of bound:");
            return undefined
        }
        // if the insert is in the start of the linked list
        if (index === 0) {
            return this.prepend(value)
        }
        // if the insert is in the end of the list
        if (index === this.length) {
            return this.append(value)
        }

        // if the insert is in the middle
        // find the leading node
        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;

        const newNode = new Node(value)

        leadingNode.next = newNode;
        newNode.next = holdingNode;

        this.length++;

    }
    remove(index) {
        if (index === 0) {
            const removedItem = this.head.value;
            this.head = this.head.next;

            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return removedItem;
        }

        const leadingNode = this._traverseToIndex(index - 1)
        const nodeToRemove = leadingNode.next;

        leadingNode.next = nodeToRemove.next;

        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }
        return nodeToRemove.value;
    }
    // private helper method
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode
    }
    print() {
        const arr = [];

        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr.join(" ---> "), " ---> null ");
    }
}

const linkedList = new LinkedList();

linkedList.append("A")
// linkedList.append("B")
// linkedList.append("C")
// linkedList.append("D")

// linkedList.prepend(10)
// linkedList.prepend(20)
// linkedList.prepend(30)

linkedList.print()
// linkedList.insert(2, 100)
// linkedList.remove(2)
linkedList.remove(0)

linkedList.print()