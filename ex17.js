class School{
    constructor(sname){
        this.sname=sname;
        console.log("부모 클래스 생성자 호출");
    }

    writeSchool(){
        console.log(`나의 학교명은 ${this.sname}고등학교 입니다.`);
    }
}

// 상속
class Student extends School{
    constructor(sname,myname){
        super(sname);        // 자바에서는 super()가 생략이되지만 여기에서는 생략하면 안됨... 부모 생성자 호출해줘야함
        console.log("자식 클래스 생성자 호출");
        this.myname=myname;
    }

    writeInfo(){
        this.writeSchool();     // 상속받은 writeSchool을 호출하기
        console.log(`내 이름은 ${this.myname} 입니다`);
    }

}

let a=new Student("단국대학교 사범대학 부속","최재호");
a.writeInfo();












