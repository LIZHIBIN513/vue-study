import item from "./item"

module.exports = {
  template: require('../templates/list.html'),

  data: function () {
    return {
      items: [{
        "id": 1,
        "name": "hello11"
      }, {
        "id": 2,
        "name": "hello22"
      }]
    }
  },

  init: function () {
    console.log('init..')
  },

  create: function () {
    console.log('create..')
  },

  beforeCompile: function () {
    console.log('beforeCompile..')
  },

  compiled: function () {
    console.log('compiled..')
  },

  components:{
    "item":item
  },

  ready: function () {
    console.log('ready..')
  },

  attached: function () {
    console.log('attached..')
  },

  detached:function (){
    console.log('detached..')
  },

  beforeDestroy:function (){
    console.log('beforeDestroy..')
  },

  destroyed:function (){
    console.log('destroyed..')
  }
}
