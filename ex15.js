// es6에서는 class 기능이 추가됨

class Student{
    // 생성자
    constructor(name){              // 생성자는 class이름과 같지 않고 무조건 constructor임
        this.name=name;             // 앞에 name이 자동적으로 멤버변수로 인식 됨
    }

    // 멤버 함수
    writeName(){
        console.log(`내 이름은 ${this.name} 인데요!!`);
    }
}

let s1=new Student("마이클");
console.log("이름 : "+s1.name);
s1.writeName();

let s2=new Student("캐서린");
console.log(`이름 : ${s2.name}`);
s2.writeName();