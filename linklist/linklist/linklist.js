class Node {
    constructor(data, next = null) {
        this.data = data
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
            this.head = newnode
            return
        }

        let current = this.head

        while (current.next) {
            current = current.next
        }

        current.next = newnode
    }

    delete(data) {
        if (this.head === null) return

        // Case 1: head node matches
        if (this.head.data === data) {
            this.head = this.head.next
            return
        }

        let current = this.head

        // Case 2: middle or last node
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next
                return
            }
            current = current.next
        }
    }

    print() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

// testing
const list = new LinkList()

list.insert(10)
list.insert(30)
list.insert(10)
list.insert(30)

list.delete(10)

list.print()