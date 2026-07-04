class Node {
    constructor(data, next) {
        this.data = data,
            this.next = null
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

        while (current.next !== null) {
            current = current.next
        }


        current.next = newnode

    }

    insertAtPosition(data, position) {

        let newnode = new Node(data)

        if (this.head === null) {
            return
        }

        if (position === 0) {
            newnode.next = this.head
            return this.head = newnode
        }

        let current = this.head
        let count = 0

        while (current.next !== null && count < position - 1) {
            current = current.next
            count++
        }

        if (current === null) {
            console.log("position out of range")
            return
        }
        newnode.next = current.next
        current.next = newnode

    }

    delete(data) {
        if (this.head.data === data) {
            return this.head = this.head.next
        }

        let current = this.head

        while (current.next !== null) {
            if (current.next.data === data) {
                return current.next = current.next.next
            }

            current = current.next
        }
    }

    deleteAtPosition(position) {
        if (this.head === null) return
        if (position === 0) {
            this.head = this.head.next
            returna
        }


        let current = this.head
        let count = 0

        while (current.next !== null && count < position - 1) {
            current = current.next
            count++
        }

        if (current === null || current.next === null) {
            return
        }

        current.next = current.next.next
    }

    reverse(){
      if(this.head === null) return

      let prev = null
      let current = this.head

      while(current !== null){
        let next = current.next
        current.next = prev
        prev = current
        current = next
      }
      this.head = prev
    }

    search(data){
        if(this.head === null) return

        let current = this.head
        let position = 0

        while(current !== null){
            if(current.data == data){
                console.log(`${data} is available at position: ${position}`);
                return
            }
            current = current.next
            position++
        }

    }

    length(){
        if(this.head === null) return

        let current = this.head 
        let count = 0

        while(current !== null){
            count++
            current = current.next
            
        }
        console.log(`the length of linklist is ${count}`)
    }

    print() {
        let current = this.head

        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
}

let list = new LinkList()

list.insert(18)
list.insert(22)
list.insert(33)
list.insertAtPosition(92,2)
list.deleteAtPosition(2)

list.print()
list.search(33)
list.length()

list.reverse()
list.print()