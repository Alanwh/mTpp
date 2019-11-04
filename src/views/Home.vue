<template>
  <div class="home">
    <Header />
    <Hot v-show="header.headerTab == 0" :list="list"/>
    <Nearly v-show="header.headerTab == 1" />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import Hot from '../components/home/hot'
import Nearly from '../components/home/nearly'
import { mapState } from 'vuex'
import qs from 'qs'

export default {
  name: 'home',
  components: {
    Header,
    Hot,
    Nearly,
    Footer
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
    ...mapState(['header'])
  },
  methods: {
    getData () {
      let params = { 'status': 'HOT', 'type': 'queryFilm', 'cityName': '上海市', 'DBType': 'mongoDB', 'channelId': 7, 'channelCode': 'J0005', 'memberId': '' }
      this.$http({
        method: 'POST',
        url: '/cinCinemaFilmViewService/findFilm',
        data: qs.stringify({ params: JSON.stringify(params) })
      }).then(this.handleData)
    },
    handleData (data) {
      if (data.status === 'S' && data.data) {
        this.list = data.data
      }
    }
  },
  mounted () {
    this.getData(this.handleData)
  }

}
</script>
