
domaintree = require('../')


describe 'Unit', ->

  describe 'module', ->

    it 'version', ->
      expect( domaintree.VERSION ).to.equal '0.1.1-3'
