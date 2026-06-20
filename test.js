class Node{
    constructor(data , next = null){
        this.data = data ,
        this.next = next
    }
}

class LinkList{
    constructor(){
        this.head = null
    }

    insert(data){
        let newnode = new Node(data)

            if(this.head === null){
               return this.head = newnode
            }

            let current = this.head
            
            while(current.next !== null){
                current = current.next
            }
            current.next = newnode        
    }

    print(){
        if(this.head === null) return 

        let current = this.head
        
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const list = new LinkList()

list.insert(10)
list.print()