function solution(a, b) {
    let sum = 0;

    if (a > b)
        {
            for(b; a >= b; b++)
                {
                    sum += b;
                }
        }
    else if (b > a)
        {
            for(a; b >= a; a++)
                {
                    sum += a;
                }
        }
    else
        return a;
    return sum;
}

//return (a+b)*(Math.abs(b-a)+1)/2;