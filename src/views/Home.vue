<template>
  <div class="home">
    <Header />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import List from '../components/home/list';
export default {
  name: 'Home',
  components: {
    Header,
    List,
    Footer
  }
};

</script>
