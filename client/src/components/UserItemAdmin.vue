<template>
	<div class="admin-item">
		<h4 class="widget-title no-mt"><span>Manage User <a href="#" class="btn btn-info btn-add">New User</a></span></h4>
		<table class="table condensed">
			<thead>
				<tr>
					<th>ID</th>
					<th>Username</th>
					<th>Email</th>
					<th>Full Name</th>
					<th>Action</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(user, index) in users" :key="index">
					<td>{{ user._id }}</td>
					<td>{{ user.username }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.full_name }}</td>
					<td>
						<a href="/" class="btn btn-warning">Edit</a>
						<a href="/" class="btn btn-danger">Delete</a>
					</td>
				</tr>
			</tbody>
		</table><!-- /.table condensed -->
	</div>
</template>

<script>
	export default {
		name: 'user-item-admin',
		data () {
			return {
				users: []
			}
		},

		methods: {
			getUsers() {
				this.$http.get('/api/users')
				.then(users => {
					this.users = users.data;

				}).catch(err => console.log(err.message));
			},
		},

		created() {
			this.getUsers();
		}
	}
</script>

<style scoped>
	.btn-add {
		margin-left: 3rem;
	}
</style>