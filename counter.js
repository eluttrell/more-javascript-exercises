function counter() {
  var i = 0;
  function count() {
    return i += 1;
  }
  return count;
}

var count1 = counter();
var count2 = counter();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
console.log(count2());
