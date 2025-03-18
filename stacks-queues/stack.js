
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;

    }

    push(value) {
        const newNode = new Node(value);
        if(!this.top){
            this.top = newNode;
        }else{
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        

        this.length++;
        return this;
    }

    
    pop() {
        if(this.length === 0){
            return undefined;
        }   
        const removedPop = this.top;   
        this.top = this.top.next;
        removedPop.next = null;
        
        this.length--;
        return removedPop;
    }
}

const stack = new Stack(4);
stack.push(8)

stack.push(3)
stack.pop()

console.log(stack)