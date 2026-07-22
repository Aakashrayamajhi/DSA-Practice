const Redis = require("ioredis")

const redis = new Redis()

async function ratelimiter(userid){
console.log("hey working")

const key = "userkey"

const request = await redis.incr(key)

if(request === 1){
    await redis.expire(key , 30)

}
console.log(request)

if(request > 5){
    console.log("too many request wait for few sec")
}
}

setInterval(()=>{
ratelimiter("user1")
}, 1000)