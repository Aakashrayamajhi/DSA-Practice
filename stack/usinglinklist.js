class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

class LinkList {
    constructor() {
        this.top = null
    }

    push(element) {
        let newnode = new Node(element)
        newnode.next = this.top
        this.top = newnode


    }

    pop(){

        const pooped  = this.top.data
        this.top = this.top.next

        console.log("pooped data :" , pooped)
    }

    peek() {
        console.log(this.top.data)
    }

    print(){
        let current = this.top

        while(current){
            console.log("stack: "+ current.data)
            current = current.next
        }

    }
}

const stack = new LinkList()

stack.push(10)

stack.push(130)

stack.push(150)

stack.peek()

stack.print()

stack.pop()

stack.print()