const Benchmark = require('benchmark')
const _ = require('lodash')

let suite = new Benchmark.Suite
let array = [999,4,3,4,5,6,7,3,2,3,3,5,5,3]
let long_array = [
  999,4,23,4,5,6,'asdfasdfsfasdvda','asdfdsafdsafsa',7,3,2,3,3,5,5,3,1324,1324,1234,1234,
  'kidfffkdsajflkndsafnm,dsanfmsadnfmdsa',1234,345,345,465,67,578,678,678,546,
  32532,2143,324,324,32432,432,423,324,234,34223,
  45,456,547,65876,867,76,987987,978,978078,8656,4534,42,
  42,432,436,45,6567,678,79,780,890980,890899,7665,45,543,532,423,42,53,3635,77,8675,84,754,6345,32,423,
  5243,54,265,43756,478,56789,5689,568,563,456234,52,3445,25,326,347,658,5678,56,9678,65,34,62,34523,6,
  53467,367,4578,5678,6,53456,325,3245,2,52,6,256,4356,346,235,4235,2,523,45234,62,57,347,5426,4235,2435,
  254,325,2345,2,234,234,234,3425,456,567,5678,7636,534,3532,14,123,4236,5347,65,8765,8,6758,47,5,6534,
  623,53,254,2,42,6,5437,36,7654,7,4356,43,625,46,3456,354,76,457,658,76,869,7890,978,9867,23423,547,45,
  63,463,245,432,23423,4235243,1234,12,41,4123,5,1325,132,52,5315,1325,31253,125,1253,125,125,153,125,
  125,1,6432,623,46,3246,15,32,15,12,51,23,243,54236,43567,4,7456,765,8765,8967,96789,67,98765,
  'trrsgdfgsfdgfsdgdsf',74,364,5365,235,6346,3547,6534,67345,6345,6,346,3456,345,634,6344,3452,5,235,
  3245,4235,2435,2345,235,235,2345,4235,235,234542,352,345423,52,35,36,53246,7435,764,74,634,3546345,
  3255,32,23465,246,534,7534,6543,453,6345,65,346,3456,345,34,346,54,534,634,6345,634,56,3463,456,3456,
  346,4,634,6543,634,64,3456345
]

let r = []
r[0] = _.tail(array)
r[1] = array.slice(1, array.length)
if (r[0] !== r[1]) console.error('ne',r[0],r[1]) // eslint-disable-line no-console
// add tests

suite
.add('rest - native slice', function() {
  array.slice(1, array.length)
})
.add('rest - lodash tail', function() {
  _.tail(array)
})

.add('rest long- native slice', function() {
  long_array.slice(1, long_array.length)
})
.add('rest long- lodash tail', function() {
  _.tail(long_array)
})

.add('first - native direct', function() {
  array[0]
})
.add('first - lodash first', function() {
  _.first(array)
})

.add('first long- native direct', function() {
  long_array[0]
})
.add('first long- lodash first', function() {
  _.first(long_array)
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target)) // eslint-disable-line no-console
})
.on('complete', function() {
  let msg = 'Fastest is ' + this.filter('fastest').map('name')
  console.log(msg) // eslint-disable-line no-console
})
// run async
.run({ 'async': true })
