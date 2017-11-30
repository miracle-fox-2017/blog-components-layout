<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <Sidebar :blogs="blogs"></Sidebar>
        <Post @getDat="grabData"></Post>
      </div>
      <div class="col-md-9">
        <router-view :blogs="blogs" @passData="recieveData" :fromDetail="fromDetail" @send-data-edit="receiveDataEdit" @sendDataDelete="recieveDataDelete"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import MainPage from '@/components/MainPage'
  import Post from '@/components/Post'
  export default {
    name: 'MainBlog',
    data () {
      return {
        blogs: [],
        fromDetail: {}
      }
    },
    components: {
      Sidebar,
      MainPage,
      Post
    },
    methods: {
      getAllArticles () {
        this.$axios.get('http://localhost:3000/articles')
        .then((response) => {
          this.blogs.push(...response.data)
        }).catch((err) => {
          console.log(err)
        })
      },
      grabData (fromChild) {
        this.blogs.push(fromChild.list)
      },
      recieveData (fromChild) {
        this.fromDetail = fromChild.list
      },
      receiveDataEdit (fromChild) {
        let arrId = []
        let idChanged = ''
        this.blogs.map((data) => {
          arrId.push(data._id)
          if (fromChild.list._id === data._id) {
            idChanged = data._id
          }
        })
        console.log(fromChild.list.title)
        let idxForSplice = arrId.indexOf(idChanged)
        this.blogs.splice(idxForSplice, 1)
        this.blogs.push(fromChild.list)
      },
      recieveDataDelete (fromChild) {
        let data = localStorage.getItem('dataLogin')
        let dataParse = JSON.parse(data)
        this.idUser = dataParse.id
        this.$axios.delete(`http://localhost:3000/articles/${this.idUser}/${fromChild.list._id}`)
        .then((response) => {
          this.blogs.forEach((data, index) => {
            if (index === fromChild.idx) {
              this.blogs.splice(index, 1)
            }
          })
        })
      }
    },
    created: function () {
      this.getAllArticles()
    }
  }
</script>

<style>
.container {
  padding-bottom: 2em
}
</style>
