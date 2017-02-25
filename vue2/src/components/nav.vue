<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">豆瓣电影</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">About</a></li>
      </ul>
       <div class="navbar-form navbar-right"> -->
        <input type="text" @keyup.enter="search()" class="form-control" v-model="searchText" placeholder="Search...">
      </div>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    data () {
      return {
        searchText: ''
      }
    },
    methods: {
      search: function () {
        this.$emit('search', this.searchText)
      }
    }
  }
</script>
