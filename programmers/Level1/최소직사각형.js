solution([[60, 50], [30, 70], [60, 30], [80, 40]])

function solution(sizes) {
    let width = 0;
    let length = 0;
    const sortsizes = sizes.map(element => {
        return element[0] < element[1] ? element.reverse() : element; 
    });
    sortsizes.forEach(element => {
        if(element[0] > width) width = element[0];
        if(element[1] > length) length = element[1];
    });
    return width * length;
}

/*
function solution(sizes) {
    const [hor, ver] = sizes.reduce(([h, v], [a, b]) => [Math.max(h, Math.max(a, b)), Math.max(v, Math.min(a, b))], [0, 0])
    return hor * ver;
} 
*/