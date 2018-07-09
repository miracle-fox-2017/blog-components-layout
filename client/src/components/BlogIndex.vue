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

					<sidebar :posts="this.articles"></sidebar>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar';
	import { mapActions, mapState } from 'vuex'

	export default {
		name: 'BlogIndex',
		components: {
			Sidebar
		},

		data() {
			return {

			}
		},

		methods: {
			...mapActions ([
				'getArticles'
			]),

		},

		created() {
			this.getArticles()
		},

		computed: {
			set: (articles) => {
				this.articles = articles;
			},

			...mapState ([
				'articles'
			])
		}

		/*computed: {
			articles () {
				return this.$store.state.articles
			}
		}*/
	}
</script>

<style>

</style>