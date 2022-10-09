function solution(N, stages) {
    let allplayer = stages.length
    let loss = {}
    
    for(let i = 1; i <= N; i++){    
        let notclearplayer = stages.filter(element => i === element).length
        loss[i] = notclearplayer / allplayer
        allplayer -= notclearplayer
    } // 딕셔너리에 실패율
    
    var sortable = []
    for (var name in loss) 
        sortable.push([name, loss[name]])
    loss = sortable.sort((a, b) => b[1] - a[1] )
    loss = loss.map((v,i) => Number(loss[i][0])) //내림차순 정렬
    
    return loss
}
/*
function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}*/