/**
 * 题目：两数之和
 * 
 * 问题描述：
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * 你可以按任意顺序返回答案。
 * 
 * 示例 1：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 示例 2：
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 
 * 示例 3：
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 * 
 * 提示：
 * 2 <= nums.length <= 10 ^ 3
 * -10 ^ 9 <= nums[i] <= 10 ^ 9
 * -10 ^ 9 <= target <= 10 ^ 9
 * 只会存在一个有效答案
 * 
 * 来源：https://leetcode-cn.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 暴力解法
 * 
 * 时间复杂度：O(n ^ 2)
 * 空间复杂度：O(1)
 */
var twoSum = function(nums, target) {
    const length = nums.length

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 哈希表
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var twoSum = function(nums, target) {
    const length = nums.length

    let map = {}

    for (let i = 0; i < length; i++) {
        const diff = target - nums[i]

        if (map[diff] !== undefined) {
            return [map[diff], i]
        }

        map[nums[i]] = i
    }
};