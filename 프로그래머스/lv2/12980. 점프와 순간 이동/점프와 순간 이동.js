function solution(n) {
    let battery = 0;

    while (0 !== n) {
        if (n % 2 === 0) n = Math.floor(n / 2);
        else {
            n -= 1;
            battery++;
        }
    }
    return battery;
}
