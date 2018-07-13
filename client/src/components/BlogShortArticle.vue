<template>
  <div class="ui container">
    <blogwidgetarticle v-for="article in articles" :key="article._id" :article="article"/>
  </div>
</template>

<script>
import blogwidgetarticle from '@/components/BlogWidgetArticle'

export default {
  components: {
    blogwidgetarticle
  },
  props: ['articles']
}
</script>

<style>
  /* .content {
    font-size: 11px;
    font-weight: 0;
  } */
  .short {
    padding: 2rem 1rem !important;
  }
</style>
