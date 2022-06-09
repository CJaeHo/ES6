let irum="최재호";
let birth=1994;
let food='삼겹살';

let currYear=new Date().getFullYear();              // getFullYear가 자바엔 없는데 자바스크립트에는 있는거임
let result=`이름 : ${irum}
태어난 년도 : ${birth}
나이 : ${currYear-birth}
좋아하는 음식 : ${food}`;
console.log(result);