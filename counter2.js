function counter(n) {
  var i = n;
  function count() {
    return i++;
  }
  return count;
}

var count1 = counter(5);
console.log(count1());
console.log(count1());
console.log(count1());
