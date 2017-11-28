<template>
	<div class="page-wrap">

		<main class="wrap">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="content">

							<router-view :posts="articles"></router-view>
						</div>
					</div>

					<sidebar :posts="articles"></sidebar>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar';

	export default {
		name: 'BlogIndex',
		components: {
			Sidebar
		},
		data () {
			return {
				articles: [],
			}
		},
		methods: {
			getArticles() {
				this.$http.get('/api/articles')
					.then(articles => {
						this.articles = articles.data;

					}).catch(err => console.log(err.message));
			},

		},
		created() {
			this.getArticles();
		}
	}
</script>

<style>

</style>