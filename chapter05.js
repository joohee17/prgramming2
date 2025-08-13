// 1. Number Type
let num1 = 27;  //정수
let num2 = 1.5; //실수
let num3 = -20; //음수

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); //나머지구하는연산

let inf = Infinity;   //양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN;        //Not a Number
console.log(1 * "hello");

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceText);
// 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none; //초기값없이 출력
console.log(none);