<template>
  <div class="header border-bottom">
    <div class="city">
      <span class="iconfont">&#xe659;</span>
      南京
      <span class="iconfont">&#xe615;</span>
    </div>
    <ul class="tabs">
      <li 
        :class="['tab', {active: nowTab === index}]" 
        v-for="(item, index) in tabs" :key="item"
        @click="changeTab(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
@Component

export default class Header extends Vue {
  private nowTab: Number = 0;
  private tabs: String[] = ['正在热映', '即将上映'];
  
  private changeTab(index: Number) {
    this.nowTab = index
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
