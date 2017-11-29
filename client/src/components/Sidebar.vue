<template>
  <b-col class="sideBar" cols="12" md="4">
    <b-row>
      <div class="panel panel-default">
        <div class="panel-heading">
          <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-success">
            Last Article
            <span class="badge badge-primary badge-pill">{{ total }}</span>
          </li>
        </div>
        <div v-for="(article, index) in article" :key="index" class="panel-body">
          <div class="list-group">
            <router-link style="text-decoration: none;" :to="article._id + '/' + article.title.split(' ').join('-')">
            <span class="list-group-item list-group-item-action">{{ article.title }}</span>
            </router-link>
        </div>
        </div>
      </div>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['article'],
  data () {
    return {
      total: this.article.length
    }
  }
}
</script>

<style>
.sideBar{
  margin-bottom: 5%;
  text-align:left;
}
.content-sidebar{
  text-align:center;
}

</style>
