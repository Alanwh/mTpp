<template>
  <Scroll>
    <List :list="list"/>
  </Scroll>
</template>

<script>
import Scroll from '@/components/common/scroll'
import List from './list'

export default {
  name: 'Hot',
  components: {
    List,
    Scroll
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
</style>
