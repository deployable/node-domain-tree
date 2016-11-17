// A group of Domain Name
const debug = require('debug')('D::domain-tree::DomainNames')
const Tree = require('./Tree.js')
const DomainName = require('./DomainName.js')

module.exports = class DomainNames extends Tree {

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

module.exports.node_type = DomainName
