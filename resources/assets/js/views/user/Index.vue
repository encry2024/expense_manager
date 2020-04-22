<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-5">
						<h4 class="panel-heading">
							User Management
							<small class="text-muted">User List</small>
						</h4>
					</div><!--col-->

					<div class="col-sm-7">
						<div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
							<router-link to="/user/create" class="btn btn-success ml-1" data-toggle="tooltip" title="Add New User">
								<span class="glyphicon glyphicon-plus-sign"></span>
							</router-link>
						</div><!--btn-toolbar-->
					</div>
				</div>

				<hr>

				<div class="row">
					<div class="col-lg-12">
						<table class="table">
							<thead>
							<tr>
								<th>Name</th>
								<th>E-mail</th>
								<th>Date Created</th>
							</tr>
							</thead>

							<tbody>
								<tr v-for="(user) in users">
									<td>{{ user.name }}</td>
									<td>{{ user.email }}</td>
									<td>{{ user.formatted_created_at }}</td>
									<td>
										<router-link :to="{ path: '/user/edit/'+ user.id}"
										             class="btn btn-success ml-1"
										             data-toggle="tooltip" title="Edit User">
											<span class="glyphicon glyphicon-search"></span>
										</router-link>

										<button class="btn btn-danger" @click="deleteUser(user.id)"
										        data-toggle="tooltip" title="Delete User"><span
												class="glyphicon glyphicon-trash"></span></button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import axios from 'axios';

    export default {
        data() {
            return {
                users: []
            }
        },
        mounted() {
            this.getUsers()
        },
        methods: {
            getUsers() {
                axios({
                    method: 'GET',
                    url: '/api/users/list'
                }).then(
                    result => {
                        this.users = result.data
	                    console.log(result.data);
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
	        deleteUser(id) {
				if (confirm('Are you sure?')) {
				    fetch(`/api/user/${id}/delete`, {
				        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }

				    })
					.then(res => res.json())
					.then(data => {
					    alert('User was successfully deleted')
						this.getUsers();
					})
					.catch(err => console.log(err));
				}
	        }
        }
    }
</script>