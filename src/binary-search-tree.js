const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor(){
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    let nd = this._root; 
    if (!this._root) {
      this._root = new Node(data);
      nd = this._root;
    } else {
      while (nd){
        if (data < nd.data){
          if (nd.left){
            nd = nd.left;
          } else {
            nd.left = new Node(data);
            break;
          }
        } 
        if (data > nd.data){
          if (nd.right){
            nd = nd.right;
          } else {
            nd.right = new Node(data);
            break;
          }
        }
      }
    }
  }

  has(data) {
    let nd = this._root;
    while (nd){
      if (nd.data == data){
        return true;
      } else if (data < nd.data){
        nd = nd.left;
      } else if (data > nd.data){
        nd = nd.right;
      }
    }
    return false;
  }

  find(data) {
    let nd = this._root;
    while (nd){
      if (nd.data == data){{
        return nd;
      }}
      if (data < nd.data){
        nd = nd.left;
      } 
      if (data > nd.data){
        nd = nd.right;
      }
    }
    return null;
  }

  remove(data) {
    this._root = this.removeNode(this._root, data);
  }

  removeNode(node,data){
    if (!node){
      return null;
    } else if (data < node.data){
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data){
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right){
        node = null;
        return node;
      }

      if (!node.left){
        node = node.right;
        return node;
      } else if (!node.right){
        node = node.left;
        return node;
      }

      let newNode = this.findMinNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
  }

  min() {
    let nd = this._root.left;
    let min = this._root.data;
    while (nd){
      min = nd.data;
      nd = nd.left;
    }
    return min
  }

  max() {
    let nd = this._root.right;
    let max = this._root.data;
    while (nd){
      max = nd.data;
      nd = nd.right;
    }
    return max
  }

}