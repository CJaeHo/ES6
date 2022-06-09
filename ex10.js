// Number 객체

let a=12;
let b=23.0;
let c=12.6;
console.log(a+"는 정수인가?"+Number.isInteger(a));  // true
console.log(a+"는 정수인가?"+Number.isInteger(b));  // true.. 23.0도 정수로 판단한다는 사실!!
console.log(a+"는 정수인가?"+Number.isInteger(c));  // false

console.log();
console.log();
let a1="NaN";
let b1=NaN;
let c1="안녕";
let d1=12;
// es5의 isNaN
console.log("es5 isNaN");           // 숫자가 아닌건 다 true였는데
console.log(a1+" 은 NaN인가?"+isNaN(a1));
console.log(b1+" 은 NaN인가?"+isNaN(b1));
console.log(c1+" 은 NaN인가?"+isNaN(c1));
console.log(d1+" 은 NaN인가?"+isNaN(d1));

// es6의 isNaN
console.log("es6 isNaN");           // 6에서는 ㄹㅇ NaN인 경우에만 true가 나옴
console.log(a1+" 은 NaN인가?"+Number.isNaN(a1));
console.log(b1+" 은 NaN인가?"+Number.isNaN(b1));
console.log(c1+" 은 NaN인가?"+Number.isNaN(c1));
console.log(d1+" 은 NaN인가?"+Number.isNaN(d1));

console.log();
console.log("반복함수 repeat");
console.log('ㅋ'.repeat(100));
console.log('='.repeat(100));
console.log('*'.repeat(100));


var x="20";
var y="3";
console.log(x+y);                   // 203 : 문자들의 합
console.log(Number(x)+Number(y));   // 23 : 숫자들의 합