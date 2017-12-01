<template>
  <div>
    <h1>Your Articles</h1>
    <table id="article">
      <thead class="thead-dark">
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Content</th>
          <th>Summary</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listArticle">
          <td>{{ index }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.article }}</td>
          <td>{{ item.graf }}</td>
          <td>
            <button @click="removeItem(item._id)">X</button>
            <button @click="editItem(item)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'tableArticle',
  data () {
    return {
      listArticle: []
    }
  },
  created: function () {
    console.log('helo masuk sini')
    let userId = localStorage.getItem('userId')
    console.log(userId)
    axios.get(`http://localhost:4000/api/blog/${userId}`)
    .then(response => {
      console.log(response.data)
      this.listArticle = response.data
    })
    .catch(err => {
      console.log(err)
    })
  },
  methods: {
    removeItem: function (id) {
      this.listArticle.forEach((element, index) => {
        if (element._id === id) {
          this.listArticle.splice(index, 1)
        }
      })
      axios.delete(`http://localhost:4000/api/blog/${id}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    editItem: function (item) {
      console.log('masuk edit item')
      this.$emit('edit', {
        article: item
      })
    }
  }
}
</script>
  
<style scoped>
#article {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#article td, #article th {
    border: 1px solid #ddd;
    padding: 8px;
}

#article tr:nth-child(even){background-color: #f2f2f2;}

#article tr:hover {background-color: #ddd;}

#article th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}
</style>
