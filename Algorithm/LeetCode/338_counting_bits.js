/**
 * 题目： 比特位计数
 * 
 * 问题描述：
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 * 
 * 示例 1:
 * 输入: 2
 * 输出: [0,1,1]
 * 
 * 示例 2:
 * 输入: 5
 * 输出: [0,1,1,2,1,2]
 * 
 * 来源：https://leetcode-cn.com/problems/counting-bits/
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = []

    for (let i = 0; i <= n; i++) {
        const count = parseInt(i).toString(2).split("").filter(item => Number(item)).length
        result.push(count)
    }

    return result
};

/**
 * @param {number} n
 * @return {number[]}
 *
 * Brian Kernighan 算法
 * 时间复杂度：O(nlogn)
 */
var countBits = function(n) {
    let arr = []

    const count = (num) => {
        let result = 0

        while(num > 0) {
            num &= (num-1)
            result++
        }

        return result
    }

    for (let i = 0; i <= n; i++) {
        arr[i] = count(i)
    }

    return arr
};

/**
 * @param {number} n
 * @return {number[]}
 *
 * 解题思路：
 * 1、奇数比前一个偶数多一个 1
 * 2、偶数时与除以 2 的那个数一样
 */
 var countBits = function(n) {
    let result = [0]

    for (let i = 1; i <= n; i++) {
        if ((i & 1) === 0) {
            result[i] = result[i >>> 1]
        } else {
            result[i] = result[i - 1] + 1
        }
        // result[i] = result[i >> 1] + (i & 1)
    }

    return result
};