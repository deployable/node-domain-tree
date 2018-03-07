// A single tree nodes data

const debug = require('debug')('d::domain-tree::TreeData')
const _ = require('lodash')


module.exports = class TreeData {
  
  constructor(key, parent) {
    debug('creating tree data with key', key)
    this.key = key
    this.data = {}
    this.data[key] = {}
    this.parent = parent
    this.pdk = this.parent.data[key]
  }

  getKey(key, item){
    return this.pdk[item]
  }

  setKey(key, item, value){
    return this.pdk[item] = value
  }

  get(key, item){
    return this.parent.data[key][item]
  }

  set(key, item, value){
    return this.parent.data[key][item] = value
  }

}