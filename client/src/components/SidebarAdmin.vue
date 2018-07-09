<template>
	<aside class="col-md-2">
		<div class="widget recent-post">
			<h3 class="widget-title no-mt">Sitemap</h3>

			<ul class="flat-list recent-posts">
				<li>
					<router-link :to="`/admin/articles`">Articles</router-link>
				</li>
				<li>
					<router-link :to="`/admin/users/`">User</router-link>
				</li>
			</ul><!-- /.recent-posts -->
		</div><!-- /.widget recent-post -->
	</aside>
</template>

<script>
	export default {
		name: 'sidebar-admin',
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