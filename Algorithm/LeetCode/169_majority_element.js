/**
 * 题目：多数元素
 * 
 * 问题描述：
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 示例 1：
 * 输入：[3,2,3]
 * 输出：3
 * 
 * 示例 2：
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 * 
 * 来源：https://leetcode-cn.com/problems/majority-element/
 */

 /**
  * 排序
  * 
 * @param {number[]} nums
 * @return {number}
 * 
 * 思路：因为大于一半，所以排序后，中间那个数就是了
 * 
 * 时间复杂度：时间复杂度 O(nlogn) 
 * 空间复杂度：空间复杂度 O(1)
 */
var majorityElement = function(nums) {
    const length = nums.length
    nums = nums.sort((a, b) => a - b)
    return nums[Math.floor(length / 2)]
};

/**
 * 摩尔投票法
 * 
 * @param {number[]} nums
 * @return {number}
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var majorityElement = function(nums) {
    const length = nums.length
    let count = 0
    let candidate = 0

    for (let i = 0; i < length; i++) {
        if (count === 0) candidate = nums[i]
        count += nums[i] === candidate ? 1 : -1
    }

    return candidate
};

/**
 * 哈希法
 * 
 * 时间复杂度：空间复杂度 O(n)
 * 空间复杂度：空间复杂度 O(n)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    let length = nums.length

    for (let i = 0; i < length; i++) {
        const key = map[nums[i]]
        if (key) {
            map[nums[i]] = key + 1
        } else {
            map[nums[i]] = 1
        }
    }

    let result = []

    Object.keys(map).forEach(key => {
        if (map[key] > (length / 2)) {
            result.push(key)
        }
    })

    return result
};