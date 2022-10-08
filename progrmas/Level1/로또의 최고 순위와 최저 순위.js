function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

/*
function solution(lottos, win_nums) {
    const winobj = {}
    let lukynum = 7;
    let zeronum = 0;

    win_nums.forEach(num => { winobj[num] = 1 })

    lottos.forEach(num =>{
        if(winobj[num])
            lukynum--;
        else if(num == 0)
            zeronum++;
    })
    if(lukynum - zeronum != 7 && lukynum == 7)
        return [lukynum - zeronum,lukynum - 1]
    else if(lukynum - zeronum == 7 && lukynum == 7)
        return [lukynum - zeronum - 1,lukynum - 1]
    else
        return [lukynum - zeronum,lukynum]
} */