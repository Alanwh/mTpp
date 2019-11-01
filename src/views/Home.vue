<template>
  <div class="home">
    <Header />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/header.vue';
import Footer from '@/components/common/footer.vue';
import List from '@/components/home/list.vue';

export default {
  name: 'Home',
  components: {
    Header,
    List,
    Footer,
  },
};

</script>
