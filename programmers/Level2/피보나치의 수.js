solution(5)

function solution(n) {
    let arr = [0n, 1n]
    for (let i = 2; i <= n; i++) {
        arr[i] = BigInt(arr[i - 1] + arr[i - 2])
    }

    return Number(arr[n] % 1234567n)
}

/*🚨이런 문제가 있어요 n이 매우 큰 경우 n번째 피보나치 수는 언어가 표현할 수 있는
자료형의 범위를 넘어가, 오버플로우가 납니다. 예를 들어 47번째 피보나치 수는 2,971,215,073이고,
이 수는 32비트 정수(ex. int) 범위를 넘어 오버플로우가 발생합니다. 100,000번째 피보나치 수는
자릿수가 20,000을 넘어가며, 이는 64비트 정수(ex. long) 범위를 넘어 오버플로우가 발생합니다.
💡그럼 코드를 어떻게 바꾸면 좋나요? 모든 단계에서 % 연산을 사용하여, 모든 연산에서 오버플로우가
 일어나지 않게 만들어 주세요. */

 /*const sum = 1n + 1;
// TypeError: can't convert BigInt to number*/

// BigInt는 BigInt 형 끼리 계산 돼야 한다.