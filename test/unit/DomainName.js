/* global expect */
const DomainName = require('../../lib/DomainName')

describe('Unit::DomainName', function(){

  it('should create a DomainName', function(){
    let node = new DomainName('one')
    expect( node.id ).to.equal( 'one' )
  })

  it('should convert a root domain to JSON', function(){
    let node = new DomainName('one')
    expect( node.toJSON() ).to.eql({
      domain: '',
    })
  })

  it('should convert a root domain to JSON', function(){
    let node = new DomainName('one', {})
    expect( node.domainComponents() ).to.eql([ 'one' ])
  })

  it('should convert a root domain to JSON', function(){
    let root1 = { level: 0 }
    let node1 = new DomainName('one', root1)
    let node2 = new DomainName('two', node1)
    expect( node2.domainComponents() ).to.eql([ 'one', 'two' ])
  })

  it('should convert a non root domain to JSON', function(){
    let node = new DomainName('one', {})
    expect( node.toJSON() ).to.eql({
      domain: 'one',
    })
  })

  it('should convert a non root domain with data to JSON', function(){
    let node = new DomainName('one', {})
    node.setData({ one: 1 })
    expect( node.toJSON() ).to.eql({
      _data: { one: 1 },
      domain: 'one',
    })
  })

})