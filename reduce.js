/**
 * 算出所有奇数之和
 */
let scores = [95,91,59,55,42,82,72,85,67,66,55,91]
let sum = scores.reduce((sum, n)=>{
  return sum+(n%2?n:0)
},0)
console.log(sum) // 奇数之和：598 