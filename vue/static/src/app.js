var Vue = require('vue')
var VueRouter  =require('vue-router')
var VueResource = require('vue-resource')

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.debug = true
// Vue.config.delimiters = ['${', '}']
Vue.config.devtools = true

var App = Vue.extend({})

var router = new VueRouter({
  hashbang:true,
  history:false,
  saveScrollPosition:false,
  transitionOnload:true
})

router.beforeEach(function (){
  window.scroll(0,0)
})

router.redirect({
  '/': '/in_theaters/1'
})

router.map(require('./routes'))
router.start(App, '#app')
//router.go({"path":"/"})
