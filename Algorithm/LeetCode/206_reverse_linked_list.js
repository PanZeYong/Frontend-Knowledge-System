/**
 * 题目： 反转链表
 * 
 * 问题描述：给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 提示：
 * 链表中节点的数目范围是 [0, 5000]
 * -5000 <= Node.val <= 5000
 * 
 * 来源：https://leetcode-cn.com/problems/reverse-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 递归
 * 
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var reverseList = function(head) {
    if (head === null || head.next === null) return head

    const newHead = reverseList(head.next)

    head.next.next = head
    head.next = null

    return newHead
}

/**
 * 迭代
 * 
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var reverseList = function(head) {
    if (head === null || head.next === null) return head

    let prev = null
    let current = head

    while(current) {
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
    }

    return prev
}

/**
 * 栈
 * 
 * @param {ListNode} head
 * @return {ListNode}
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
 var reverseList = function(head) { 
    let stack = []
    let tHead = new ListNode()
    let pre = tHead

    let currentNode = head

    while(currentNode !== null) {
        stack.push(currentNode.val)
        currentNode = currentNode.next
    }

    while(stack.length) {
        const value = stack.pop()
        const node = new ListNode(value)
        pre.next = node
        pre = node
    }

    return tHead.next
}

