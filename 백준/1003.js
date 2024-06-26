/*
let fs = require("fs");
let input = fs.readFileSync(__dirname + "/input.txt").toString().trim().split("\n");
input.shift()

for (let n of input) {
    const fibonacci = [[1, 0], [0, 1]];
    for (let j = 2; j <= n; j++) {
        fibonacci[j] = [
            fibonacci[j-1][0] + fibonacci[j-2][0],
            fibonacci[j-1][1] + fibonacci[j-2][1]
        ];
    }

    console.log(fibonacci[n].join(" "));
}
*/

const fs = require("fs")
let input = fs.readFileSync(__dirname + "/input.txt").toString().trim().split('\n').map(Number)
input.shift()

console.log(input)

let answer = []
const fibonacci = []
fibonacci[0] = [1,0]
fibonacci[1] = [0,1]
for(var i =2; i <= 40; i++)
{
    fibonacci[i] = [fibonacci[i-1][0] + fibonacci[i-2][0], fibonacci[i-1][1] + fibonacci[i-2][1]]
}

for(i = 0; i < input.length; i++)
{
    answer[i] = fibonacci[input[i]][0]+' '+fibonacci[input[i]][1]
}

console.log(answer.join("\n"))

/*
const fs = require("fs")
const input = fs.readFileSync(__dirname + "/input.txt").toString().split('\n').map(Number);
const F = [
         1,       0,        1,        1,        2,
         3,       5,        8,       13,       21,
        34,      55,       89,      144,      233,
       377,     610,      987,     1597,     2584,
      4181,    6765,    10946,    17711,    28657,
     46368,   75025,   121393,   196418,   317811,
    514229,  832040,  1346269,  2178309,  3524578,
   5702887, 9227465, 14930352, 24157817, 39088169,
  63245986, 102334155
]

for(let i = 1; i <= input[0]; i++){
    console.log(F[input[i]]+' '+F[input[i]+1])
}
*/

/*
let zero = 0
let one = 0
let arr = []

for(let i = 0; i <= 40; i++){ 
    fibonacci(i)
    arr[arr.length] = zero
    console.log(one)
    zero = 0
    one = 0
}
console.log(arr)

function fibonacci(n) {
    if (n == 0) {
        zero++
    } else if (n == 1) {
        one++
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
*/