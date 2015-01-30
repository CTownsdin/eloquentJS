var _ = require('../lib/lodash.min.js');
// basic lodash testing
var mySparseArray = [0, 1, false, true, 1337, 'Hello', '', NaN, undefined, 'W00T'];
console.log('_.compact: ' + _.compact(mySparseArray));

// countBs(str) { return (num of Bs in str ); }
var countBs = function(str) {
  // TODO: replace with lodash
  var bCount = 0;
  for(var i=0, len=str.length; i<len; i++){
    if (str.charAt(i) === 'B') bCount += 1;
  }
  return bCount;
};

var countBs2 = function(str) {
  var bCount = _.filter(str, function(someThing){
    return someThing
  })
}


console.log('bCount of: jBjB123B: ' + countBs('jBjB123B'));
