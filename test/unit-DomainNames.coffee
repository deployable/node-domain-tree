
DomainNames = require('../lib/DomainNames')


describe 'Unit', ->


  describe 'DomainNames', ->
 
    setupDomain = ->
      tree = new DomainNames()
      tree.addDomain('test.whatever.com', { test: true })
      tree.addDomain('two.whatever.com', {two: true })
      tree.addDomain('other.com', { other: true })
      tree

    it 'root', ->
      tree = new DomainNames()
      expect tree.root.root
      .to.equal true

    it 'should fetch a domain', ->
      tree = setupDomain()
      node = tree.fetchDomain('two.whatever.com')
      expect( node ).to.be.ok

    it 'should fetch a domains data', ->
      tree = setupDomain()
      node = tree.fetchDomain('two.whatever.com')
      expect( node.data.two ).to.equal true

    it 'toString', ->
      tree = setupDomain()
      expect( tree.toString() )
        .to.equal 'com\n  whatever\n    test\n    two\n  other'

    it 'toJson', ->
      tree = setupDomain()
      expect( tree.toJSON() )
        .to.eql
          com:
            whatever:
              test: {}
              two: {}
            other: {}
