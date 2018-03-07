const debug = require('debug')('d::domain-tree::index')

const VERSION     = require('../package.json').version
const TreeNode    = require('./TreeNode')
const Tree        = require('./Tree')
const DomainName  = require('./DomainName')
const DomainNames = require('./DomainNames')

debug('main export')
module.exports = { TreeNode, Tree, DomainName, DomainNames, VERSION }