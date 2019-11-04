<template>
  <div class="city">
    <div class="current">
      <div class="city-title">当前城市</div>
      <ul class="city-list">
        <li tag="li" @click="handleClick">{{nowCity}}</li>
      </ul>
    </div>
    <div class="location">
      <div class="city-title">GPS</div>
      <ul class="city-list">
        <router-link to="/" tag="li">北京</router-link>
      </ul>
    </div>
    <div class="popular">
      <div class="city-title">热门城市</div>
      <ul class="city-list">
        <li
          v-for="item of city.hotCities"
          :key="item.id"
          tag="li"
          class="border-top"
          @click="handleClick">{{item.name}}</li>
      </ul>
    </div>
    <div class="all">
      <div class="alphabeta" v-for="(value, key) in city.cities" :key="key">
        <div class="city-title" ref="key">{{key}}</div>
        <ul class="city-list">
          <li
            v-for="(item, index) of value"
            :key="index"
            class="border-top"
            @click="handleClick">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    city: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapState(['nowCity'])
  },
  methods: {
    handleClick (e) {
      this.change_city(e.target.innerText)
      this.$router.push('/')
    },
    ...mapMutations(['change_city'])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/style/variable.scss';
.city{
  line-height: .4rem;
  .city-title{
    background: #eee;
    text-indent: .1rem;
    color: #777;
  }
  .city-list{
    margin-left: .1rem;
  }
}
</style>
