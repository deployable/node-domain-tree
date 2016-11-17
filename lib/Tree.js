
const debug = require('debug')('d::domain-tree::TreeNode')
const TreeNode = require('./TreeNode')

module.exports = class Tree {

  constructor() {
    this.newRoot()
  }

  get node_type(){
    return this.constructor.node_type
  }

  addNode(id, data) {
    debug('adding node', id)
    return  this.root.addNode(id, data)
  }

  newRoot() {
    this.root = new this.node_type(null,null)
  }

  toJSON() {
    return this.root.toJSON()
  }

  toString() {
    return this.root.toString()
  }

}

//Tree.node_type = TreeNode
module.exports.node_type = TreeNode

