/**
 * 题目：买卖股票的最佳时机
 * 
 * 问题描述：
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * 
 * 示例 1：
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

 * 示例 2：
 * 输入：prices = [7,6,4,3,1]
 * 输出：0
 * 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 提示：
 * 1 <= prices.length <= 10^5
 * 0 <= prices[i] <= 10^4
 * 
 * 来源：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */

 /**
 * @param {number[]} prices
 * @return {number}
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var maxProfit = function(prices) {
    const length = prices.length

    let minValue = Number.MAX_SAFE_INTEGER
    let maxValue = 0

    for (let i = 0; i < length; i++) {
        if (prices[i] < minValue) {
            minValue = prices[i]
        } else if (prices[i] - minValue > maxValue) {
            maxValue = prices[i] - minValue
        }
    }

    return maxValue
};

/**
 * 栈顶永远保持最下元素
 * 
 * @param {number[]} prices
 * @return {number}
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var maxProfit = function(prices) {
    const length = prices.length

    if (length === 0) return 0

    let maxValue = 0
    let stack = [prices[0]]

    for (let i = 1; i < length; i++) {
        if (prices[i] < stack[stack.length - 1]) {
            stack.pop()
            stack.push(prices[i])
        } else {
            maxValue = Math.max(maxValue, prices[i] - stack[stack.length - 1])
        }
    }

    return maxValue
}

/**
 * 动态规划
 * 
 *  时间复杂度：O(n)
 *  空间复杂度：O(1)
 * @param {*} prices 
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0
    let length = prices.length

    for (let i = 0; i < length; i++) {
        min = Math.min(prices[i], min)
        max = Math.max(prices[i] - min, max)
    }

    return max
}