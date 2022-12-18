function solution(arr1, arr2) {
    return arr1.map((column,coli) => {
        return arr1[0].map((row,rowi) => {
          return column[rowi] + arr2[coli][rowi];
        });
    });
}