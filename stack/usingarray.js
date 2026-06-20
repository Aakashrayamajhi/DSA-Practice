class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()) return "stack underflow"

        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()) return "stack underflow"

        return this.items[this.items.length-1]
    }

    isEmpty(){
     if(this.items.length === 0) return
    }

    print(){
        console.log(this.items.join("->"))
    }
}

const stack = new Stack()

for(let i = 0 ; i < 15 ; i++){
    stack.push(Math.trunc(Math.random()*10))
}

console.log(stack.peek())
stack.print()


for(let i = 0 ; i < 5 ; i++){
    stack.pop()
}

console.log(stack.peek())
stack.print()

