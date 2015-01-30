'use strict';
var _ = require('./lodash.min.js');

// lodash functions

// _.compose      http://lodash.com/docs#compose
//   var composedFunction = _.compose(function2, function1);


// _.filter, a.k.a. _.select
//   returns an array of elements that passed the callback check
var arr = [1,2,3,4,5];
var str = "Hello Betty, looking Beautiful today!";
var obj = { key1: 'val1', key2: 'val2'};
var characters = [
  {'name': 'Adam', 'age': 32, 'sex': 'Male'},
  {'name': 'Sally', 'age': 32, 'sex': 'Female'},
  {'name': 'John', 'age': 40, 'sex': 'Male'},
  {'name': 'Prince', 'age': 21, 'sex': 'YesPlease'},
  {'name': 'Fred', 'age': 75, 'sex': 'Male'}
];

var odds = _.select(arr, function(num){
  return (num % 2 === 1);
});
console.log('_.select odds: '+ odds);
// 1,3,5
console.log('_.select Bs: ' + _.select(str, function(char) {
  return (char === 'B');
}));
// B,B
console.log('_.select key2: ' + _.select(obj, function(key) {
  return (key === 'val2');
}));
// val2

// _.map
//   _.map(array/collection, toDoFunction())
//   returns an array of the results of running toDoFunction() on
//   each element of the original array.
console.log('');
console.log('_.map');
console.log('arr before: ' + arr);
console.log('arr map\'d sq: ' + _.map(arr, function(a) {
  return a * a;
}));

console.log('');
// _.pluck
//   _.pluck(collection, property)
//   returns the specified property across the collection
console.log('_.pluck(character, \'name\'): ' + _.pluck(characters, 'name'));

console.log('');
// _.reduce
//   sort of accumulates it all, each run of the callback returns to the next run.
//   args:  (accumulator, value, index|key, collection)
console.log('_.reduce(): ' + _.reduce(arr, function(sum, num){
  return sum + num;
}));
console.log('_.reduce(): ' + _.reduce(arr, function(prod, num){
  return prod * num;
}));

// _.reject
//   the opposite of _select/_filter

// _.where
//   Performs a deep comparison of each element in a collection to the given   properties object, returning an array of all elements that have equivalent  property values.
console.log('_.where(characters, {\'age\': 32}): ' +
  _.where(characters, {'age': 32}));

// _.find
console.log('');
console.log('_.find() a char(s) <= 40: ' + _.find(characters, function(c) {
  return c.age <= 40;
}));
// {adam} just the first one found.
