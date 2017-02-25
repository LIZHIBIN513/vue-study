module.exports = {
  template: require('../templates/detail.html'),
  data: function () {
    return {
      movie: {
        images: {}
      }
    }
  },
  ready: function () {
    this.getMovieInfo()
  },
  methods: {
    getMovieInfo: function () {
      var _this = this;
      _this.$http.get(`/movie/subject/${this.$route.params.id}`)
        .then((response) => {
          _this.movie = response.data
          _this.movie.countries = _this.movie.countries.join('、')
          _this.movie.genres = _this.movie.genres.join('、')
        })
    }
  }
}
