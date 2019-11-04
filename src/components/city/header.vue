<template>
  <div class="header border-bottom">
    <router-link to="/"><span class="iconfont">&#xe63b;</span></router-link>
    选择城市
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/variable.scss';
.header{
  line-height: $headerHeight;
  text-align: center;
  .iconfont{
    float: left;
    margin-left: .1rem;
  }
}
</style>
