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