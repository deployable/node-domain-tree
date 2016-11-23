## domain-tree

Store domain data in a tree structure

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

Matt Hoyle - code@deployable.co
