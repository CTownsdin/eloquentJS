// fn min takes 2 args and returns the smaller one.
var minFn = function(a, b) {
  if ( a < b ) return a;
  else if ( b < a ) return b;
  else return a;
}

console.log(minFn(13,17));
