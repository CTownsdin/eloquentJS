function findSolution(target) {
  function find(start, history){
    if (start === target) return history;

    else if (start > target) return null;

    else
      return find(start + 7, "(" + history + " + 7)") || find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(31));

// target = 8
// find(1, "1")
// start = 1, history = 1
//

