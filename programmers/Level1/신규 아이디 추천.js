function solution(new_id) { 
    
    // 1단계
    new_id = new_id.replace(/[A-Z]/g, char => char.toLowerCase())
    console.log(new_id)
    // 2단계
    new_id = new_id.replace(/[^0-9a-z\.\_\-]/g, '')
    console.log(new_id)
    // 3단계
    new_id = new_id.replace(/[.]{2,}/g, '') //  /\.\B/g 오류
    console.log(new_id)
    // 4단계
    new_id = new_id.replace(/^\.|\.$/g, '')
    console.log(new_id)
    // 5단계
    if(new_id.length === 0)
        new_id += 'a'
    console.log(new_id)
    // 6단계 
    if(new_id.length >= 16)
        {
        new_id = new_id.match(/.{15}/g).join('')
        new_id = new_id.replace(/^\.|\.$/g, '')
        }
    console.log(new_id)
    // 7단계
    if(new_id.length <= 2)
        {
            let i = 3 - new_id.length
            for(i; i > 0; i--)
                {
                    new_id += new_id.match(/.$/g).join('')
                }
        }
    return new_id
}

function solution(new_id) {
    // step1
    new_id = new_id.toLowerCase();
    // step2 alphanumerica, -, _, . => 정규식으로 해결
    new_id = new_id.replace(/[^\w-\._]+/g, '');
    // step3 
    new_id = new_id.replace(/[\.]{2,}/g, '.');
    // step4
    new_id = new_id[0] === '.' ? new_id.slice(1) : new_id;
    new_id = new_id[new_id.length - 1] === '.' ? new_id.slice(0, new_id.length - 1) : new_id;
    // step5
    new_id = new_id.length === 0 ? 'a' : new_id;
    // step6
    new_id = new_id.length > 15 ? new_id.slice(0, 15) : new_id;
    new_id = new_id[14] === '.' ? new_id.slice(0, 14) : new_id;
    // step7
    if (new_id.length < 3) {
        new_id = new_id + new_id[new_id.length - 1].repeat(2);
        new_id = new_id.slice(0, 3);
    }
    return new_id;
}

function solution(new_id) {
    const newId = new_id
      .replace(/[A-Z]/g, char => char.toLowerCase())
      .replace(/[^0-9a-z\.\_\-]/g, '') //2
      .replace(/[.]{2,}/g, '.') //3
      .replace(/^\.|\.$/g, '') //4
      .replace(/^$/, 'a') // 5
      .substring(0, 15) //6 
      .replace(/[.]+$/, ''); //6
      
      return newId.padEnd(3, newId[newId.length - 1]);
  }
  
  function solution(new_id) { 
    
    // 1단계
    new_id = new_id.toLowerCase()
    
    // 2단계
    new_id = new_id.replace(/[^0-9a-z\.\_\-]/g, '')
    
    // 3단계
    new_id = new_id.replace(/[.]{2,}/g, '.') 
    
    // 4단계
    new_id = new_id.replace(/^\.|\.$/g, '')
    
    // 5단계
    new_id = new_id.length === 0 ? 'a' : new_id;
    
    // 6단계 
    new_id = new_id.length > 15 ? new_id.slice(0, 15) : new_id;
    new_id = new_id.replace(/^\.|\.$/g, '')
    
    // 7단계
    return new_id.padEnd(3, new_id[new_id.length - 1]);
}