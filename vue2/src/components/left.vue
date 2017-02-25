<template>
  <ul class="nav nav-sidebar">
  <li :class="{active:active === 'in_theaters'}">
    <!-- <a href="#!/in_theaters/1">正在热映</a> -->
    <router-link :to="{ name: 'right', params: { type: 'in_theaters', page : 1 }}">正在热映</router-link>
    </li>
  <li :class="{active:active==='coming_soon' } ">
    <router-link :to="{ name: 'right', params: { type: 'coming_soon', page : 1 }}">即将上映</router-link>
  </li>
  <li :class="{active:active==='top250' } ">
    <router-link :to="{ name: 'right', params: { type: 'top250', page : 1 }}">Top250</router-link>  
  </li>           
</ul>
</template>

<script>
  export default {
    props: ['active']
  }
</script>
