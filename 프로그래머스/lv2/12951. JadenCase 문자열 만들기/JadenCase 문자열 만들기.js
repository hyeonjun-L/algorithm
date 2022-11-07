function solution(s) {
    const JadenCase = s
        .replace(/[A-Z]/g, char => char.toLowerCase())
        .replace(/^[a-z]|\s[a-z]/g, char => char.toUpperCase())
        
        return JadenCase
}