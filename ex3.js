/*
    var : 함수형 변수
    let : 영역형 변수
*/
// var a=1;
// let b=2;
// function myFunction(){
//     var a=3; // 5번행 변수와 전혀 다른 변수
//     let b=4; // 6번행 변수와 전혀 다른 변수

//     if(true){
//         var a=5; // 8번행의 a값을 덮어씀
//         let b=6; // 9번행의 b와 전혀 다른 변수
//         console.log(a);
//         console.log(b);
//     }

//     console.log(a);
//     console.log(b);
// }

// myFunction();
// console.log(a);
// console.log(b);

///////////////////////////////////////// 복 습 ///////////////////////////////////////////
var a = 1;
let b = 2;
function myFunction(){
    var a = 3;
    let b = 4;
    if(true){
        var a = 5;
        let b = 6;
        console.log(a);     // 5
        console.log(b);     // 6
    }
    console.log(a);         // 5
    console.log(b);         // 4
}

myFunction();
console.log(a);             // 5 -> x => 1임....왜..?
console.log(b);             // 2
