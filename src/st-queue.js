const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(){
    this.qList = new ListNode();
    this.lastNode = null;
  }

  getUnderlyingList() {
    return this.qList;
  }

  enqueue( value ) {
    if (!this.qList.value){
      this.qList.value = value;
      this.lastNode = this.qList;
    } else {
      const tNode = new ListNode();
      tNode.value = value;
      this.lastNode.next = tNode;
      this.lastNode = this.lastNode.next;
      
    }

  }

  dequeue() {
    const res = this.qList.value;
    this.qList = this.qList.next;
    return res;
  }

}
