function solution(peoples, limit) {
    let bigPeoples = [];
    let count = 0;
    peoples.sort((a,b) => a - b);
    peoples.forEach((people,index) => {
        if(people > Math.floor(limit / 2)) bigPeoples = peoples.splice(index,peoples.length - 1);
    });
    peoples.sort((a,b) => b - a);

    while(bigPeoples.length){
        if(bigPeoples[bigPeoples.length -1] + peoples[peoples.length -1] <= limit){
            bigPeoples.pop();
            peoples.pop();
            count++;
        }
        else{
            bigPeoples.pop();
            count++;
        } 
    }

    while(peoples.length >= 2){
        if(peoples[peoples.length -1] + peoples[peoples.length -2] <= limit){
            peoples.pop();
            peoples.pop();
            count++;
        }
        else break;
    }
    return count + peoples.length;
}