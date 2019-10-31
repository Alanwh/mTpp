<template>
  <div class="list" ref="list">
    <div class="wrapper">
      <div class="list-item border-bottom" v-for="item in 10" :key="item">
        <div class="img">
          <img src="https://gw.alicdn.com/i2/TB1VyjPjYY1gK0jSZTEXXXDQVXa_.jpg_160x160Q30s100.jpg_.webp" alt="movie pic">
        </div>
        <div class="info">
          <div class="name">少年的你</div>
          <div class="score">淘票票评分: <span class="grade">9.4</span></div>
          <div class="director">导演：曾国祥</div>
          <div class="actor">主演：周冬雨 易烊千玺 尹昉</div>
        </div>
        <div class="btn-wrapper">
          <div class="buy">购票</div>
          <div class="text">特惠</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import BScroll from 'better-scroll'

import { Vue, Component } from 'vue-property-decorator';
@Component

export default class List extends Vue{
  private scroll: any
  private initScroll() {
   this.scroll = new BScroll(this.$refs.list, {
      click:true,
      pullUpLoad: {             
        threshold: 50
      },
      pullDownRefresh:{
        threshold:50,
        stop:20
      }
    })

    this.scroll.on('pullingUp',()=>{
      this.getData();
      this.scroll.finishPullUp();
    })
    this.scroll.on('pullingDown',()=>{
      this.getData();
      this.scroll.finishPullDown();
    })
  }

  getData() {
    console.log('加载数据。。。')
  }

  mounted() {
    this.$nextTick(this.initScroll)
  }


}
</script>

<style lang="scss">
  @import '~@/assets/style/variable.scss';
  .list{
    overflow: hidden;
    position: absolute;
    top: $headerHeight;
    bottom: $headerHeight;
    left: 0;
    right: 0;
    .list-item{
      // height: 1.8rem;
      display: flex;
      align-items: center;
      padding: .1rem 0 .1rem .1rem;
      box-sizing: border-box;
      .img{
        width: .8rem;
        height: 1.12rem;
        img{
          width: 100%;
        }
      }
      .info{
        flex: 1;
        padding-left: .1rem;
        line-height: 1.8em;
        color: #666;
        .name{
          font-weight: bold;
          font-size: .18rem;
          color: #000;
        }
        .grade{
          color: #ff9c1c;
          font-weight: bold;
          font-size: .18rem;
        }
      }
      .btn-wrapper{
        width: .8rem;
        text-align: center;
        .buy{
          width: .5rem;
          height: .3rem;
          line-height: .3rem;
          border-radius: .15rem;
          margin: 0 auto .1rem auto;
          color: #fff;
          background-image: linear-gradient(45deg,#ff47a8,#ff2e62);
        }
        .text{
          color: #999;
          font-size: .12rem;
          margin: 0 auto;
        }
      }
    }
  }
</style>