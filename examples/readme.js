const { DomainNames } = require('../')
const util = require('util')

let tree = new DomainNames()
tree.addDomain('me.whatever.com', { dev: true })
tree.addDomain('them.whatever.com', { dev: false })
tree.addDomain('other.com', { other: true })
console.log( util.inspect(tree, {depth: 4}) )
console.log( 'JSON', JSON.stringify(tree, undefined, 2) )
