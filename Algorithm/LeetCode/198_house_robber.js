/**
 * 题目：打家劫舍
 * 
 * 问题描述：
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * 示例 1：
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2：
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 来源：https://leetcode-cn.com/problems/house-robber/
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 动态规划 + DP 数组
 * 
 * 思路：
 * 1、定义子问题
 * 2、写出子问题的递推关系
 * 3、确定 DP 数组的计算顺序
 * 4、空间优化
 * 
 * 时间复杂度：空间复杂度 O(n)
 * 空间复杂度：空间复杂度 O(n)
 */
var rob = function(nums) {
    if (nums === null || nums.length === 0) return 0
    const length = nums.length
    if (length === 1) return nums[0]

    let dp = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
    }

    return dp[length - 1]
};

/**
 * 动态规划 + 滚动数组
 * 
 * 时间复杂度：空间复杂度 O(n)
 * 空间复杂度：空间复杂度 O(1)
 * 
 * @param {*} nums 
 */
var rob = function(nums) {
    if (nums === null || nums.length === 0) return 0
    const length = nums.length
    if (length === 1) return nums[0]

    let first = nums[0]
    let second = Math.max(nums[0], nums[1])

    for (let i = 2; i < length; i++) {
        let tmp = second
        second = Math.max(first + nums[i], second)
        first = tmp
    }

    return second
};