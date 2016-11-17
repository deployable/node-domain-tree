
DomainNames = require('../lib/DomainNames')


describe 'Unit', ->


  describe 'DomainNames', ->
 
    tree = null

    beforeEach ->
      tree = new DomainNames()
      tree.addDomain('test.whatever.com', { test: true })
      tree.addDomain('two.whatever.com', {two: true })
      tree.addDomain('other.com', { other: true })

    it 'should have a root node', ->
      expect tree.root.root
      .to.equal true

    it 'should fetch a domain', ->
      node = tree.fetchDomain('two.whatever.com')
      expect( node ).to.be.ok

    it 'should fetch a domains data', ->
      domain = tree.fetchDomain('two.whatever.com')
      expect( domain.data.two ).to.equal true

    it 'should fetch sub domains', ->
      subs = tree.getSubDomains('whatever.com')
      expect( subs ).to.eql [ 'test', 'two' ]

    it 'should convert the tree toString', ->
      expect( tree.toString() )
        .to.equal 'com\n  whatever\n    test\n    two\n  other'

    it 'should convert the tree toJson', ->
      expect( tree.toJSON() )
        .to.eql
          com:
            whatever:
              test: {}
              two: {}
            other: {}
