// A group of Domain Name

const debug = require('debug')('d::domain-tree::DomainNames')
const map = require('lodash/map')
const reverse = require('lodash/reverse')

const Tree = require('./Tree.js')
const DomainName = require('./DomainName.js')


module.exports = class DomainNames extends Tree {

  levels(domain){ return reverse(domain.split('.')) }

  addDomain(domain, data) {
    debug('adding domain', domain)
    let last = this.root
    this.levels(domain).forEach( level => {
      let node = last.addNode(level, null)
      last = node
    })
    last.data = data
    return last
  }

  fetchDomain(domain) {
    debug('adding domain', domain)
    return this.root.fetchNode( this.levels(domain) )
  }

  // this needs to recurse
  getSubDomains(domain) {
    let node = this.root.fetchNode( this.levels(domain) )
    return map(node.children, child => child.id)
  }

}

module.exports.node_type = DomainName