//给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
//
// 示例 1:
//
// 输入: [1,2,3,4,5,6,7] 和 k = 3
//输出: [5,6,7,1,2,3,4]
//解释:
//向右旋转 1 步: [7,1,2,3,4,5,6]
//向右旋转 2 步: [6,7,1,2,3,4,5]
//向右旋转 3 步: [5,6,7,1,2,3,4]
//
//
// 示例 2:
//
// 输入: [-1,-100,3,99] 和 k = 2
//输出: [3,99,-1,-100]
//解释:
//向右旋转 1 步: [99,-1,-100,3]
//向右旋转 2 步: [3,99,-1,-100]
//
// 说明:
//
//
// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 要求使用空间复杂度为 O(1) 的 原地 算法。
//
// Related Topics 数组


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
 注释：该方法会改变原始数组。

 index	  必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
 howmany	必需。要删除的项目数量。如果设置为 0，则不会删除项目。
 item1, ..., itemX	可选。向数组添加的新项目。
 */
var rotate = function(nums, k) {
  nums.splice(0,0,...nums.splice(nums.length-k))
  return nums
};
//leetcode submit region end(Prohibit modification and deletion)


/**
 * pop()	    删除并返回数组的最后一个元素
 * unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
 *
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 //输出: [5,6,7,1,2,3,4]
 */
var rotate2 = function (nums, k) {
  for (let i = 0; i< k; i++) {
    nums.unshift(nums.pop())
  }
  return nums
}
