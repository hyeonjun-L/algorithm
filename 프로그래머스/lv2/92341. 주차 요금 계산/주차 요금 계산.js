function solution(fees, records) {
    
    recordsObj = records.reduce((acc, value) => {
      let [time, carNum, IO] = value.split(" ");
      let [hour, min] = time.split(":")  
      time = IO === "IN" ? -(hour * 60 + Number(min)) : hour * 60 + Number(min)
      if (!acc[carNum]) {
        return { ...acc, [carNum]: {time, IO}}
      } else {
        return { ...acc, [carNum]: {time : acc[carNum].time += time, IO}};
      }
    }, {});
    
    return Object.keys(recordsObj).sort((a,b) => a - b).map((value,index) => {
        let [baseTime, baseRate, unitTime, unitRate] = fees
        if(recordsObj[value].IO === 'IN'){
            if(baseTime > recordsObj[value].time + 1439){
                return baseRate
            } else{
                return baseRate + Math.ceil((recordsObj[value].time + 1439 - baseTime ) / unitTime) * unitRate
            }
        } else{
            if(baseTime > recordsObj[value].time){
                return baseRate
            } else{
                return baseRate + Math.ceil((recordsObj[value].time - baseTime ) / unitTime) * unitRate
            }
        }
    })
  }