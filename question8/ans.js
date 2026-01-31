// sayHello();
// function sayHello() {
//   console.log("Hello");
// }
// sayHi();
// var sayHi = function () {
//   console.log("Hi");
// };

// predicted output:
// 1) sayHi is not a function

// var sayHi is hoisted, but hoisted as undefined , sayHi() is calling undefined function so it is throwing an error 
// that sayHi is not a function


sayHello();
function sayHello() {
  console.log("Hello");
}
var sayHi = function () {
  console.log("Hi");
};
sayHi();