/*
var : 함수형 변수
let : 영역형 변수
const : 영역형 변수 상수
*/

//var Test:재선언 가능, 재할당 가능
var hello = "안녕";
var hello = "헬로우";
var cnt = 5;

if(cnt<6){
    var hello1="say hello~~";
    console.log(hello1);
}

console.log(hello1);
console.log(hello);
console.log("----------------");
//let ..재선언 불가능, 재할당 가능
let hi = "hi";
hi = "하이라고 할게";

let times = 5;

if(times>3){
    let hi1="say Hi~~";
    console.log(hi1);
}

//console.log(hi1);
console.log(hi);
console.log("----------------");

//const 재선언 불가능, 재할당 불가능
const hi3 = {
    message:"3th say Hi~~",
    times:4
}
console.log(hi3);

hi3.message = "이렇게는 됩니다";
hi3.times = 44;

console.log(hi3);