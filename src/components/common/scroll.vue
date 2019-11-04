<template>
  <div class="scroll" ref="scroll" :style="styleObj">
    <div class="wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    styleObj: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    initScroll () {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: true,
        pullUpLoad: {
          threshold: 50
        },
        pullDownRefresh: {
          threshold: 50,
          stop: 20
        }
      })

      this.scroll.on('pullingUp', () => {
        this.getData()
        this.scroll.finishPullUp()
      })

      this.scroll.on('pullingDown', () => {
        this.getData()
        this.scroll.finishPullDown()
      })
    },
    getData () {
      console.log('加载数据。。。')
    }
  },
  mounted () {
    this.$nextTick(this.initScroll)
  }
}
</script>

<style lang="scss">
  @import '~@/assets/style/variable.scss';
  .scroll{
    overflow: hidden;
    position: absolute;
    top: $headerHeight;
    bottom: $headerHeight;
    left: 0;
    right: 0;
  }
</style>
