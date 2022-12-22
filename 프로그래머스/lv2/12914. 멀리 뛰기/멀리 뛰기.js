function solution(n) {
    let arr = [0n, 1n, 2n]
    if(3 > n) return Number(arr[n])

    for (let i = 3; i <= n; i++) {
        arr[i] = BigInt(arr[i - 1] + arr[i - 2])
    }

    return Number(arr[n] % 1234567n)
}