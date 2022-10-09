function solution(numbers) {
    const newArray = []
    numbers.forEach((num,index,arr) => {
        for (let j = index + 1; j < arr.length ; j++)
            newArray.push(arr[index] + arr[j])
    })
    numbers = Array.from(new Set(newArray))
    return numbers.sort((a,b) => a-b)
}                  

/*
for (let i = 0; i < numbers.length; i++){
            console.log(numbers[i]);
        for(let j = i+1; j < numbers.length; j++){
            console.log('j의 값입니다 =',numbers[j]);
        }
    }
    
    
*/