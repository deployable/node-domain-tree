
DomainNames = require('../lib/DomainNames')


describe 'Unit', ->


  describe 'DomainNames', ->
 
    setupDomain = ->
      tree = new DomainNames()
      tree.addDomain('test.whatever.com')
      tree.addDomain('two.whatever.com')
      tree.addDomain('other.com')
      tree

    it 'root', ->
      tree = new DomainNames()
      expect tree.root.root
      .to.equal true

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
