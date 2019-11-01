<template>
  <div class="home">
    <Header />
    <Hot v-show="header.headerTab == 0" />
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

export default {
  name: 'home',
  components: {
    Header,
    Hot,
    Nearly,
    Footer
  },
  computed: {
    ...mapState(['header'])
  }

}
</script>
