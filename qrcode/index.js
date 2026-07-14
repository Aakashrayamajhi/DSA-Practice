import QRCode from "qrcode"
import PromptSync from "prompt-sync"

const prompt = PromptSync()

const url = prompt("enter gar url:")

try{
    await QRCode.toFile("qr.png" , url)
    console.log("completed..")

} catch(error){
    console.log("error:" , error)
}