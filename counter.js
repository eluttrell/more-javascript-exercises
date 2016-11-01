function counter() {
  var i = 1;
  function count() {
    return i++;
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
