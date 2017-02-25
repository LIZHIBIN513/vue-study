var Vue = require('vue')
var VueRouter  =require('vue-router')

Vue.use(VueRouter)
Vue.config.debug = true
// Vue.config.delimiters = ['${', '}']
Vue.config.devtools = true

var App = Vue.extend({})

var router = new VueRouter({})

router.map(require('./routes'))
router.start(App, '#app')
router.go({"path":"/"})
