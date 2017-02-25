<template>
<div>
  <h1 class="page-header" >{{title}}</h1>
  <div class="list-group">
      <a href="#" class="list-group-item"  v-for="movie in movie_list.subjects">
        <movie-list  v-bind:movie="movie"></movie-list>
      </a>
  </div>
  <p>总共：{{total}}条记录，第{{page}}/{{totalPage}}页</p>
  <nav>
    <ul class="pager">
      <li :class="{disabled: page === 1}">
        <a @click="go(page - 1)" href="javascript:;">上一页</a>
      </li>
      <li :class="{disabled: page === totalPage}">
        <a @click="go(page + 1)" href="javascript:;">下一页</a>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
import MovieList from './movieList'
const num = 10
const math = Math
var type = 'in_theaters'

export default {
  data () {
    return {
      title: 'loading...',
      movie_list: {},
      total: 0,
      page: 1,
      totalPage: 0
    }
  },
  components: {
    MovieList
  },
  created () {
    type = this.$route.params.type || 'in_theaters'
    this.page = parseInt(this.$route.params.page) || this.page
    this.getMovie(type)
  },
  methods: {
    getMovie: function () {
      var _this = this
      _this.$http.get(`./movie/${type}?count=${num}&start=${(_this.page - 1) * num}&q=${this.$route.query.q}`, {
        before: function () {
          _this.title = 'loading....'
          _this.movie_list = {}
        }
      })
      .then((response) => {
        const data = response.data
        _this.movie_list = data
        _this.title = data.title
        _this.total = data.total
        _this.totalPage = math.ceil(data.total / num)
      })
    },
    go: function (page) {
      if (page <= 0 || page > this.totalPage) {
        return
      }
      this.page = page
      this.$router.push({name: 'right', params: { type: type, page: page }})
      this.getMovie(type)
    }
  },
  watch: {
    '$route': function (to, from) {
      this.page = this.$route.params.page
      type = this.$route.params.type
      this.getMovie(type)
    }
  }
}
</script>
