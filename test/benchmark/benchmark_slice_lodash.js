const Benchmark = require('benchmark');
const _ = require('lodash');

let suite = new Benchmark.Suite;
let array = [999,4,3,4,5,6,7,3,2,3,3,5,5,3]

let r = []
r[0] = _.tail(array)
r[1] = array.slice(1,array.length)
if (r[0] !== r[1]) console.error('ne',r[0],r[1])
// add tests
suite
.add('slice', function() {
  array.slice(1,array.length);
})
.add('lodash rest', function() {
  _.tail(array);
})

.add('direct', function() {
  array[0]
})
.add('first', function() {
  _.first(array);
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
