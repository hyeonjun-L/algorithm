const binarySearch = (list, target, left, right) => {
    let mid = 0;
  
    while (left <= right) {
      // 가운데 인덱스
      mid = Math.floor((left + right) / 2);
  
      if (list[mid] === target) {
        return mid;
      }
      
      // 대소 비교로 범위 지정
      if (list[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      console.log('right : ', right)
      console.log('left : ', left)
    }
  
    return -1;
  }
  
  const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  
  sample.sort((a, b) => a - b);
  
  // ( 찾을 배열, 탐색할 값, 시작점, 끝점 )
  const result = binarySearch(sample, 7, 0, sample.length - 1);
  
  console.log(result);