function solution(phone_number) {
    const BN4 = phone_number.match(/\d{4}$/)
    return '*'.repeat(phone_number.length - 4) + BN4
}