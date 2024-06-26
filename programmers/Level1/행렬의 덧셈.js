solution([[1]], [[6]]);

function solution(arr1, arr2) {
    // console.log('row : ',arr1[0].length)
    // console.log('columns : ',arr1.length)
    // console.log(arr2[0])

    return arr1.map((column,coli) => {
        return arr1[0].map((row,rowi) => {
          return column[rowi] + arr2[coli][rowi];
        });
    });
    
    console.log(test);
}
// console.log(coli)
// console.log(rowi)
// // console.log('column[rowi] : ',column[rowi],rowi);
// // console.log('arr2[rowi][coli] : ',arr2[rowi][coli]);