function solution(n) {
    let arr = [0n, 1n, 2n]
    if(3 > n) return Number(arr[n])

    for (let i = 3; i <= n; i++) {
        arr[i] = BigInt(arr[i - 1] + arr[i - 2])
    }

    return Number(arr[n] % 1234567n)
}

/* 
 * 1 칸을 뛰는 방법 = 1 가지
 * 2 칸을 뛰는 방법 = 2 가지
 * (n+2 칸을 뛰는 방법) = (n+1 칸을 뛰는 방법) + (n 칸을 뛰는 방법)
 * f_1 = 1, f_2 = 2 인 피보나치 수열
 * https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%A9%80%EB%A6%AC-%EB%9B%B0%EA%B8%B0-JS
 */