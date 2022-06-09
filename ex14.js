// 비교 연산자
let a=6;
let b="6";
console.log(a==b);      // true     -> 값만 같으면 true나오고
console.log(a===b);      // false   -> 타입+값 둘다 같으면 true 나옴
console.log(Object.is(a,b));    // false
console.log(`a의 타입은 ${typeof(a)} 입니다`);
console.log(`b의 타입은 ${typeof(b)} 입니다`);