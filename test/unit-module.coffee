
domaintree = require('../')


describe 'Unit', ->

  describe 'module', ->

    it 'version', ->
      expect( domaintree.VERSION ).to.match /^\d+\.\d+\.\d+/

