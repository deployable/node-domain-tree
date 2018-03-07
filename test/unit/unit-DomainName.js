
const DomainName = require('../lib/DomainName')

describe('Unit', function(){

  describe('DomainName', function(){

    it('root', function(){
      node = new DomainName('one')
      expect( node.id ).to.equal( 'one' )
    })

  })

})