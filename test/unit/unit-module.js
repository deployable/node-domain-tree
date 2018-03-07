/* global expect */
const domaintree = require('../../')


describe('Unit::module', function(){

  it('version', function(){
    expect( domaintree.VERSION ).to.match( /^\d+\.\d+\.\d+/ )
  })

})