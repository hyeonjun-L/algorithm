/*
let j = 1
for(let i = 4; i>=0; i--){
    console.log(' '.repeat(i) + '*'.repeat(j))
    j += 2;
}
*/

/*
const x = {

    attack(){
        console.log('파이어 볼')
    }
}


const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
*/

let asv = [1,2,3,4,6]
asv.reduce((acc,val) => { })
const add = (num, num2) => (num + num2)
console.log(''||'s')

let name = 'jane'

let boy = {
    name : "mike",
    sayhello : function(){
        console.log(`hello ${this.name}`)
    }
}
boy.sayhello()

function Person () {
    this.name = 'ken';
    console.log(this);
  }
   
  var ken = new Person();
  console.log(ken);

  const arr = [10, 20, 30];

for (const item in arr){
    console.log(item); // 10, 20, 30 출력
}

const obj = {
    name: 'curryyou',
    job: 'engineer'
}

for (const key in obj){
    console.log(key);
}

let test = [1,2]
test[2] = 1
console.log(test)