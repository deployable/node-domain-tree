/* global expect */
const Tree = require('../../lib/Tree')


describe('Unit', function(){

  describe('Tree', function(){

    it('toJson', function(){
      let tree = new Tree()
      tree.addNode('one')
      tree.addNode('two')
      expect( tree.toJSON() ).to.eql({
        children: [
          { id: 'one', children: [] },
          { id: 'two', children: [] }
        ]
      })
    })

  })
})