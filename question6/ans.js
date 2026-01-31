
//1 Output undefined
// ReferenceError: Cannot access 'b' before initialization

//2 a: Undefined because a exist but but has not value yet
// b:  Reference Error: Cannot access b before initialization
//c: Undefined because value is not yet assigned to c 

//3: console.log(b)

var a = 10; //Values is assigned before console.log(a);
let b = 20;

console.log(a); //Now it will print the value = 10;
console.log(b); 

function test() {
  var c = 30; //Values is assigned before console.log(c);
  console.log(c); //It will print 30
}

test();
