/* global expect */
const Tree = require('../../lib/Tree')


describe('Unit', function(){

  describe('Tree', function(){

    it('toJson', function(){
      let tree = new Tree()
      let one = tree.addNode('one')
      let two = tree.addNode('two')
      one.replaceData({ one: 1 })
      two.setData({ two: 2 })
      two.setData({ thr: 3 })
      expect( tree.toJSON() ).to.eql({
        children: [
          { id: 'one', _data: { one: 1 }, children: [] },
          { id: 'two', _data: { two: 2, thr: 3 }, children: [] }
        ]
      })
    })

  })
})