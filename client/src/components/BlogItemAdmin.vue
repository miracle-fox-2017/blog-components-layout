<template>
	<div class="admin-item">
		<h4 class="widget-title no-mt"><span>Manage Article <a href="#"  data-toggle="modal" data-target="#createArticle" class="btn btn-info btn-add" @click="initNewArticle">New Article</a></span></h4>
		<table class="table condensed">
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Category</th>
					<th>Author</th>
					<th>Action</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(article, index) in articles" :key="index">
					<td>{{ article._id }}</td>
					<td>{{ article.title }}</td>
					<td>{{ article.category }}</td>
					<td>{{ article.author }}</td>
					<td>
						<a href="#" class="btn btn-warning" data-toggle="modal" data-target="#createArticle" @click="initEditModal(index, article)">Edit</a>
						<a href="#" class="btn btn-danger" @click="deleteArticle(index, article)">Delete</a>
					</td>
				</tr>
			</tbody>
		</table><!-- /.table condensed -->

		<!-- Modal -->
		<div class="modal fade" id="createArticle" tabindex="-1" role="dialog" aria-labelledby="createArticleLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="createArticleLabel">Manage Article</h4>
					</div>
					<div class="modal-body">
						<form action="#">
							<div class="input-group small-mb u-full-width">
								<label for="article_title">Title</label>
								<input class="form-control" type="text" name="article_title" id="article_title" ref="article_title" v-bind:value="editedArticle.title" placeholder="Article title">
							</div><!-- /.input-group small-mb -->

							<div class="input-group small-mb u-full-width">
								<label for="article_content">Content</label>
								<textarea class="form-control" type="text" name="article_content" id="article_content" ref="article_content"placeholder="Article Content" rows="8" cols="8">{{ editedArticle.content }}</textarea>
							</div><!-- /.input-group -->

							<div class="input-group small-mb u-full-width">
								<label for="article_category">Category</label>
								<input class="form-control" type="text" name="article_category" id="article_category" ref="article_category" v-bind:value="editedArticle.category" placeholder="Article Category">
							</div><!-- /.input-group small-mb -->

							<div class="input-group small-mb u-full-width">
								<label for="article_author">Author</label>
								<input class="form-control" type="text" name="article_author" id="article_author" ref="article_author" v-bind:value="editedArticle.author" placeholder="Article Author">
							</div><!-- /.input-group small-mb -->

						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal" @click="modifyArticle">Save changes</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'blog-item-admin',
		data () {
			return {
				articles: [],
				editedArticle: {
					_id: '',
					title: '',
					content: '',
					category: '',
					author: ''
				},
				editedArticleIndex: null,
				articleFormType : 'create'
			}
		},

		methods: {
			getArticles() {
				this.$http.get('/api/articles')
				.then(articles => {
					this.articles = articles.data;

				}).catch(err => console.log(err.message));
			},

			initNewArticle() {
				this.articleFormType = 'create';
				this.editedArticle = {
					_id: '',
					title: '',
					content: '',
					category: '',
					author: ''
				};

				this.editedArticleIndex = null
			},

			initEditModal(index, article) {
				this.articleFormType = 'edit';
				this.editedArticle = article;
				this.editedArticleIndex = index;
			},

			modifyArticle() {
				if (this.articleFormType === 'edit') {
					let editArticle = {
						title: this.$refs.article_title.value,
						content: this.$refs.article_content.value,
						category: this.$refs.article_category.value,
						author: this.$refs.article_author.value,
					};

					this.$http.put('/api/articles/'+this.editedArticle._id, editArticle, { headers: { token_blog: this.getTestToken() } })
						.then(({data}) => {

							this.articles.splice(this.editedArticleIndex, 1, data.article);

						}).catch(err => console.log(err.message))

				} else {
					console.log('~~~~~~~~~~CREATE ARTICLE')
					let newArticle = {
						title: this.$refs.article_title.value,
						content: this.$refs.article_content.value,
						category: this.$refs.article_category.value,
						author: this.$refs.article_author.value,
					};

					this.$http.post('/api/articles', newArticle, { headers: { token_blog: this.getTestToken() } })
						.then(({data}) => {

							this.articles.push(data.article);

						}).catch(err => console.log(err.message));
				}

			},

			editArticle(index, article){
				let newArticle = {
					title: this.$refs.article_title.value,
					content: this.$refs.article_content.value,
					category: this.$refs.article_category.value,
					author: this.$refs.article_author.value,
				};

				this.$http.put('/api/articles/'+article._id, newArticle, { headers: { token_blog: this.getTestToken() } })
					.then(({data}) => {

						this.articles.push(data.article);

					}).catch(err => console.log(err.message));
			},

			deleteArticle(index, article) {
				this.$http.delete('/api/articles/'+article._id, { headers: { token_blog: this.getTestToken() } })
					.then(({data}) => {

						this.articles.splice(index, 1);

					}).catch(err => console.log(err.message));
			}
		},

		created() {
			this.initNewArticle();
			this.getArticles();
		}

	}
</script>

<style>
	.btn-add {
		margin-left: 3rem;
	}
</style>