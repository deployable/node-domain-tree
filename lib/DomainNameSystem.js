// A single level of a domain name

const debug = require('debug')('d::domain-tree::DomainNameSystem')

// const TreeData = require('./TreeData')

// module.exports = class DomainNameSystem extends TreeData {
  
//   constructor(parent) {
//     super('dns', parent)
//   }

// }

module.exports = class DomainNameSystem {
  
  constructor(host) {
    debug('new dns', host)
    this._host = host
  }

}