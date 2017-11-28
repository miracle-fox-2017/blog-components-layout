<template>
  <div>
    <Navbar/>
    <Contents/>
    <Footers/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Contents from '@/components/Content'
import Footers from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Navbar,
    Contents,
    Footers
  }
}
</script>

<style>

</style>
