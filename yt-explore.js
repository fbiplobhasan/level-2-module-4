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

// class Stack {
//     constructor() {
//         this.arr = [];

//     }
//     push(value) {
//         this.arr.push(value)
//         return this.arr;
//     }
//     pop() {
//         this.arr.pop();
//         return this.arr;
//     }
//     lookUp() {
//        return this.arr[this.arr.length - 1]
//     }
// }

// let stack = new Stack();
// console.log(stack.push(50));
// console.log(stack.push(500));
// console.log(stack.lookUp());
// console.log('pop', stack.pop());


// class SinglyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     isEmpty() {
//         return this.length === 0;
//     }

//     push(value) {
//         let newNode = {
//             value: value,
//             next: null
//         }
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//     }

// }

// let list = new SinglyLinkedList();

// list.push(5)
// list.push(10)
// list.push(15)
// console.log(list.head.next.next.next);
// console.log(list.tail);

// 1-1 Critical Thinking
// 🔹 টাস্ক: একটা ছোট সমস্যা চিন্তা করো — যেমনঃ তিনটা সংখ্যার মধ্যে সবচেয়ে বড়টা বের করা
// function findMax(a,b,c) {
//     if (a >= b && a >= c) return a
//     else if (b >= a && b >= c) return b
//     else return c
// }

// console.log(findMax(10, 15, 20));

// 1-2 Deconstructing Vague Problems (Thinking in Data Flow)
// 🔹 টাস্ক: ইনপুট: নামের তালিকা, আউটপুট: বড় হাতের অক্ষরে নাম
// const names = ['biplob', 'hasan', 'bappy'];
// const result = names.map(name => name.toUpperCase());
// console.log(result);

// 🔹 টাস্ক: একই ডেটা Array বনাম Object এ রাখার পার্থক্য দেখো
// console.time("task")
// const arr = ['biplob', 'hasan'];
// console.timeEnd("task")

// console.time("task")
// const obj = { firstName: 'biplob', lastName: 'hasan' };
// console.log(arr[0], obj.firstName);
// console.timeEnd("task")

// 🔹 টাস্ক: ১ থেকে n পর্যন্ত সংখ্যার যোগফল বের করো (অ্যালগরিদম)

// TODO
// function sumToN(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) total += i;
//     return total;
// }
// console.log(sumToN(5));
// 🔹 টাস্ক: নিচের লুপের টাইম কমপ্লেক্সিটি O(n)
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach((number) => console.log(number))
// 🔹 টাস্ক: দুটি লুপের পার্থক্য বুঝো (O(n) vs O(n^2))
// for(let i = 0; i < 3; i++) console.log("O(n)");
// for(let i = 0; i < 3; i++) {
//     for(let j = 0 ; j < 3; j++)console.log("O(n^2)")}

// 🔹 টাস্ক: push() বনাম unshift() পার্থক্য দেখো
// const list = [1, 2, 3,]

// console.time("push")
// list.push(4)
// console.timeEnd("push")

// console.time("unshift");
// list.unshift(0)
// akhane 0 ta array er shurute jog hobe
// console.timeEnd("unshift");

// console.log(list);

// 🔹 টাস্ক: ডুপ্লিকেট সরানো
// const nums = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6]
// console.log(nums);
// const unique = [...new Set(nums)]
// console.log(unique);

// TODO🔹 টাস্ক: Nested loop = O(n²)
// let count = 0;
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         count++;
//     }
// }

// console.log(count);

// 🔹 টাস্ক: অবজেক্টের key-value জোড়া Map এ সংরক্ষণ করো
// const obj = { name: "Biplob", age: "28", hobby: "Web development" }
// const map = new Map();
// map.set(obj, "Biplob")
// map.set("age", 20)
// console.log(map);

// 🔹 টাস্ক: প্রোডাক্ট লিস্টে কাজ করো
// const products = [100, 200, 50, 300]
// const filterd = products.filter((p) => p > 100)
// const sorted = [...products].sort((a, b) => a - b)
// const sliced = products.slice(0, 2);
// console.log(filterd, sorted, sliced);

// 🔹 টাস্ক: দুই Array এর কমন আইটেম খুঁজে বের করো
// const nested = [[1, 2], [3, 4],[5, 6]]
// console.log(nested.flat());

// 🔹 টাস্ক: দুই Array এর কমন আইটেম খুঁজে বের করো
// const a = [1, 2, 3, 4, 4];
// const b = [3, 2, 1, 6, 7, 5,]
// const common = a.filter((num) => b.includes(num))
// console.log(common);

// 🔹 টাস্ক: মোট দাম বের করো
// const prices = [50, 400, 200];
// const total = prices.reduce((a, p) => a + p, 0)
// console.log(total);

// 🔹 টাস্ক: আইডি দিয়ে lookup table বানাও
// const users = [
//     { id: 1, name: "Biplob" },
//     { id: 2, name: "Hasan" },
//     { id: 3, name: "Hazrat" },
// ]

// const lookUp = {};
// users.forEach((u) => (lookUp[u.id] = u.name))
// console.log(lookUp[2]);

// 🔹 টাস্ক: ক্যাটাগরি অনুযায়ী প্রোডাক্ট গ্রুপ করো
// const items = [
//     { category: "phone", price: 100 },
//     { category: "laptop", price: 51000 },
//     { category: "phone", price: 200 },
// ]

// const grouped = items.reduce((acc, item) => {
//     acc[item.category] = acc[item.category] || [];
//     acc[item.category].push(item)
//     return acc

// }, {})

// console.log(grouped);

// 🔹 টাস্ক: প্রতিটি ক্যাটাগরির মোট দাম বের করো
// const items = [
//     { category: "phone", price: 100 },
//     { category: "laptop", price: 51000 },
//     { category: "phone", price: 200 },
// ]

// for (let key in grouped) {
//     const total = grouped[key].reduce((sum, item) => sum + item.price, 0)
//     console.log(key,total);
// }

// 🔹 টাস্ক: user ও order data join করো
// 2-9 Denormalizing Data (Client-side join)
// const userData = [{ id: 1, name: "Biplob Hasan", age: 20 }]
// const orders = [{ userId: 1, product: "phone" }]

// const joined = orders.map((o) => ({
//     ...o,
//     user: userData.find((u) => u.id === o.userId)?.name,
// }))
// console.log(joined);

// 🔹 টাস্ক: সময় অনুযায়ী ডেটা গ্রুপ করো
// 2-10 Binning (Time-based grouping)
// const times = [1, 3, 5, 10, 15];
// const bins = times.map((t) => (t < 6 ? "Morning" : "Evening"))
// console.log(bins);

// 🧱 Module 3: Stack, Queue, Linked List
// 3-1 Stateless vs Stateful

// 🔹 টাস্ক: Stateless function (কোনো মান ধরে রাখে না)

// function add(a, b) {
//     return a + b;
// }
// // 🔹 Stateful object

// let counter = 0;
// function increment() {
//     counter++;
// }
// increment()
// increment()
// increment()
// increment()
// console.log(counter);

// <===Class Constructor===>

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hi, ${this.name}`);
//     }
// }

// const p = new Person("Biplob");
// p.greet();

// <===Stack Implementation===>

// class Stack {
//     constructor() {
//         this.items = [];
//     }
//     push(item) {
//         this.items.push(item)
//     }
//     pop() {
//         return this.items.pop();
//     }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// console.log(stack.pop());

// <====Queue Implementation===>
// <===Linked List Basic===>
// class Queue {
//     constructor() {
//         this.items = [];
//     }
//     enque(item) {
//         this.items.push(item)
//     }
//     dequeue() {
//         return this.items.shift();
//     }
// }

// const queue = new Queue();
// queue.enque("A")
// queue.enque("B")
// console.log(queue.dequeue());

// <===Linked List Visual Concept===>
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new Node(data);
        if (!this.head) this.head = newNode;
        else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = newNode;
        }
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append(10)
list.append(20)
list.append(30)
list.print()