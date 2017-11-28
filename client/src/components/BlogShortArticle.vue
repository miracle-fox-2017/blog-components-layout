<template>
  <div class="ui segment">
    <div class="ui grid">
      <div class="four wide column">
        <img class="ui small image" src="../assets/logo1.png" alt="">
      </div>
      <div class="twelve wide column short">
        <div class="ui header">
          {{article.title}}
        </div>
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
  props: ['article'],
  mounted () {
    console.log('isi article ', this.article)
  }
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
