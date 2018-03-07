
Tree = require('../lib/Tree')


describe 'Unit', ->

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
