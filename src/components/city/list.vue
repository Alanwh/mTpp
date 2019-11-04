<template>
  <div class="city">
    <div class="current">
      <div class="city-title">当前城市</div>
      <ul class="city-list">
        <router-link to="/" tag="li">北京</router-link>
      </ul>
    </div>
    <div class="location">
      <div class="city-title">GPS</div>
      <ul class="city-list">
        <router-link to="/" tag="li">北京</router-link>
      </ul>
    </div>
    <div class="popular">
      <div class="city-title">热门城市</div>
      <ul class="city-list">
        <router-link to="/" tag="li" class="border-top">北京</router-link>
        <router-link to="/" tag="li" class="border-top">北京</router-link>
        <router-link to="/" tag="li" class="border-top">北京</router-link>
        <router-link to="/" tag="li" class="border-top">北京</router-link>
        <router-link to="/" tag="li" class="border-top">北京</router-link>
      </ul>
    </div>
    <div class="all">
      <div class="alphabeta">
        <div class="city-title">A</div>
        <ul class="city-list">
          <router-link to="/" tag="li" class="border-top">北京</router-link>
          <router-link to="/" tag="li" class="border-top">北京</router-link>
          <router-link to="/" tag="li" class="border-top">北京</router-link>
          <router-link to="/" tag="li" class="border-top">北京</router-link>
          <router-link to="/" tag="li" class="border-top">北京</router-link>
          <router-link to="/" tag="li" class="border-top">北京</router-link>
          <router-link to="/" tag="li" class="border-top">北京</router-link>
          <router-link to="/" tag="li" class="border-top">北京</router-link>
          <router-link to="/" tag="li" class="border-top">北京</router-link>
          <router-link to="/" tag="li" class="border-top">北京</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/variable.scss';
.city{
  line-height: .4rem;
  .city-title{
    background: #eee;
    text-indent: .1rem;
    color: #777;
  }
  .city-list{
    margin-left: .1rem;
  }
}
</style>
