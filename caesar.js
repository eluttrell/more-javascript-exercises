// Caesar
function toNum(a) {
  var x = a.charCodeAt(0) + 13;
  if (x > 122) {
    x -= 26;
  }
  return String.fromCharCode(x);
}

var cipher = function (str) {
  return str.split('').map(toNum).join('');
};

console.log(cipher('hello'));

// =============================================================================

// Toby's Caesar (NOT WORKING)
// var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
//
// function mapChar(chr) {
//   var result = '';
//   var idx = alphabet.indexOf(chr.toUpperCase());
//   var newIdx = idx + 13;
//   if (newIdx >= alphabet.length) {
//     newIdx -= 26;
//   }
//   result += alphabet[newIdx];
// }
//
// function cipher(text) {
//   return text.split('').map(mapChar).join('');
// }
//
// cipher('HELLO');
// var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
// var result = '';
// for (var i = 0; i < text.length; i++) {
//   var chr = text[i];
// var idx = alphabet.indexOf(chr.toUpperCase());
// var newIdx = idx + 13;
// if (newIdx >= alphabet.length) {
//   newIdx -= 26;
// }
// result += alphabet[newIdx];
// }
// return result;
// }
