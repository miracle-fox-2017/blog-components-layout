<template>
  <div class="ui segment">
    <div class="row">
      <div class="ui grid stackable">
        <div class="ten wide column">
          <h2>Dashboard</h2>
        </div>
        <div class="six wide column right aligned">
          <router-link to="/admin/articles/post" class="ui primary button">
            Add New
          </router-link>
          <div class="ui green button">
            Edit
          </div>
          <div class="ui negative button">
            Delete
          </div>
        </div>
      </div>
    </div>
    <div class="ui divider"></div>
    <div class="row">
      <div class="ui segment">
        <table class="ui celled table">
          <thead>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>CREATED DATE</th>
          </thead>
          <tbody>
            <tr v-for="(article,i) in articles" :key="i">
              <td>
                <div class="ui checkbox">
                  <input name="example" type="checkbox" :value="article._id">
                  <label>{{article.title}}</label>
                </div>
              </td>
              <td>{{article.author}}</td>
              <td class="five wide">{{new Date(article.createdAt).toString()}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'BlogAdminContent',
  data () {
    return {
      articles: {}
    }
  },
  methods: {
    getAllArticle () {
      this.$http.get('/articles')
      .then(({data}) => {
        this.articles = data
      })
      .catch((err) => console.log(err))
    }
  },
  mounted () {
    this.getAllArticle()
  }
}
</script>

<style>
</style>
