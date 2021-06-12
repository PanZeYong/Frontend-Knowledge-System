/**
 * 题目：最大子序和
 * 
 * 问题描述：
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和
 * 
 * 示例 1：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 
 * 
 * 示例 2：
 * 输入：nums = [1]
 * 输出：1
 * 
 * 示例 3：
 * 输入：nums = [0]
 * 输出：0
 * 
 * 示例 4：
 * 输入：nums = [-1]
 * 输出：-1
 * 
 * 示例 5：
 * 输入：nums = [-100000]
 * 输出：-100000
 * 
 * 提示：
 * 1 <= nums.length <= 3 * 10^4
 * -10^5 <= nums[i] <= 10^5
 * 
 * 来源：https://leetcode-cn.com/problems/maximum-subarray/
 */




/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * 贪心法
 * 
 * 解题思路：若当前指针所指元素之前的和小于 0，则丢弃当前元素之前的数列
 */
var maxSubArray = function(nums) {
    const length = nums.length

    let pre = nums[0]
    let maxSum = nums[0]

    for (let i = 1; i < length; i++) {
        pre = Math.max(nums[i], pre + nums[i])
        maxSum = Math.max(pre, maxSum)
    }

    return maxSum
};

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 *
 * 动态规划
 *
 * 解题思路：若前一个元素大于 0 时，则加到当前元素上
 */
 var maxSubArray = function(nums) {
    const length = nums.length

    for (let i = 1; i < length; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
    }  

    return Math.max(...nums)
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSubSum = nums[0];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i]
        } else {
            sum = nums[i];
        }

        maxSubSum = Math.max(maxSubSum, sum);
    }

    return maxSubSum;
};