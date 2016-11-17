
// A group of Domain Name

const debug = require('debug')('d::domain-tree::DomainNames')
const _ = require('lodash')

const Tree = require('./Tree.js')
const DomainName = require('./DomainName.js')


module.exports = class DomainNames extends Tree {

  addDomain(domain, data) {
    debug('adding domain', domain)
    let levels = _.reverse(domain.split('.'))
    let last = this.root
    levels.forEach( level => {
      let node = last.addNode(level,null)
      last = node
    })
    last.data = data
    return last
  }

  fetchDomain(domain) {
    debug('adding domain', domain)
    let levels = _.reverse(domain.split('.'))
    return this.root.fetchNode(levels)
  }

}

module.exports.node_type = DomainName
