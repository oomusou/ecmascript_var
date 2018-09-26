function foo() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}

foo();
