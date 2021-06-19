/**
 * 题目：回文链表
 * 
 * 问题描述：请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 来源：https://leetcode-cn.com/problems/palindrome-linked-list/
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 *
 * 栈
 *
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * 
 * 思路：
 * 1、先将链表每个节点的值添加到数组中
 * 2、采用双指针的方法进行比较
 */
var isPalindrome = function(head) {
    if (head === null) return true

    const stack = []
    let currentNode = head

    while(currentNode !== null) {
        stack.push(currentNode.val)
        currentNode = currentNode.next
    }

    let left = 0
    let right = stack.length - 1

    while(left <= right) {
        if (stack[left] !== stack[right]) return false

        left++
        right--
    }

    return true
};

/**
 * 
 * @param {*} head 
 * @returns 
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * 
 * 思路：
 * 1、找到链表中间结点，将链表分为前部分和后部分
 * 2、对链表后部分进行反转
 * 3、回文比较
 * 4、对链表后部分进行复原（链表反转）
 * 5、返回结果
 */
var isPalindrome = function(head) {
    if (head === null) return true

    const findMiddleNode = (head) => {
        let slowPoint = head
        let quickPoint = head

        while(quickPoint.next && quickPoint.next.next) {
            slowPoint = slowPoint.next
            quickPoint = quickPoint.next.next
        }

        return slowPoint
    }

    const reverseList = (head) => {
        let prev = null
        let currentNode = head

        while(currentNode) {
            let temp = currentNode.next
            currentNode.next = prev
            prev = currentNode
            currentNode = temp
        }

        return prev
    }

    // 找到链表中间节点，采用双指针，将链表分为前部分和后部分
    const middleNode = findMiddleNode(head)

    // 反转链表后部分
    const reverseHead = reverseList(middleNode.next)

    // 判断是否为回文
    let p1 = head
    let p2 = reverseHead
    let result = true

    while(p1 && p2) {
        if (p1.val !== p2.val) {
            result = false
            break
        }
        p1 = p1.next
        p2 = p2.next
    }

    reverseList(reverseList)
    return result
}

/**
 * 
 * @param {*} head 
 * @returns 
 * 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * 
 * 思路：快慢指针法
 */
var isPalindrome = function (head) {
    if(head == null || head.next == null) {
        return true;
    }

    let slow = head, fast = head;
    let pre = head, prepre = null;

    while(fast != null && fast.next != null) {
        pre = slow;
        slow = slow.next;
        fast = fast.next.next;

        // 对链表前部分进行反转
        pre.next = prepre;
        prepre = pre;
    }

    // 链表节点数为奇数
    if(fast != null) {
        slow = slow.next;
    }

    // 回文比较
    while(pre != null && slow != null) {
        if(pre.val != slow.val) {
            return false;
        }
        pre = pre.next;
        slow = slow.next;
    }
    return true;
}