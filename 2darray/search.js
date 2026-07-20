const prompt = require("prompt-sync")()

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(".......")
        }, ms)
    })
}

async function run() {
    console.log("welcome to sky world !!!")

    for (let i = 1; i <= 3; i++) {
        await wait(1000)
        console.log(i)
    }

    await wait(500)
    console.log("are you readyyyyyyyyy.")

    await wait(500)


    const input = prompt("enter yes or no:")


    if (input === "yes") {
        await wait(1000)
        const name = prompt("Enter your name:")

        await wait(500)
        console.log(`so you are ${name} , ${await wait(500)} lets goo`)

        let row = 2
        let col = 3

        let matrix = []
        console.log("Enter elements for 4*3 matrix:")
        for (let i = 0; i < row; i++) {
            matrix[i] = []

            for (let j = 0; j < col; j++) {
                let value = Number(prompt(`Enter an element [${i}][${j}] : `))
                matrix[i][j] = value
            }
        }

        await wait(1000)

        if (prompt("Shall i show the matix:") === "yes") {
            for (let i = 0; i < row; i++) {
                console.log(matrix[i].join(" | "))
            }
        } else {
            console.log("ok , bye bye")
        }

        let target = Number(prompt("Enter number to search:"))
        let found = false
        let rowpos = -1
        let colpos = -1

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (matrix[i][j] === target) {
                    console.log(`found at position : [${i}][${j}]`)
                    found = true
                    rowpos = i
                    colpos = j
                }
            }
        }
        await wait(1000)

        if(found) {
            if (prompt("Do you want to change this number(yes/no) :") === "yes") {
                await wait(500)
                let replacewith = Number(prompt("Enter the new number:"))

             matrix[rowpos][colpos] = replacewith
             
             for(let i = 0 ; i < row; i++){
                console.log(matrix[i].join(" | "))
             }
            }
        }else{
            console.log("NOT FOUND")
        }


    } else {
        await wait(1000)
        console.log("sorry you have to wait")
    }


}

run()

