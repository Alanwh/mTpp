<template>
  <Scroll>
    <div>
      <div class="title"><span>2019-11-02</span><span class="week">明天</span></div>
      <List />
    </div>
  </Scroll>
</template>

<script>
import Scroll from '@/components/common/scroll'
import List from './list'

export default {
  name: 'Nearly',
  components: {
    List,
    Scroll
  }
}
</script>

<style lang="scss">
.title{
  line-height: .4rem;
  background: #f5f5f5;
  padding-left: .1rem;
  .week{
    margin-left: .1rem;
  }
}
</style>
