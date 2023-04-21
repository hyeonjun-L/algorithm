const solution = (array) => {
  const counter = new Map()
  let maxCount = 0
  let maxNum = 0
  
  array.forEach((num) => {
    const count = (counter.get(num) || 0) + 1
    counter.set(num, count)
    
    if (count > maxCount) {
      maxCount = count
      maxNum = num
    } else if (count === maxCount) {
      maxNum = -1
    }
  })

  return maxNum
}