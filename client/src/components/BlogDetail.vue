<template>
	<section class="blog-item">
		<h2 class="blog-title"><a href="/">{{ article.title }}</a></h2>
		<div class="item-content">
			{{ article.content }}
		</div>
	</section>

</template>

<script>
	export default {
		name: 'blog-detail',
		props: ['articleId'],
		data () {
			return {
				article : ''
			}
		},
		methods: {
			getSingleArticle(articleId) {

				this.$http.get('/api/articles/'+articleId)
					.then(article => {
						this.article = article.data;

					}).catch(err => console.log(err.message));
			}
		},

		watch: {
			articleId : function(newId) {
				this.getSingleArticle(newId);
			}
		},

		created(){
			this.getSingleArticle(this.articleId);
		}
	}
</script>

<style scoped>
	.blog-title {
		font-size: 2rem;
		margin-top: 0;
	}

	.blog-title a {
		color: #333;
	}

	.blog-title a:hover {
		color: crimson;
	}

	.blog-item {
		background: #fff;
		border: 1px solid #dcdcdc;
		padding: 1rem 2rem;
		margin-bottom: 2rem;
	}
</style>