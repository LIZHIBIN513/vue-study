module.exports = {
  template:require('../templates/show.html'),

  data:function (){
    return {}
  },

  created:function (){
    var id = this.$route.params.id

    if (id==1) {
      this.$data = {"id":id, "name":"hello11","age":24}
    }else{
      this.$data = {"id":id, "name":"hello22","age":28}
    }
  },

  ready:function (){
    console.log(this.$data)
  }
}
