'use strict';

var day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running", "television"]
};

var anObject = {left: 1, right: 2};
console.log(anObject.left);
// 1
delete anObject.left;
console.log(anObject.left);
// undefined
console.log('left' in anObject);
// false
console.log('right' in anObject);
// true

// Jacques Journal
var journal = [
  {
    events: ['work', 'touched tree', 'pizza', 'running', 'television'],
    squirrel: false
  },
  {
    events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'],
    squirrel: false
  },
  {
    events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
    squirrel: true
  }
];

console.log('***********');

var obj1 = {value: 10};
var obj2 = obj1;
var obj3 = {value: 10};

console.log(obj1 == obj2);
// T
console.log(obj1 == obj3);
// F

obj1.value = 15;
console.log(obj2.value);
// ! 15
// 2 references to the same object
console.log(obj3.value);
// 10

console.log('************');

// The lyncathrope's log
var journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal);

// two by two table with 4 element array  ([76, 9, 4, 1])
// left most squirrel, right most pizza,  ex...  10  yes squirrel, no pizza

console.log('computing...');

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0,0,0,0];
  for (var i=0; i<journal.length; i++) {
    var entry = journal[i], index=0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// 0.069

console.log('*********MAP******');
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi('pizza', 0.069);
storePhi('touched tree', -0.081);
console.log('pizza' in map);
// T
console.log(map['touched tree']);
// -0.081

// to enumerate the props of an obj
// use the for in loop
for (var event in map){
  console.log('The correlation for "' + event + '" is ' +
        map[event]);
}


// The final analysis.
// TODO - Write that better with Lodash functional style!
function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++){
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis)){
        phis[event] = phi(tableFor(event, journal));
      }
    }
  }
  return phis;
}

var correlations = gatherCorrelations(journal);
console.log(correlations.pizza);
console.log('*********');

console.log('for (var event in correlations){');
for (var event in correlations){
  console.log(event + ': ' + correlations[event]);
}

// How to store these correlations once we compute then?
// Use Objects as Maps.
// Use Object properties named after the event types.
// Use [] to C and R the props, and use the 'in' to test if
// a given prop exists

console.log('');
var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi('pizza', 0.069);
storePhi('touched tree', -0.081);

console.log('pizza' in map);
// T
console.log(map['touched tree']);
// -0.081


// Further arrayology
