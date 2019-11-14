<template>
  <div class="header border-bottom">
    <router-link to="/city" tag="div" class="city">
      <span class="iconfont">&#xe659;</span>
      {{city.nowCity}}
      <span class="iconfont">&#xe615;</span>
    </router-link>
    <ul class="tabs">
      <li
        :class="['tab', {active: header.headerTab == index}]"
        v-for="(item, index) in header.headerTabs" :key="item"
        @click="handleClick(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Header',
  methods: {
    handleClick (index) {
      this.change_header_tab(index)
    },
    ...mapMutations(['change_header_tab'])
  },
  computed: {
    ...mapState(['header', 'city'])
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
