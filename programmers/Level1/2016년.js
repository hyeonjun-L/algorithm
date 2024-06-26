function solution(a,b){ 
    let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let date = new Date(`${a}, ${b}, 2016`).getDay()
    //getDay는 날짜의 요일을 0~6으로 바꿔주는 메소드
    return day[date]; 
  }