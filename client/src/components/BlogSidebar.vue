<template>
  <div class="ui segment">
    <h3>Recent Post</h3>
    <div class="ui segment">
      <div class="ui grid" v-for="(article,i) in articles" :key="i" v-if="i < 5">
        <router-link :to="'/article/'+article._id" class="four wide column">
          <img class="ui small image" src="../assets/logo1.png" alt="">
        </router-link>
        <div class="twelve wide column short">
          <router-link :to="'/article/'+article._id" class="ui header blue">
            {{article.title}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogSidebar',
  props: ['articles']
}
</script>

<style>

</style>
