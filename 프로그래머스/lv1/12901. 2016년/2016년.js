function solution(a,b){ 
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`${a}, ${b}, 2016`).getDay()
  return day[date]; 
}