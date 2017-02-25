<template>
<div>
  <nav-module v-on:search="searchTotal"></nav-module>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <left-module v-bind:active="active"></left-module>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main ">
          <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LeftModule from './components/left.vue'
import NavModule from './components/nav.vue'

export default {
  name: 'App',
  components: {
    LeftModule,
    NavModule
  },
  data () {
    return {
      active: '',
      search_text: ''
    }
  },
  ready: function () {
    this.active = this.$route.params.type || ''
  },
  methods: {
    searchTotal: function (searchText) {
      this.$route.router.go(`/search/1?q=${searchText}`)
    }
  },
  watch: {
    '$route': function (to, from) {
      this.active = to.path.split('/')[1] || ''
    }
  }
}
</script>
