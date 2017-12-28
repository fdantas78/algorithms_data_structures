// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertFirst(data) {
        this.insertAt(data, 0);
    }
    
    size() {
        let count = 0;
        let node = this.head;
        
        while(node) {
            node = node.next;
            count++;
        }
        
        return count;
    }
    
    getFirst() {
        return this.getAt(0);
    }
    
    getLast() {
        // if(!this.head) {
        //     return null;
        // }
        
        // let node = this.head;
        
        // while(node) {
        //     if(!node.next) {
        //         return node;
        //     }
        //     node = node.next;
        // }
        return this.getAt(this.size() - 1);
    }
    
    clear() {
        this.head = null;
    }
    
    removeFirst() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    
    removeLast() {
        // if(!this.head) {
        //     return;
        // }
        // if(!this.head.next) {
        //     this.head = null;
        //     return;
        // }
        
        // let node = this.head;
        // let aux = null;
        
        // while(node) {
        //     aux = node;
        //     if(!node.next.next) {
        //         aux.next = null;
        //         return;
        //     }
        //     node = node.next;
        // }
        this.removeAt(this.size() - 1);
    }
    
    insertLast(data) {
        // if(!this.head) {
        //     this.head = new Node(data);
        // } else {
        //     this.getLast().next = new Node(data);
        // }
        this.insertAt(data, this.size());
    }
    
    getAt(index) {
        let node = this.head;
        let count = 0;
        
        while(count < index && node) {
            node = node.next;
            count++;
        }
        
        return node;
    }
    
    removeAt(index) {
        if(!this.head)
            return;
        
        if(index === 0) {
            this.head = this.head.next;
            return;
        }
        
        let previous = this.getAt(index - 1);
        
        if(previous && previous.next)
            previous.next = previous.next.next;
        else
            previous.next = null;
    }
    
    insertAt(data, index) {
        if(!this.head) {
            this.head = new Node(data);
            return;
        }
            
        if(index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        
        let previous = this.getAt(index - 1) || this.getLast();
        previous.next = new Node(data, previous.next);
    }
    
    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }
    
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

const list = new LinkedList();

list.insertLast(1); 
list.insertLast(2); 
list.insertLast(3); 
list.insertLast(4);  
list.forEach(a => { a.data += 10; }); 
console.log(list);


module.exports = { Node, LinkedList };
