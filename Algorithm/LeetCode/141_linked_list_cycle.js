/**
 * 题目：环形链表
 * 
 * 问题描述：
 * 给定一个链表，判断链表中是否有环。
 * 
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 如果链表中存在环，则返回 true 。 否则，返回 false 。
 * 
 * 提示：
 * 链表中节点的数目范围是 [0, 104]
 * -10^5 <= Node.val <= 10^5
 * pos 为 -1 或者链表中的一个 有效索引 。
 * 
 * 来源：https://leetcode-cn.com/problems/linked-list-cycle/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * 标记法：设置标志位
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) return false

    let current = head

    while(current && current.next) {
        if (current.isAccess) return true

        current.isAccess = true
        current = current.next
    }

    return false
}

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * 快慢指针（龟兔赛跑）
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
 var hasCycle = function(head) {
    if (head === null || head.next === null) return false

    // let pointA = head
    // let pointB = head

    // while(pointB && pointB.next) {
    //     pointA = pointA.next
    //     pointB = pointB.next.next

    //     if (pointA === pointB) return true
    // }

    // return false

    let pointA = head
    let pointB = head.next

    while(pointB && pointB.next) {
        if (pointA === pointB) return true

        pointA = pointA.next
        pointB = pointB.next.next
    }

    return false
}