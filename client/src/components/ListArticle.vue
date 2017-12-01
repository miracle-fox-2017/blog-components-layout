<template>
  <div>
    <div class="card" style="width: 100%;">
      <h2>Recent Posts</h2>
        <div class="card-body">
          <ul class="list-group" v-for="article in posts">
            <li class="list-group-item"><router-link :to="`/blog/article/${article._id}`">{{ article.title }}</router-link></li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ListsArticle',
  props: ['posts']
}
</script>
  
<style>

</style>
