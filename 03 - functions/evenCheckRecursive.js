// 0 is even
// 1 is odd
// any N, it's evenness is evenness(N-2)  ! :)
// unless < 0, then N+2
// write this fn, fn(num) -> boolean
var evenCheckRecursive = function(num) {
  function recur(num){
    // 0 is even, basecase
    if (num === 0) return true;
    // 1 is odd, basecase
    if (num === 1) return false;

    // if num is (+), recur(n-2)
    if (num > 0) {    // num is (+)
      return recur(num - 2);
    }
    // else, (num is (-)), recur(n+2)
    else return recur(num + 2);
  }
  return recur(num);
}

console.log(evenCheckRecursive(3));
// false
console.log(evenCheckRecursive(15));
// false
console.log(evenCheckRecursive(18));
// true
console.log(evenCheckRecursive(-1));
// false
console.log(evenCheckRecursive(-11));
// false
console.log(evenCheckRecursive(-10));
// true
