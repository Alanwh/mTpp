<template>
  <div class="home">
    <Header />
    <List />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from '../components/common/header.vue';
import Footer from '../components/common/footer.vue';
import List from '../components/home/list.vue';

@Component({
  components: {
    Header,
    Footer,
    List
  },
})

export default class Home extends Vue {
  private msg: String = 'this is a good beginning!';
}

</script>
