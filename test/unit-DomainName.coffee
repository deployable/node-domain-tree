
DomainName = require('../lib/DomainName')


describe 'Unit', ->

  describe 'DomainName', ->

    it 'root', ->
      node = new DomainName('one')
      expect( node.id ).to.equal 'one'
