<template>
  <div>
    <div class="list-item border-bottom" v-for="item in list" :key="item.filmId">
      <div class="img">
        <img :src="item.posterUrl" alt="movie pic">
      </div>
      <div class="info">
        <div class="name">{{item.titlealt}}</div>
        <div class="score">评分: <span class="grade">{{item.complexScore}}</span></div>
        <div class="director">类型：{{item.filmType}}</div>
        <div class="desc">{{item.ratingDescriptionAlt | filterName}}</div>
      </div>
      <div class="btn-wrapper">
        <div class="buy">购票</div>
        <div class="text">特惠</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    filterName: function (value) {
      if (!value) return ''
      return value.replace(/.*《.*》\s*[：:]/ig, '')
    }
  }
}
</script>

<style lang="scss">
  @import '~@/assets/style/variable.scss';
  .list-item{
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
</style>
