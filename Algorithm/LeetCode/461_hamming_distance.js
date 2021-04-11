/**
 * 题目：汉明距离
 * 
 * 问题描述：
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 
 * 注意：
 * 0 ≤ x, y ^ 231.
 * 
 * 示例：
 * 输入: x = 1, y = 4
 * 输出: 2
 * 
 * 解释:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 * 
 * 上面的箭头指出了对应二进制位不同的位置。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/hamming-distance
 * 
 * 解题思路：
 * 先计算 x ^ y（异或操作），再统计二进制位数 1 的数量
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y
    let arr = xor.toString(2).split("")
    return arr.filter(x => +x).length
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 * 
 * 思路：右移
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y
    let distance = 0
    while(xor !== 0) {
        if (xor % 2 === 1) {
            distance++
        }
        xor >>= 1
    } 
    return distance
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 
 * 时间复杂度：O(1)
 * 空间复杂度：O(1)
 * 
 * 布赖恩·克尼根算法
 */
var hammingDistance = function(x, y) { 
    let xor = x ^ y
    let distance = 0
    while(xor !== 0) {
        distance++
        xor = xor & (xor - 1)
    }
    return distance
}