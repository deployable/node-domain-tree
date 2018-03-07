/* global expect */
const TreeNode = require('../../lib/TreeNode')


describe('Unit::TreeNode', function(){

  it('replaceData', function(){
    let tn = new TreeNode('one')
    tn.replaceData({ one: 1 })
    expect( tn.toJSON() ).to.eql(
      { id: 'one', _data: { one: 1 }, children: [] }
    )
  })

  it('setData', function(){
    let tn = new TreeNode('one')
    tn.setData({ one: 1 })
    expect( tn.toJSON() ).to.eql(
      { id: 'one', _data: { one: 1 }, children: [] }
    )
  })

  it('init data', function(){
    let tn = new TreeNode('one', undefined, { one: 1 })
    expect( tn.toJSON() ).to.eql(
      { id: 'one', _data: { one: 1 }, children: [] }
    )
  })


})