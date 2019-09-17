const assert = require('assert');
const fish = require('./fish')
describe('Fish exercise test', ()=>{
  it('Should give result of 1', ()=>{
    const A = [1,2]
    const B = [1,0]
    assert.equal(fish.solution(A,B),1);
  })
  it('Should give result of 2', ()=>{
    const count =10000000
    const expected = 2;
    const A = [4000]
    
    for (let i = 1; i < count; i++) {
      A.push(4000-i);
    }
    const B = new Array(count).fill(0);
    B[1] = 1
    assert.equal(fish.solution(A,B),expected);
  })
  it('Should give result of 2', ()=>{
    const A = [4, 3, 2, 1, 5]
    const B = [0, 1, 0, 0, 0]
    assert.equal(fish.solution(A, B),2);
  })
})