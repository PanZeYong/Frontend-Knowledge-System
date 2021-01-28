/**
 * 题目：只出现一次的数字
 * 
 * 问题描述：
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 示例 2:
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 * 来源：https://leetcode-cn.com/problems/single-number/
 * 
 * 考点：位运算中异或运算 XOR
 * 一个数和 0 做 XOR 运算等于本身：a⊕0 = a；
 * 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
 * XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
 */

 /**
 * @param {number[]} nums
 * @return {number}
 * 
 * 时间复杂度：n
 * 空间复杂度为：1
 */
var singleNumber = function(nums) {
    return nums.reduce((current, value) => current ^ value, 0)
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const length = nums.length

    let result = 0

    for (let i = 0; i < length; i++) {
        result ^= nums[i]
    }

    return result
};