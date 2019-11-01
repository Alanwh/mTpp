<template>
  <div class="footer">
    <div
      :class="['footer-tab', 'border-top', {active: nowTab === index}]"
      v-for="(item, index) of tabs"
      @click="changeTab(index)"
      :key="index"
    >
      <span class="iconfont" v-html="item.icon"></span>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      nowTab: 0,
      tabs: [ { title: '热映', icon: '&#xe65b;' }, { title: '院线', icon: '&#xe8c0;' }, { title: '我的', icon: '&#xe616;' } ]
    }
  },
  methods: {
    changeTab (index) {
      this.nowTab = index
    }
  }
}
</script>

<style lang="scss">
  @import '~@/assets/style/variable.scss';
  .footer{
    display: flex;
    height: $headerHeight;
    background: #fff;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    &-tab{
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      &.active{
        color: $color;
      }
      .iconfont{
        font-size: .22rem;
      }
    }
  }
</style>
