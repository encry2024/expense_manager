<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>E-mail</th>
					<th>Date Created</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="user in users.data" v-bind:key="user.id">
					<td>{{ user.name }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.formatted_created_at }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
	    props: ['users'],

	    mounted() {
	        console.log(this.users)
        }
    }
</script>