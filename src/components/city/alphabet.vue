<template>
  <div class="alphabet" v-show="cityData.cities">
    <span>当前</span>
    <span>GPS</span>
    <span>热门</span>
    <span v-for="(value, key) in cityData.cities" :key="key" @click="handleClickAlphabet">{{key}}</span>
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cityData: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleClickAlphabet (e) {
      console.log(e.target.innerText)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variable.scss';
  .alphabet{
    position: fixed;
    top: $headerHeight;
    bottom: 0;
    right: 0;
    width: .3rem;
    text-align: center;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #1394f3;
    line-height: .2rem;
    font-size: .1rem;
  }
</style>
