module.exports = {
  template:require('../templates/nav.html'),
  data:function(){
      return {
        search_text:''
      }
  },
  ready:function (){
    
  },
  methods:{
    search:function(){
      this.$emit('search',this.search_text)
    }
  }
}
