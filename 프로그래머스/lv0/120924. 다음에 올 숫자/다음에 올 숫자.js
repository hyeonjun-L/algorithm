function solution(common) {
    const numbers = common[1] - common[0]
    const numbers2 = common[2] - common[1]
    
    return numbers === numbers2 ? common.at(-1) + numbers : common.at(-1) * (common[1]/common[0])
}