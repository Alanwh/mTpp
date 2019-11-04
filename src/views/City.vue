<template>
  <div>
    <CityHeader />
    <Scroll :styleObj="style">
      <CityList />
    </Scroll>
    <Alphabet />
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
      }
    }
  }
}
</script>

<style lang="scss">
</style>
