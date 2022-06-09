const r=(w,h)=>{
    if(Number.isNaN(w*h)){
        return "가로, 세로 값이 숫자가 아닙니다.";
    } else{
        console.log(`가로가 ${w}, 세로가${h}인 사각형의 너비는 ${w*h}입니다`);
        return w*h;
    }
}
// `` : 이거 템플릿 리터널이래 => 이걸 쓰면 문자열 중간중간에 값을 넣을 수 있대 오옹!
console.log(r(4,5));
console.log(r('hello',10));


// includes 함수
let msg=`우리는 지금 
    ecma script6을 
    공부하고 있어요`;
console.log(msg);       // 줄넘김도 되네~ 고대로 출력됨


console.log(msg.includes("script"));        // script라는 문자열을 포함하고 있으면 true
console.log(msg.startsWith("우리는"));      // 특정 단어로 시작하면 true가 나옴
console.log(msg.endsWith("다"));            // 특정 단어로 끝나면 true가 나옴