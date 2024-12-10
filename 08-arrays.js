// 배역
// 생성 1. Array 객체 이용
const v1 =new Array(10); // 10개짜리 배열
const v2 = new Array();  //빈 배열
const v3 = new Array(1, "ABC", true); // 초기화 배역
console.log(v1, v1.length);
console.log(v2, v2.length);
console.log(v3, v3.length);

// 생성 2. 리터럴로 생성(추천)
const v4 = [];  // 빈 배열
const colors = ["red", "green", "blue", "yellow"];

// 타입 체크
console.log(typeof v4, typeof colors);

//특정 객체가 Array인지 확인
console.log(Array.isArray(v4), Array.isArray(colors));

// 기본 값으로 채우기
const v5 = new Array(10).fill(1);
console.log(v5);
v5.fill("a");
console.log(v5);

// 객체도 배열처럼 접근할 수 있음
const person= {
    name: "홍길동",
    age: 28
}
console.log(person['name'], person['age']);


// 자바스크립트의 배열은 인덱스 범위를 엄격히 체크하지 않는다
const arr = [];
console.log(arr, arr.length);
// 인덱스 범위를 벗어난 배열의 접근
arr[10] = 2024;
console.log(arr, arr.length); //10번 인덱스에 2024가 들어가서 0부터 시작이니까 앞에 10개 비어있고 11번째 2024

console.log("============== Methods");
// 배열 합치기 : concat
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고추가루", "후추"];
const ingr = veges.concat(sources);
console.log(ingr);

// join : 특정 문자열 기준 합치기
console.log("김장 재료,", ingr.join(", "));

// push, pop -> Stack 자료형 처럼 사용 가능
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.pop());
console.log(fruits.pop());


fruits.push('Orange', 'Mango', 'Kiwi');
console.log(fruits);
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

// splice

fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
console.log(fruits);
// 매개변수가 1개: 해당 인덱스부터 끝까지 추출 후 제거
console.log(fruits.splice(2)); // 추출한 목록 2번 index부터 끝까지
console.log(fruits); // 남아있는거

// 매개 변수가 2개 : 첫번째 매개변수 인덱스 ~ 두번째 매개변수 갯수 만큼 추출 후 삭제
fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
console.log(fruits.splice(2,1)); // 추출한 목록 2번인덱스 부터 1개
console.log(fruits);// 추출 후 남아있는 목록

// 매개 변수 3개 이상
// 첫번째 매개변수 인덱스 ~ 두번쨰 매개변수 개수만큼 추출 후 삭제, 세번째 이후 매개변수를 요소로 추가
fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
console.log(fruits.splice(2, 1, "Guava", "Grape")); // 추출한 목록 출력
console.log(fruits); // 그 자리에 새 목록 추가

console.log("=============== reverse"); // 순서 반전
fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
console.log("원본:", fruits);
fruits.reverse();
console.log("Reverse:", fruits);

console.log("---------- slice");
fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
console.log("원본:", fruits);
let slice = fruits.slice(2, 5); // 2번부터 5번까지
console.log("slice:", slice);

console.log("---------sort"); //정렬
fruits.sort();
console.log("sort", fruits);// 기본 오름차순

// fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
// fruits.sort((v1, v2) => {
//     // 0이면 순서가 같다 (변경 없음)
//     // 0보다 작을 때 = v1이 앞으로
//     // 0보다 클 때 = v2가 앞으로
//     if (v1 < v2) return 1;
//     if (v1 > v2) return -1;
//     if (v1 == v2) return 0;
// });
// console.log("sort:", fruits);

/* 문자열 길이 순으로 정렬 */
fruits.sort((v1, v2) => {
    return v1.length - v2.length;
});
console.log("sort:", fruits);

// split
console.log("============ String::split");
// 구분자를 기준으로 문자열 분할 -> 배열로 반환
const str = "JavaScript is something strange than other languages";
console.log(str);
let chunks = str.split(' ');
console.log(chunks);

for (let i = 0; i < chunks.length; i++) {
    console.log(chunks[i]);
}
