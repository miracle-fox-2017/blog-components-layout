<template>
	<section>
		<div class="blog-item" v-for="(post, index) in posts">
			<h2 class="blog-title"><router-link :to="`/articles/${post._id}`">{{ post.title }}</router-link></h2>
			<div class="item-content">
				{{ post.content }}
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'blog-item',
		props: ['posts'],
		data () {
			return {
				articles: []
			}
		},
		methods: {
			/*getArticles() {
				this.$http.get('/api/articles')
					.then(articles => {
						this.articles = articles.data;

					}).catch(err => console.log(err.message));
			}*/
		},
		created() {
			// this.getArticles();
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