
{DomainNames,Tree} = require('../lib')


describe 'Tree', ->

  it 'toJson', ->
    tree = new Tree()
    tree.addNode('one')
    tree.addNode('two')
    expect tree.toJSON()
      .to.eql
        children: [
          { id: 'one', children: [] },
          { id: 'two', children: [] }
        ]

describe 'DomainNames', ->

  it 'root', ->
    tree = new DomainNames()
    expect tree.root.root
    .to.equal true

  it 'toString', ->
    tree = new DomainNames()
    tree.addDomain('com.whatever.test')
    tree.addDomain('com.whatever.two')
    tree.addDomain('com.other')
    expect( tree.toString() )
      .to.equal 'com\n  whatever\n    test\n    two\n  other'

  it 'toJson', ->
    tree = new DomainNames()
    tree.addDomain('com.whatever.test')
    tree.addDomain('com.whatever.two')
    tree.addDomain('com.other')
    expect( tree.toJSON() )
      .to.eql
        com:
          whatever:
            test: {}
            two: {}
          other: {}
