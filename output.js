const sleep = require('then-sleep')

module.exports = (req, res) => __async(function*(){
  yield sleep(500)
  return 'Ready!'
}())
function __async(g){return new Promise(function(s,j){function c(a,x){try{var r=g[x?"throw":"next"](a)}catch(e){j(e);return}r.done?s(r.value):Promise.resolve(r.value).then(c,d)}function d(e){c(e,1)}c()})}
