<template>
    <div class="ui segment">
      <div class="ui grid">
        <router-link :to="'/article/'+article._id" class="four wide column">
          <img class="ui small image" src="../assets/logo1.png" alt="">
        </router-link>
        <div class="twelve wide column short">
          <router-link :to="'/article/'+article._id" class="ui header blue">
            {{article.title}}
          </router-link>
          <div class="ui divider"></div>
          <div class="ui content">
            <!-- <p class="content" v-html="article.content.substring(0, 150)"></p> -->
            <p>{{article.content.substring(0, 150)}}...</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['article']
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
