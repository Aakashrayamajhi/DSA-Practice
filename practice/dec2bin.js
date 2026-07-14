for (let i = 1; i <= 10; i++) {
    let dec = 42

    let ans = 0
    let pow = 1
    let temp = dec

    while (temp > 0) {
        let rem = temp % 2
        temp = Math.trunc(temp / 2)
        ans += (rem * pow)
        pow *= 10
    }

    console.log(dec, "->", ans)
}