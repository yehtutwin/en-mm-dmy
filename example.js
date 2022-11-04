// Change './index' to 'en-mm-dmy' if you use this code outside of this package
const getDMY = require('./index')

var dmy = getDMY(new Date()) // pass the date e.g - "2022-5-1"
console.log(dmy)