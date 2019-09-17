// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let downStream = []
  let upstream = []
  A.forEach((element, i) => {
    const direction = B[i]
    if (direction === 0) {
      while (downStream.length > 0) {
        if (element > downStream[downStream.length - 1]) {
          downStream.pop();
        }
        else {
          break
        }
      }
      if (downStream.length === 0) {
        upstream.push(element)
      }
    }
    else {
      downStream.push(element)
    }
  });
  return upstream.length+downStream.length;
}

module.exports.solution = solution;