// 전개 연산자
console.log("========배열 전개 연산");
let arr1 = ['홍길동', '장길산'];
let arr2 = ['임꺽정', '전우치'];
// arr1, arr2 하나로 합치려면?

let combine = [];
// 방법 1
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log("combined 1:", combined);

// 방법 2
combine = arr1.concat(arr2);
console.log("combined 2:", combined);
// 방법 3
combined = [].concat(arr1, arr2);
console.log("combined 3:", combined);

// ES6 방식
combined = [...arr1, ...arr2];
console.log("ES6 combined:", combined);

// 배열의 전개
console.log("===============배열의 전개");
console.log("arr1:", arr1);

// let first = arr[0];
// let second = arr[1]; // 권장하지 않음
let [first, second, third, ...others] = arr1;
console.log(first, second, third = "empty", others); // 3번째를 출력매세지를 empty로 입력

console.log("combined:", combined);
[first, second, third = "empty", ...others] = combined;  // 3번째 배열에 empty 입력
console.log(first, second, third, others); // 1첫번재배열 두번째배열, 3번째배열=empty입력됨, 나머지 배열 출력

console.log("=============객체 전개 연산");
let obj1 = { one: 1, two: 2, other: 0};
let obj2 = { three: 3, four: 4, other: -1};

// 방법 1
combined = {
    one: obj1.one, two : obj1.two, three : obj2.three, four: obj2.four, other: obj2.other  // 중복 속성(object)결정
}
console.log("combined 1:", combined);

// 방법 2
combined = Object.assign({}, obj1, obj2); // {}안에다가 obj1 obj2 넣어서 합침
console.log("combined 2:", combined); // other 가 겹치므로 뒤에 넣은 obj2 의 other 로 들어감

console.log("=============ES6 방식");
combined = {
    ...obj1, // obj1의 모든 속성을 전개 one two other
    ...obj2 // obj2의 모든 속성을 전개 three four other
}
console.log("ES6 combined 1:", combined); // 여기도 other 겹치므로 뒤에 넣은 obj2 의 other 출력

// 연결 순서 변경
combined = {
    ...obj2, 
    ...obj1 
}
console.log("ES6 combined 2:", combined); // 순서 변경

console.log("===========객체 전개 할당");
console.log("object:", combined);

let {other, ...remains } = combined;
console.log(other, remains);
