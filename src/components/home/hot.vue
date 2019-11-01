<template>
  <Scroll>
    <List />
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
  }
}
</script>

<style lang="scss">
</style>
