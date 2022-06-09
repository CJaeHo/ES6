// 컬렉션 set, map

let set=new Set("abcdefdxxxyyy");           // 중복된건 걸러내고 각각 나눠놓음
console.log(set);

// set에 추가
set.add("z");
set.add("a");                               // 중복된거 넣어도 에러안남
console.log(set);
console.log(set.has("x"));                  // x를 포함하고 있으면 true
console.log(set.has("!"));                  // !를 포함하고 있지않으면 false
console.log("길이 : "+set.size);            // 길이 값보려면 set.size
console.log(...set);                        // 펼침연산자 -> 따로따로 출력 됨
set.delete("a");                    // a 삭제
console.log(...set);                        // 다시 펼침연산자 -> a 빼고 따로따로 출력
set.clear();                        // 전체 삭제
console.log(set.size);                      // 갯수 0

console.log("여기부터는 Map");
let map=new Map();
let a={n:1};    // json type
map.set(a,"A"); // key가 json 타입 가능
map.set("2",9);
map.set("2",11);    // 같은 key값 일 경우에는 덮어씌우기가 된다
console.log(map);
console.log(...map);
console.log(map.has("2"));  // 2라는 key값이 있어? 어 있어 true

map.delete("2");            // 2라는 key값을 지워
console.log(map);
map.clear();
console.log(map);
