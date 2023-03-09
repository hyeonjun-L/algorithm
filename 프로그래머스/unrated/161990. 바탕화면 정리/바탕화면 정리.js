function solution(wallpaper) {
    let answer = [Infinity, Infinity, 0, 0];
    wallpaper.forEach((line, col) => {
        if (line.includes("#")) {
            answer[0] = Math.min(col, answer[0]);
            answer[2] = col + 1;
        }
        const fileFirstIndex = line.indexOf("#");
        const fileLastIndex = line.lastIndexOf("#") + 1;
        if (fileFirstIndex !== -1) answer[1] = Math.min(fileFirstIndex, answer[1]);
        answer[3] = Math.max(fileLastIndex, answer[3]);
    });
    return answer;
}