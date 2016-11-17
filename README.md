## domain-tree

Store domain data in a tree structure

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

Matt Hoyle - code@deployable.co
