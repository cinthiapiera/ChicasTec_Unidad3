// class Stack{
//     constructor(){
//         this.stack=[];
//     }

//     push(elemento){
//         this.stack.push(elemento);
//         return this.stack;
//     }

//     pop(){
//         return this.stack.pop();
//     }

//     peek(){
//         return this.stack[this.stack.length-1];
//     }

//     size(){
//         return this.stack.length;
//     }

//     print(){
//         console.log(this.stack);
//     }
// }

// const datos = new Stack();
// console.log(datos.size());
// console.log(datos.push(2));
// console.log(datos.push(3));
// console.log(datos.push(4));
// console.log(datos.push(5));
// console.log(datos.size());
// console.log(datos.peek());
// console.log(datos.pop());
// console.log(datos.size());
// datos.print();


// class Queue{
//     constructor(){
//         this.queue=[];
//     }

//     enqueue(elemento){
//         this.queue.push(elemento);
//         return this.queue;
//     }

//     dequeue(){
//         return this.queue.shift();
//     }

//     peek(){
//         return this.queue[0];
//     }

//     size(){
//         return this.queue.length;
//     }

//     isEmpty() {
//         return this.queue.length === 0;
//     }

//     print(){
//         console.log(this.queue);
//     }
// }

// const datos2 = new Queue();
// console.log(datos2.size());
// console.log(datos2.isEmpty());
// console.log(datos2.enqueue('koala'));
// console.log(datos2.enqueue('gato'));
// console.log(datos2.enqueue('tigre'));
// console.log(datos2.enqueue('cuy'));
// console.log(datos2.enqueue('perro'));
// console.log(datos2.peek());
// console.log(datos2.dequeue());
// datos2.print();
// console.log(datos2.isEmpty());


class TreeNode{
    constructor(node){
        this.node = node;
        this.descendiente=[];
    }
}

const a = new TreeNode(10000);
const b = new TreeNode(999);
const c = new TreeNode(80);
const d = new TreeNode(50);
const e = new TreeNode(4);
const f = new TreeNode(8);
const g = new TreeNode(1);

a.descendiente.push(b);
b.descendiente.push(c);
b.descendiente.push(d);
c.descendiente.push(e);
c.descendiente.push(f);
c.descendiente.push(g);
console.log(a);
console.log(b);
console.log(c);
