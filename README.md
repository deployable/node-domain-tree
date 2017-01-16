## domain-tree

Store domain data in a tree structure that maintains links to parent and sub domains. 

The intention is sub domains can query data for their parents and use it, if required. 

[![Build status](https://badge.buildkite.com/1745a99401bdd68a6331273b5f95a62d8c2cdae5e6e338c3ef.svg)](https://buildkite.com/deployable/domain-tree-test)

### Install

    npm install domain-tree

### Usage

    const {DomainNames} = require('domain-tree')

    let tree = new DomainNames()
    tree.addDomain('me.whatever.com', { dev: true })
    tree.addDomain('them.whatever.com', { dev: false })
    tree.addDomain('other.com', { other: true })
    console.log( tree )
    console.log( tree.toJSON() )

Results in a structure:

    com:
      domain: 'com'
      subdomain:
        whatever:
          domain: 'whatever.com'
          subdomain:
            test:
              domain: 'test.whatever.com'
              _data: test: true
            two:
              domain: 'two.whatever.com'
              _data: two: true
        other:
          domain: 'other.com'
          _data: other: true


Matt Hoyle - code@deployable.co
