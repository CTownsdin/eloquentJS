'use strict';
var _ = require('../lib/lodash.min.js');

// countBs(str) { return (num of Bs in str ); }
var countBs = function(str) {
  var bCount = 0;
  for(var i=0, len=str.length; i<len; i++){
    if (str.charAt(i) === 'B') bCount += 1;
  }
  return bCount;
};

// basic lodash testing
var mySparseArray = [0, 1, false, true, 1337, 'Hello', '', NaN, undefined, 'W00T'];
console.log('_.compact: ' + _.compact(mySparseArray));

// countBs again, but now with lodash
var countBs2 = function(str) {
  var bCount = _.reduce(str, function(sum, num){

    return
  });
};


console.log('bCount of: jBjB123B: ' + countBs('jBjB123B'));
