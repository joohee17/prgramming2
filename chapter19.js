function returnFalse() {
  //console.log("false 함수 호출");
  return false;
  //return undefined;
}

function returnTrue() {
  //console.log("true 함수 호출");
  return true;
  //return 55;
}
console.log(returnFalse() && returnTrue());
//console.log(returnTrue() && returnFalse());
//console.log(returnTrue() || returnFalse());

function printName(person) {
  console.log(person && person.name);
}
printName();

// 단락 평가 활용 사례
// function printName(person) {
//   const name = person && person.name;
//   console.log(name || "person의 값이 없음");
// }

// printName();
// printName({ name: "이정환" });


// T || T  => 앞의 Truthy 값이 반환
// T || F  => 앞의 Truthy 값이 반환
// F || T  => 뒤의 Truthy 값이 반환
// F || F => 뒤의 Falsy 값이 반환
// T && T => 뒤의  Truthy 값이 반환
// T && F => 뒤의  Falsy 값이 반환
// F && T => 앞의 Falsy 값이 반환
// F && F => 앞의 Falsy 값이 반환

