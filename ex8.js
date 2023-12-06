//es6 좀 더 언어적으로바뀜, set,map가능(컬렉션)
let set = new Set("abccccdffdfeeerqafafaf")//중복문자걸러짐
console.log(set);

set.add("g");
console.log(set);

console.log(set.has("a")); //포함하면 true

console.log(set.has("n"));
console.log("길이: " + set.size);

console.log(...set);
set.delete("a"); //하나씩 삭제
console.log(...set);

set.clear(); //전체삭제
console.log("길이: " + set.size);

//비교연산자
let a = 6;
let b = "6";

console.log(a==b);//true 값으로만 비교
console.log(a===b)//false 타입까지 같아야 true