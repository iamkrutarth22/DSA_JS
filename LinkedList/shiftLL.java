/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        int length = 0;
        ListNode temp = head; 

        while(temp != null){
            length++;
            temp = temp.next;
        }

        int shift = ( length - (length%k) );

        ListNode newEnd = head;
        System.out.println("shift "+shift);
        while( shift > 0 ){
            shift --;
            newEnd = newEnd.next;
        }

        ListNode newhead = newEnd.next;
        ListNode newStart = newEnd.next;

        while( newStart.next != null ){
            newStart = newStart.next;
        }
        
        newStart.next = head;
        newEnd.next = null;

        return newhead;
    }
}