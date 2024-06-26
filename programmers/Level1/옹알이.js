solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	)

/*
function solution(babbling) {
    Pronunciation = ["aya", "ye", "woo", "ma"]
    for(let i = 0; i < babbling.length; i++){
        for(let j = 0; j < 4; j++){
            if(babbling[i] === Pronunciation[j]) break
            else if(babbling[i].split(Pronunciation[j]).filter((Pronun, i,arr) => (Pronun === '') && (Pronun === arr[i + 1])).length){
                babbling[i] = ''
            }
        }
    }
    babbling = babbling.filter((v) => v !== '')
// ----------------------------------------------------------------중복 제거 ↑

    for(let i = 0; i < babbling.length; i++)
    {
        babbling[i] = babbling[i].replace(/aya|ye|woo|ma/g,'')
    }

    console.log(babbling.filter((v) => v === '').length)
}
*/

function solution(babbling) {
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    const regexp2 = /^(aya|ye|woo|ma)+$/;
    console.log(regexp1.test("woowoomayeye"))

    return babbling.reduce((ans, word) => (
      !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
    ), 0);
  }