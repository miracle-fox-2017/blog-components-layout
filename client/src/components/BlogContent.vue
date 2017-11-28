<template>
  <div class="row">
    <div class="ui segment column">
      <img class="ui fluid image" src="https://i.pinimg.com/originals/81/2b/1a/812b1a22fd978f6d7826028d2bdcfaf5.jpg">
    </div>
    <div class="row">
      <div class="ui grid segment">
        <div class="eleven wide column">
          <blogshortarticle v-for="(article,i) in articles" :key="i" :article="article"></blogshortarticle>
        </div>
        <div class="five wide column large screen only">
          <blogsidebar :articles="articles"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogsidebar from '@/components/BlogSidebar'
import blogshortarticle from '@/components/BlogShortArticle'

export default {
  components: {
    blogsidebar,
    blogshortarticle
  },
  props: ['articles']
}
</script>

<style>

</style>
