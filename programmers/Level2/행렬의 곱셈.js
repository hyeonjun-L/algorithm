solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);

function solution(arr1, arr2) {
  console.log(arr1[0][0]);
  if(arr1.length > arr2.length){

  }
  
  arr2.forEach((element, index) => {
    console.log(element.map((value, i) => arr1[index][i]));
  });
}
