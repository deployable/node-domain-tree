
// A single level of a domain name

const debug = require('debug')('d::domain-tree::DomainName')
const TreeNode = require('./TreeNode.js')

module.exports = class DomainName extends TreeNode {

  toJSON() {
    debug('toJson', this.id)
    let o = {}
    this.children.forEach( i => o[i.id] = i.toJSON() )
    debug('toJson o', o)
    return o
  }

}
