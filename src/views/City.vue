<template>
  <div v-show="city.cities && city.hotCities">
    <CityHeader />
    <Scroll :styleObj="style" @scroll="scroll">
      <CityList :cityData="city"/>
    </Scroll>
    <Alphabet :cityData="city" />
  </div>
</template>

<script>
import CityHeader from '@/components/city/header'
import Alphabet from '@/components/city/alphabet'
import CityList from '@/components/city/list'
import Scroll from '@/components/common/scroll'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityList,
    Scroll,
    Alphabet
  },
  data () {
    return {
      style: {
        bottom: 0
      },
      city: {}
    }
  },
  methods: {
    initData () {
      this.$http({ methods: 'GET', url: '/city' }).then(this.handleCityData)
    },
    handleCityData (data) {
      if (data.ret) {
        this.city = { ...data.data }
      }
    },
    scroll (value) {
      console.log('scroll~~~~~~~', value)
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<style lang="scss">
</style>
