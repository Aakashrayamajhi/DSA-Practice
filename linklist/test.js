class Node {
    constructor(data , next){
        this.data = data,
        this.next = null
    }
}

class LinkList {
    constructor(){
        this.head = null
    }

    insert(data){
        let newnode = new Node(data)

        if(this.head === null){
            this.head = newnode
            return
        }

        let current = this.head

        while(current.next !== null){
            current = current.next
        }

        current.next = newnode

    }

delete(data){
    if(this.head.data === data){
      return this.head = this.head.next
    }

    let current = this.head

    while(current.next !== null){
        if(current.next.data === data){
          return  current.next = current.next.next
        }

        current = current.next
    }


}

    print(){
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

let list = new LinkList()

list.insert(18)
list.insert(22)
list.insert(33)
list.delete(33)

list.print()