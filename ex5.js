// 함수 파라미터에 기본값이 가능하다

function func1(x,y=200,z=300){
    console.log(x,y,z);
}

func1(3,5,6);
func1(100);
func1(2,5);
func1(); // undefined 200 300 // 에러안나고 undefined으로 null이라고 생각해

function func2(a,b){
    return a+b;
}

let r1=func2(5,6);
console.log(r1); // 리턴 값 11 출력

let arr=[2,5,9];
let r2=func2(arr[0],arr[1]);
console.log(r2); // arr 배열에서 0번째, 1번째 인덱스값이 리턴되서 7 출력

// ...은 es6에서 추가된 기능이고 펼침연산자라고 부름
func1(...arr);
func1(arr[0],arr[1],arr[2]); // 위와 같다

let r3=func2(...arr); // 앞 2개값이 넘어감
console.log(r3); // 앞에 두개 인덱스해서 7 출력