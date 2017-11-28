<template>
	<div class="header-wrap">
		<header class="main-header">
			<h1 class="site-title">
				<router-link :to="`/`">Fujianto Blog</router-link>
			</h1><!-- /.site-title -->
		</header><!-- /.main-header -->

		<nav class="top-navbar text-center">
			<ul>
				<li><router-link :to="`/`">Home</router-link></li>
				<li><router-link :to="`/admin`">Admin</router-link></li>
			</ul>
		</nav>
	</div><!-- /.header-wrap -->
</template>

<script>
	export default {
		name: 'main-header',
		data () {
			return {

			}
		}
	}
</script>

<style scoped>
	.main-header {
		padding: 2rem 0;
		text-align: center;
		background: crimson;
		color: #fff;
	}

	.main-header a {
		color:  #fff;
		text-decoration: none;
	}

	.main-header a:hover {
		color:  wheat;
	}

	.site-title {
		margin: 0;
	}

	.top-navbar {
		background: #3c3939;
		padding: 1rem;
		margin-bottom: 3rem;
	}

	.top-navbar ul {
		list-style: none;
		margin-bottom: 0;
		padding-left: 0;
	}

	.top-navbar ul li {
		margin-right: 2rem;
		display: inline-block;
	}

	.top-navbar ul li a {
		color: #fff;
	}

	.top-navbar ul li a:hover {
		color: wheat;
	}
</style>