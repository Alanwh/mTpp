<template>
  <div class="header border-bottom">
    <div class="city">
      <span class="iconfont">&#xe659;</span>
      南京
      <span class="iconfont">&#xe615;</span>
    </div>
    <ul class="tabs">
      <li
        :class="['tab', {active: header.headerTab == index}]"
        v-for="(item, index) in header.headerTabs" :key="item"
        @click="change_header_tab(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapMutations(['change_header_tab'])
  },
  computed: {
    ...mapState(['header'])
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/variable.scss';
  .header{
    display: flex;
    line-height: $headerHeight;
    padding-right: .5rem;
    .city{
      width: 1.4rem;
      padding: 0 .1rem;
      .iconfont{
        margin: 0 .02rem;
      }
    }
    .tabs{
      flex: 1;
      display: flex;
      text-align: center;
      .tab{
        flex: 1;
        &.active{
          color: $color;
        }
      }
    }
  }
</style>
