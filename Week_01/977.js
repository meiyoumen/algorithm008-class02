//给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
//
//
//
// 示例 1：
//
// 输入：[-4,-1,0,3,10]
//输出：[0,1,9,16,100]
//
//
// 示例 2：
//
// 输入：[-7,-3,2,3,11]
//输出：[4,9,9,49,121]
//
//
//
//
// 提示：
//
//
// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A 已按非递减顺序排序。
//
// Related Topics 数组 双指针


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(item => item*item).sort((a,b) => a-b)
};
//leetcode submit region end(Prohibit modification and deletion)
var sortedSquares2 = function(A) {
  let res = []
  for(let i =0; i<A.length; i++) {
    if(A[i]<0) {
      res.push(Math.abs(A[i]*A[i]))
    } else {
      res.push(A[i]*A[i])
    }
  }

  return res.sort((a,b) => a-b)
};


console.log(sortedSquares([-4,-1,0,3,10]))
console.log(sortedSquares([-7,-3,2,3,11]))
