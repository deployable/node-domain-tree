// A Tree to hold TreeNodes

// If you extend this to hold another type of node, ovrride 
// `Tree.node_type` via the `module.exports.node_type` variable

const debug = require('debug')('d::domain-tree::TreeNode')
const castArray = require('lodash/castArray')
const TreeNode = require('./TreeNode')


module.exports = class Tree {

  // Node type can be set on the class, or on the instance
  get node_type(){
    return this._node_type || this.constructor.node_type
  }

  constructor(options = {}) {
    // Support custom node types
    if (options.node_type) this._node_type = options.node_type

    // Create a root node
    this.root = new this.node_type(null,null)

    // Child string seperator
    this.separator = options.separator || '.'

  }

  // Add a new node to the tree
  // Supports . child notation
  //addNode(id, data) {
     //debug('adding node', id)
     //return this.root.addNode(id, data)
  //}

  addNode(arg, data = {}) {
    debug('Adding new node', arg)
    let ids = castArray(arg)
    let last_node = this.root
    ids.forEach( id => {
      last_node = last_node.addNode(id, null)
    })
    last_node.setData(data)
    return last_node
  }

  // Get a node from the tree
  // Supports . child notation (or arbitrary seperator)
  getNode(arg) {
    debug('Getting node', arg)
    let ids = castArray(arg)
    return this.root.fetchNode(ids)
  }

  // Get a node from the tree
  // Supports . child notation (or arbitrary seperator)
  fetchNode(ids_string) {
    debug('Fetching node', ids_string)
    let ids = ids_string.split(this.separator)
    return this.getNode(ids)
  }

  // Entry into the nodes toJSON
  toJSON() {
    return this.root.toJSON()
  }

  // Entry into the nodes toString
  toString() {
    return this.root.toString()
  }

}

//Tree.node_type = TreeNode
module.exports.node_type = TreeNode
