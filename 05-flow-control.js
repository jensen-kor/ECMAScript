// if ~else if ~else
// swith ~ case
// for, while, do while
// 모두 c계열 문법과 거의 동일

// 연습문제 1-1 ) for 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('----------------');
}


// 연습문제 1-2 ) while 문 구구단을 이용
let i = 1;
while (i <= 9) {
    let j = 1;
    while (j <= 9) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    console.log('----------------');
    i++;
}


// 연습문제 2-1  for 문 이용하여 별 그리기) 

    for (let i = 5; i >= 1; i--) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';  
        }
        console.log(stars);  
    }
    
let row= 5;
while(row > 0) {
    let stars = "";
    let col = 1;
    while(col <= row) {
        stars += "*";
        col ++
    }
    console.log(stars);
    row --;
}

// TODO: for ... in  --> 개체의 속성 key를 반복하는 루프

// TODO: for ... of   --> 컬랙션 객체(배열)의 요소 순환