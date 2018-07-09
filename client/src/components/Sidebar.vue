<template>
	<aside class="col-md-4">
		<div class="widget recent-post">
			<h3 class="widget-title no-mt">Recent Posts</h3>

			<ul class="flat-list recent-posts">
				<li v-for="(article, index) in posts" :key="index">
					<router-link :to="`/articles/${article._id}`">{{ article.title }}</router-link>
				</li>
			</ul><!-- /.recent-posts -->
		</div><!-- /.widget recent-post -->
	</aside>
</template>

<script>
	export default {
		name: 'sidebar',
		props: ['posts'],
		data () {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.widget {
		background: #fff;
		border: 1px solid #dcdcdc;
		padding: 1rem 2rem;
		margin-bottom: 2rem;
	}

	.widget-title {
		font-size: 2rem;
	}
</style>