<template>
  <div class="home">
    <Header />
    <Hot />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import Hot from '../components/home/hot'
// import Nearly from '../components/home/nearly'

export default {
  name: 'home',
  components: {
    Header,
    Hot,
    Footer
  }
}
</script>
