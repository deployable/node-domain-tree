
// A single level of a domain name

const debug = require('debug')('d::domain-tree::DomainName')
const TreeNode = require('./TreeNode.js')

module.exports = class DomainName extends TreeNode {

  domain() {
    let domain = ''
    if ( !this.parent ) return domain
    if ( this.level > 1 ) domain = '.' + this.parent.domain()
    return `${this.id}${domain}`
  }

  toJSON() {
    debug('toJson', this.id)
    let o = {}
    if (this.data) o._data = this.data

    let child_obj = o
    if ( !this.root ) {
      o.domain = this.domain()
      if ( this.children.length > 0 ) {
        o.subdomain = {}
        child_obj = o.subdomain
      }
    }
    this.children.forEach( i => child_obj[i.id] = i.toJSON() )

    debug('toJson o', o)
    return o
  }

}
