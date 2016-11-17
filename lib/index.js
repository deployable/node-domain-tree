const debug = require('debug')('d::domain-tree::index')


class TreeNode {
  
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

  get id(){ return this._id }
  set id(_id){ this._id = _id }
  get parent(){ return this._parent }
  set parent(_parent){ this._parent = _parent }
  get children() { return this._children }
  get root() {
    return ( this.parent === null ) ? true : false
  }

  getNode(id) {
    return this._children.find( i => i.id === id )
    //return this._children[id]
  }

  addNode(id, data) {
    let existing_node = this.getNode(id)
    if (existing_node) return existing_node
    let node = new this.constructor(id, this, data)
    this._children.push( node )
    //this._children[id] = node
    return node
  }

  toJSON() {
    let o = {}
    if (!this.root) o.id = this.id
    o.children = this.children.map( i => i.toJSON() )
    return o
  }

  toString() {
    let spaces = new Array(this.level+1).join('  ')
    let children_spaces = ( this.children.length > 0 ) ? `\n${spaces}` : ''
    let s = (this.root) ? '' : `${this._id}${children_spaces}`
    s = s + this.children.map( i => i.toString() ).join(`\n${spaces}`)
    return s
  }

}


class TreeRootNode {

  toJSON() {
    let o = {}
    o.children = this.children.map( i => i.toJSON() )
    return o
  }

  toString() {
    let spaces = new Array(this.level+1).join('  ')
    let children_spaces = ( this.children.length > 0 ) ? `\n${spaces}` : ''
    let s = this.children.map( i => i.toString() ).join(`\n${spaces}`)
    return s
  }

}


class Tree {
  
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
Tree.node_type = TreeNode


// A single level of a domain name
class DomainName extends TreeNode {

  toJSON() {
    debug('toJson', this.id)
    let o = {}
    this.children.forEach( i => o[i.id] = i.toJSON() )
    debug('toJson o', o)
    return o
  }

}


// A group of Domain Name
class DomainNames extends Tree {

  addDomain(domain) {
    debug('adding domain', domain)
    let levels = domain.split('.')
    let last = this.root
    levels.forEach( level => {
      let node = last.addNode(level,null)
      last = node
    })
  }

}
DomainNames.node_type = DomainName




module.exports = { TreeNode, Tree, DomainName, DomainNames }