import left from './left'
import nav from './nav'

module.exports = {
  template: require('../templates/index.html'),
  data:function(){
    return {
        active:'',
        search_text:''
    }
  },
  components:{
    'left-module':left,
    'nav-module':nav
  },
  ready: function () {
    this.active = this.$route.params.type || 'in_theaters'
  },
  methods:{
    searchTotal:function(search_text){
      this.$route.router.go(`/search/1?q=${search_text}`)
    }
  },
  watch: {
    '$route': function(to, from) {
      this.active = to.path.split('/')[1]|| 'in_theaters'
    }
  }
}
