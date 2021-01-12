/**
 * 题目：爬楼梯
 * 
 * 问题描述：
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 
 * 示例 1：
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 来源：https://leetcode-cn.com/problems/climbing-stairs/
 */

 /**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [1, 1]
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n]
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1
    if (n === 2) return 2

    let a = 1
    let b = 2
    let result 

    for (let i = 3; i <= n; i++) {
        result = a + b
        a = b
        b = result
    }

    return result
};