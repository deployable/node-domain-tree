## domain-tree

Store domain data in a tree structure that maintains links to parent and sub domains. 

The intention is sub domains can query data for their parents and use it, if required. 

### Install

    npm install domain-tree

### Usage

    const {DomainNames} = require('domain-tree')

    let tree = new DomainNames()
    tree.addDomain('me.whatever.com', { dev: true })
    tree.addDomain('them.whatever.com', { dev: false })
    tree.addDomain('other.com', { other: true })
    console.log( tree )
    console.log( JSON.stringify(tree, undefined, 2) )

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

### About

Matt Hoyle - code tata deployable.co
