const prompt = require("prompt-sync")()

function wait(ms){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(".......")
        } , ms)
    })
}

async function run(){
    console.log("welcome to sky world !!!")

    for(let i = 1 ; i <=3 ; i++){
        await wait(1000)
        console.log(i)
    }

    await wait(500)
    console.log("are you readyyyyyyyyy.")

    await wait(500)


    const input = prompt("enter yes or no:")

    
    if(input === "yes"){
    await wait(1000)
    prompt("Enter your name")
    }else{
        await wait(1000)
        console.log("sorry you have to wait")
    }

   
}

run()

