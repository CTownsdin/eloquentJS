// starting from 1, repeated add 5, or mult by 3,
// in an attempt to find the solution.
function findSolution(target) {
  function find(start, history) {
    if (start === target) return history;

    else if (start > target) return null;

    else
      return find(start + 5, "(" + history + " + 5)") || find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");  // starts here
}

console.log(findSolution(19));
//
