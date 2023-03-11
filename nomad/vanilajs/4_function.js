function sayHello(name, age){
  console.log("Hello my name is " + name + " and I'm  " + age);
}

function plus(a, b){
  return a + b; // return값 주기
}

const name1 = "minhyung";
const age1 = 24;

const player = {
  name : name1,
  sayHello : function(otherName){
    console.log("Hello! " + otherName); 
  }
}; //  객체 안에 메소드 정의



const f = plus(10, 5);
console.log(f);
console.log(player.name);
player.sayHello("lynn");

alert();
sayHello(name1, age1); 

