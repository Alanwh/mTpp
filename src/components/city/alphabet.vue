<template>
  <div class="alphabet">
    <span>当前</span><span>GPS</span><span>热门</span><span>A</span><span>B</span><span>A</span><span>B</span><span>A</span><span>B</span><span>A</span><span>B</span><span>A</span><span>B</span><span>A</span><span>B</span>
  </div>
</template>

<script>
export default {
  name: 'Alphabet'
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
