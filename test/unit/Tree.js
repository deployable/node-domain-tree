/* global expect */
const Tree = require('../../lib/Tree')


describe('Unit::Tree', function(){

  it('should get a node', function(){
    let tree = new Tree()
    let node = tree.addNode('first')
    expect( tree.getNode('first') ).to.be.ok
  })

  it('should get a sub node', function(){
    let tree = new Tree()
    let nodef = tree.addNode('first')
    let nodes = nodef.addNode('second')
    expect( tree.getNode('first') ).to.be.ok
    expect( nodef.getNode('second') ).to.be.ok
    expect( tree.fetchNode('first.second') ).to.be.ok
  })

  it('should convert toJson', function(){
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