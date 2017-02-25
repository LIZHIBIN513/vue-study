<template>
<div class="media">
  <div class="media-left">
    <img :src="movieInfo.images.small" :alt="movieInfo.alt">
  </div>
  <div class="media-body">
    <h4 class="media-heading">{{movieInfo.title}}</h4>
    <p>类型：{{genres}}</p>
    <p>导演：<span v-for="(director,index) in movieInfo.directors">{{director.name}}{{index == movieInfo.directors.length-1?'':'、'}}</span></p>
    <p>主演：
        <span v-for="(cast,index) in movieInfo.casts">
          {{cast.name}}{{index == movieInfo.casts.length-1?'':'、'}}
        </span>
    </p>
  </div>
</div>
</template>

<script>
  export default {
    props: ['movie'],
    computed: {
      movieInfo: function () {
        return this.movie
      },
      genres: function () {
        return this.movie.genres.join('、')
      }
    }
  }
</script>
