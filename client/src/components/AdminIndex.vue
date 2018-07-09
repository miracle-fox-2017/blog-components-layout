<template>
	<div class="page-wrap">

		<main class="wrap">
			<div class="container">
				<div class="row">
					<div class="col-md-10">
						<div class="content">

							<router-view></router-view>
						</div>
					</div>

					<sidebar-admin></sidebar-admin>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import SidebarAdmin from '@/components/SidebarAdmin';

	export default {
		name: 'AdminIndex',
		components: {
			SidebarAdmin
		},
		data () {
			return {
				articles: [],
			}
		},
		methods: {

		},
		created() {

		}
	}
</script>

<style>

</style>