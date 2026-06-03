class User {
    constructor(username, password) {
        this.username = username,
            this.password = password
    }

    hack() {
        return `your username: ${this.username} and password: ${this.password} has been hacked`
    }

}

const hacker = new User("aakash", "justchill")
console.log(hacker.hack())