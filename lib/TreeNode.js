
// A single tree node
// Root node has null parent

const debug = require('debug')('D::domain-tree::TreeNode')
const _ = require('lodash')


module.exports = class TreeNode {
  
  constructor(id, parent, data) {
    this.id = id
    this.data = data
    this.parent = parent
    this._children = []
  }

  get level(){
    if (this._level) return this._level
    if (this.root) return this._level = 0
    return this._level = this.parent.level + 1
  }

  //get id() { return this._id }
  //set id(_id) { this._id = _id }

  //get parent() { return this._parent }
  //set parent(_parent) { this._parent = _parent }
  
  get children() { return this._children }
  
  get root() {
    return ( this.parent === null ) ? true : false
  }

  // Get a child
  getNode(id) {
    return this._children.find( i => i.id === id )
    //return this._children[id]
  }

  // Recursive fetch
  fetchNode(ids) {
    let node = this.getNode( _.first(ids) )
    if (!node) return false
    if (ids.length === 1) return node
    return node.fetchNode( _.tail(ids) )
  }

  addNode(id, data) {
    let existing_node = this.getNode(id)
    if (existing_node) return existing_node
    let node = new this.constructor(id, this, data)
    this._children.push( node )
    //this._children[id] = node
    return node
  }

  addData(data){
    this.data = data
  }

  toJSON() {
    debug('toJSON',this.id)
    let o = {}
    if (!this.root) o.id = this.id
    o.children = this.children.map( i => i.toJSON() )
    return o
  }

  toString() {
    let spaces = _.repeat('  ', this.level)
    let newline_for_children = ''
    if ( this.children.length > 0 ) newline_for_children = `\n${spaces}`
    let str = (this.root) ? '' : `${this.id}${newline_for_children}`
    str += this.children.map( i => i.toString() ).join(`\n${spaces}`)
    return str
  }

}

