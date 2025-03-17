
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    pop(){
        if(!this.head && !this.tail) return undefined;

        let temp = this.head;
        let pre = this.head;

        while(temp.next){
            pre = temp;
            temp = temp.next;
            
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    shift(){
        if(this.head){
            const removedValue = this.head;
            this.head = this.head.next;
            if(this.head === null){
                this.tail = null;
            }

            this.length --;

            return removedValue;
        }
    }

    get(index){
        if(index < 0 || index >= this.length) {
            return undefined;
        }

        let result = this.head;

        for(let i = 0; i < index; i++){
            result = result.next;
        }

        return result;
    }

    set(index, value){
        const selectedIndex = this.get(index);


        if(selectedIndex){
            selectedIndex.value = value

            return true
        }

        return false
    }

    insert(index, value){
        if(index < 0 || index > this.length) {
            return false;
        }
        

        if(index === 0) {
            this.unshift(value);
            return true;
        }

        if(index === this.length) {
            this.push(value);
            return true;

        }
        const newNode = new Node(value);
        
        let temp = this.get( index - 1);
        
        
        newNode.next = temp.next;
        temp.next = newNode
        
        this.length++;
        return true;

    }

    remove(index, value){
        if(index < 0 || index >= this.length) {
            return null;
        }
        

        if(index === 0) {
            return this.shift(value);

        }

        if(index === this.length - 1) {
            return this.pop(value);
        }

        let nodeToRemove = this.get(index);

        const oldRemovedNode = nodeToRemove;

        nodeToRemove = nodeToRemove.next;
        this.length--;

        return oldRemovedNode;

    }

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for(let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;

    }


}

const myLinkedList = new LinkedList(13);
myLinkedList.unshift(3);
myLinkedList.push(7);
myLinkedList.push(18);
myLinkedList.pop();
myLinkedList.shift();

console.log(myLinkedList.get(1));
console.log(myLinkedList.set(1, 1));
myLinkedList.insert(0, 3)





const result = console.log(JSON.stringify(myLinkedList, null, 3))

