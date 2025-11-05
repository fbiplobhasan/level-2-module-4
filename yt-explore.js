class Node {
    constructor(value) {
        this.value = value;
        this.naxt = null;
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    enqueue(value) {
        const newPerson = new Node(value);
        if (!this.first) {
            this.first = newPerson;
            this.last = newPerson;
        } else {
            this.last.next = newPerson;
            this.last = newPerson;
        }
        this.length++;
        return this;
    }
    dequeue() {

        if (!this.first) {
            return undefined
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

let myQueue = new Queue();

console.log(myQueue.enqueue("rafi"));
console.log(myQueue.enqueue("rakib"));
console.log(myQueue.enqueue("hasib"));
console.log(myQueue.dequeue());