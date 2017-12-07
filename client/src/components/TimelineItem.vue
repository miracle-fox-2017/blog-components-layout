<template>
  <div class="panel-group">
    <item-summary v-for="(article, index) in articles" :key="index" :article="article"></item-summary>
  </div>
</template>
<script>
  import ItemSummary from '@/components/TimelineSummary'
  export default {
    props: ['articles'],
    components: {
      ItemSummary
    }
  }
</script>