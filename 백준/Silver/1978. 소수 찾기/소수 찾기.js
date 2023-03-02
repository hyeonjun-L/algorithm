const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require('fs').readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
let cnt = 0;
function isPrime(n) {
    if( n <= 1 )
        return 0;      
	
    if( n % 2 == 0) 
        return n==2 ? 1 : 0;
         
    for(i = 3; i <= Math.sqrt(n); i += 2) { 
		
        if( n % i == 0)
            return 0;
    }
    
	return 1; 
}

for (let i = 0; i < N; i++) {
    let num = input[1].split(" ")[i];
    if (isPrime(num) == 1) {
        cnt += 1;
    }
}

console.log(cnt);