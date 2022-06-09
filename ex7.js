let [a,...b]=[1,2,3,4,5,6];
console.log(a); // 1
console.log(b); // 2 3 4 5 6

let [x,y,w,z]=[4,5,6,7];
console.log(x,y,w,z);   // 4 5 6 7 각 변수에 1대1로 

let [a1,b1,c1=10]=[4,7];
console.log(a1,b1,c1);  // 4 7 10..... 만약 [4,7,8] 이였으면 c에는 8의 값을 가지게 됨


