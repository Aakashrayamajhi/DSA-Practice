const Redis = require("ioredis")

const redis = new Redis()

async function getuser(id) {
    const key = `user:${id}`
   
    let cache = await redis.get(key)
     await redis.set(key, "ok")

    if (cache === null) {
        console.log("hey nothing there")
    } else {
        console.log("found")

    }
}

getuser(1)
getuser(2)