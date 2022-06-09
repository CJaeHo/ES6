// 객체 할당

let obj1={"name":"lee","age":23};       // <- JSON 타입방식
console.log(obj1.name,obj1.age);

// 오브젝트 대입
let obj2=obj1;
console.log(obj2.name,obj2.age);        // 대입 가능


// 이름, 나이를 단일변수에 대입(es5)
let name1=obj2.name;
let age1=obj2.age;
console.log(name1,age1);



// es6 .... 리엑트에서도 많이 쓰는 방식이니까 알아두도록
let name, age;
({name,age}=obj1);      // 이렇게 쓸려면 객체의 멤버와 같은 이름으로 선언해주어야 사용가능
console.log(name,age);  // name과 age라는 멤버를 쓸껀데 obj1객체에 있는 name과 age멤버의 값을 넣겠다는 의미가 되는거지..

// 함수 인자로 객체를 보낼경우
function f1({name='수지', age=20}={}){          // 리엑트에서는 ={} 처럼 초기화 안해줘도 됨
    console.log(name,age);
}
// 함수 호출
f1(obj1);       // obj1객체를 전체로 보내면 바뀌지 않음
f1();           
f1(obj1.name);  // 하지만 멤버로 보내게되면 바뀜





