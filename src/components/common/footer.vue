<template>
  <div class="footer">
    <div
      :class="['footer-tab', 'border-top', {active: footer.footerTab == index}]"
      v-for="(item, index) in footer.footerTabs"
      @click="change_footer_tab(index)"
      :key="index"
    >
      <span class="iconfont" v-html="item.icon"></span>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Footer',
  computed: {
    ...mapState(['footer'])
  },
  methods: {
    ...mapMutations(['change_footer_tab'])
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
