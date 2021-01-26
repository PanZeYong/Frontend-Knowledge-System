/**
 * 题目：有效的括号
 * 
 * 问题描述：
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 *  1、左括号必须用相同类型的右括号闭合。
 *  2、左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 输入: "()"
 * 输出: true
 * 
 * 示例 2:
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 示例 3:
 * 输入: "(]"
 * 输出: false
 * 
 * 示例 4:
 * 输入: "([)]"
 * 输出: false
 * 
 * 示例 5:
 * 输入: "{[]}"
 * 输出: true
 * 
 * 来源：https://leetcode-cn.com/problems/valid-parentheses/
 */

 /**
  * @param {string} s
  * @return {boolean}
  * 
  * 时间复杂度：O(n)
  * 空间复杂度：O(n)
  * */
 var isValid = function(s) {
    if (!s) return true

    const length = s.length

    if (length % 2) return false

    let stack = []

    for (let i = 0; i < length; i++) {
        switch(s[i]) {
            case '(':
                stack.push(s[i])
                break

            case '{':
                stack.push(s[i])
                break

            case '[':
                stack.push(s[i])
                break

            case ')':
                if (stack.pop() !== '(') return false
                break

            case '}':
                if (stack.pop() !== '{') return false
                break

            case ']':
                if (stack.pop() !== '[') return false
                break

            default:
                return false
        }
    }

    return !stack.length
};

/**
 * @param {string} s
 * @return {boolean}
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * */
var isValid = function(s) {
    if (!s) return true

    const length = s.length

    if (length % 2) return false

    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const arr = []

    for (let i = 0; i < length; i++) {
        const value = map[s[i]]
        if (value) {
            arr.push(value)
        } else if (arr.pop() !== s[i]) return false
    }

    return !arr.length
};