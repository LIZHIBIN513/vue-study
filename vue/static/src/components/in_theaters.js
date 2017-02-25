import movie_list from './movie_list'
const num = 10
const math = Math
var type = 'in_theaters'

module.exports = {
  template: require('../templates/in_theaters.html'),

  data: function () {
    return {
      title: 'loading...',
      movie_list: {},
      total: 0,
      page: 1,
      totalPage: 0,
      go: function (page) {
        if (page <= 0 || page > this.totalPage) {
          return
        }
        this.page = page
        this.$route.router.go(`/${type}/${page}`)
        this.getMovie(type)
      }
    }
  },
  components: {
    "movie_list": movie_list
  },
  ready: function () {
    type = this.$route.params.type || 'in_theaters'
    this.page = parseInt(this.$route.params.page) || this.page
    this.getMovie(type)
  },
  methods: {
    getMovie: function () {
      var _this = this
      _this.$http.get(`./movie/${type}?count=${num}&start=${(_this.page-1)*num}&q=${this.$route.query.q}`, {
          before: function () {
            _this.$set('title', 'loading....')
            _this.$set('movie_list', {})
          }
        })
        .then((response) => {
          const data = response.data
          _this.$set('movie_list', data)
          _this.$set('title', data.title)
          _this.$set('total', data.total)
          _this.$set('totalPage', math.ceil(data.total / num))
        })
    }
  },
  watch: {
    '$route': function(to, from) {

      if (type !== to.path.split('/')[1]) {
          this.page = 1
      }
      type = to.path.split('/')[1]
      this.getMovie(type)
    }
  }
}
