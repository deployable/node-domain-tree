
const DomainNames = require('../lib/DomainNames')

describe('Unit::DomainNames', function(){

  let tree = null

  beforeEach(function(){
    tree = new DomainNames()
    tree.addDomain('test.whatever.com', { test: true })
    tree.addDomain('two.whatever.com', {two: true })
    tree.addDomain('other.com', { other: true })
  })

  it('should have a root node', function(){
    expect( tree.root.root ).to.equal( true )
  })

  it('should fetch a domain', function(){
    let node = tree.fetchDomain('two.whatever.com')
    expect( node ).to.be.ok
  })

  it('should fetch a domains data', function(){
    let domain = tree.fetchDomain('two.whatever.com')
    expect( domain.data.two ).to.equal( true )
  })

  it('should fetch sub domains', function(){
    let subs = tree.getSubDomains('whatever.com')
    expect( subs ).to.eql([ 'test', 'two' ])
  })

  it('should convert the tree toString', function(){
    expect( tree.toString() ).to.equal( 'com\n  whatever\n    test\n    two\n  other' )
  })

  it('should convert the tree toJson', function(){
    expect( tree.toJSON() ).to.eql({
        com: {
          domain: 'com',
          subdomain: {
            whatever: {
              domain: 'whatever.com',
              subdomain: {
                test: {
                  domain: 'test.whatever.com',
                  _data: { test: true },
                },
                two: {
                  domain: 'two.whatever.com',
                  _data: { two: true },
                },
              },
            },
            other: {
              domain: 'other.com',
              _data: { other: true },
            },
          }
        }
    })
  })

})