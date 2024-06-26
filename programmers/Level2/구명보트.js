solution([10, 50, 80, 50, 60, 90],100)

function solution(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}
/*
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
*/
    // let index = 0;
    // let count = 0;
    // let len = Math.floor((people.length-1)/2);
    // len = people.length % 2 === 0 ? len : len -1;
    // people.sort((a,b)=> a-b);

    // for(index; index <= len; index++){
    //     if(people[index] + people[people.length -1 -index] <= limit) count++;
    //     else break;
    // }

    // for(index; )
    // console.log(index)

    // // while(true){
    // //     people[index] + people[people.length -1 -index]
    // // }