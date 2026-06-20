class Node {
    constructor(data, next = null) {
        this.data = data,
            this.next = next
    }
}

class LinkList {
    constructor() {
        this.head = null
    }

    insert(data) {
        let newnode = new Node(data)

        if (this.head === null) {
            return this.head = newnode
        }

        let current = this.head

        while (current.next !== null) {
            current = current.next
        }

        current.next = newnode
    }

    delete(data) {
        if (this.head === null) {
            return
        }

        if (this.head.data === data) {
            return this.head == this.head.next
        }

        let current = this.head

        while (current.next) {
            current.next = current.next.next
            current = current.next
        }

    }

    rev() {
        if (this.head === null) return

        let current = this.head
        let prev = null

        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev

    }

    length(){

        if(this.head === null) return

        let current = this.head
        let count = 0

        while(current !== null){
            count++
            current = current.next
        }

        console.log(`total number of element in linklist is ${count}`)
    }

    
    print() {
        if (this.head === null) return

        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

const list = new LinkList()

list.insert(19)
list.insert(37)
list.insert(3989)
// list.delete(18)

// for(let i = 0 ; i <=  10 ; i++){
//     list.insert(Math.trunc(Math.random() * 10))
// }
list.print()
console.log("reversing....")
list.rev()

list.print()

list.length()