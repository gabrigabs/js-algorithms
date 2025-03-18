
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor(value){
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;

    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;

        }else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
    }

    dequeue(){
        if(this.length === 0){
            return undefined;
        }

        const removedNode = this.first;
        this.first = this.first.next;

        removedNode.next = null;
        this.length--;

        return removedNode;

    }

}

const queue = new Queue(8);
queue.enqueue(2)
queue.enqueue(3)
console.log(queue);
