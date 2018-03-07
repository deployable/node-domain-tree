/* global expect */
const DomainName = require('../../lib/DomainName')

describe('Unit', function(){

  describe('DomainName', function(){

    it('root', function(){
      let node = new DomainName('one')
      expect( node.id ).to.equal( 'one' )
    })

  })

})