<template>
  <div class="home">
    <Header />
    <Hot v-show="header.headerTab == 0" :list="hotList"/>
    <Nearly v-show="header.headerTab == 1" :list="nearlyList" />
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
      hotList: [],
      nearlyList: []
    }
  },
  computed: {
    ...mapState(['header'])
  },
  methods: {
    initHot () {
      let params = { 'status': 'HOT', 'type': 'queryFilm', 'cityName': '上海市', 'DBType': 'mongoDB', 'channelId': 7, 'channelCode': 'J0005', 'memberId': '' }
      this.$http({
        method: 'POST',
        url: '/cinCinemaFilmViewService/findFilm',
        data: qs.stringify({ params: JSON.stringify(params) })
      }).then(this.handleHotData)
    },
    handleHotData (data) {
      if (data.status === 'S' && data.data) {
        this.hotList = data.data
      }
    },
    initNearly () {
      let params = { 'status': 'RELEASE', 'type': 'ordinary', 'channelId': 7, 'channelCode': 'J0005', 'memberId': '' }
      this.$http({
        method: 'POST',
        url: '/commonFilmService/findFilms',
        data: qs.stringify({ params: JSON.stringify(params) })
      }).then(this.handleNearlyData)
    },
    handleNearlyData (data) {
      if (data.status === 'S' && data.data) {
        this.nearlyList = data.data
      }
    },
    initPage () {
      if (this.header.headerTab === 0) {
        this.hotList.length || this.initHot(this.handleHotData)
      } else {
        this.nearlyList.length || this.initNearly(this.handleNearlyData)
      }
    }
  },
  watch: {
    header: {
      handler (val) {
        this.initPage()
      },
      deep: true
    }
  },
  mounted () {
    this.initPage()
  }

}
</script>
