<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-5">
						<h4 class="panel-heading">
							User Management
							<small class="text-muted">Create User</small>
						</h4>
					</div><!--col-->
				</div>

				<hr>

				<div class="row">
					<form @submit.prevent="addUser">
						<div class="col-lg-12">
							<div class="form-group row">
								<label for="first_name" class="col-md-2" style="font-size: 13px;">First Name</label>

								<div class="col-md-10">
									<input type="text" class="form-control" required v-model="data.first_name"
									       placeholder="First Name" id="first_name">
								</div><!--col-->
							</div><!--form-group-->

							<div class="form-group row">
								<label for="last_name" class="col-md-2" style="font-size: 13px;">Last Name</label>

								<div class="col-md-10">
									<input type="text" class="form-control" required v-model="data.last_name"
									       placeholder="Last Name" id="last_name">
								</div><!--col-->
							</div><!--form-group-->

							<div class="form-group row">
								<label for="email" class="col-md-2" style="font-size: 13px;">E-mail</label>

								<div class="col-md-10">
									<input type="text" class="form-control" required v-model="data.email"
									       placeholder="Email" id="email">
								</div><!--col-->
							</div><!--form-group-->

							<div class="form-group row">
								<label for="last_name" class="col-md-2" style="font-size: 13px;">Password</label>

								<div class="col-md-10">
									<input type="password" class="form-control" required v-model="data.password"
									       placeholder="Password" id="password">
								</div><!--col-->
							</div><!--form-group-->

							<div class="form-group row">
							<label for="password_confirmation" class="col-md-2" style="font-size: 13px;">Confirm
							                                                                             Password</label>

								<div class="col-md-10">
									<input type="password" class="form-control" required
									       v-model="data.password_confirmation"
									       placeholder="Confirm Password" id="password_confirmation">
								</div><!--col-->
							</div><!--form-group-->

							<div class="form-group row">
								<label class="col-md-2">Roles and Permissions</label>

								<div class="col-md-10">
									<div class="table-responsive">
										<table class="table">
											<thead>
											<tr>
												<th>Roles</th>
												<th>Permissions</th>
											</tr>
											</thead>

											<tbody>
											<tr>
												<td>
													<div v-for="(role) in roles" v-bind:key="role.id"
													     class="custom-control custom-switch">
														<input type="checkbox" class="custom-control-input" :id="'role' +
														role.id" v-model="data.roleField" :value="role.name">
														<label class="custom-control-label" :for="'role' + role.id">{{ role.name }}</label>

														<div class="panel-body">
																<li v-for="role_permission in role.permissions"
																    v-text="role_permission.name"></li>
														</div>
													</div>

												</td>
												<td>
													<div v-for="(permission) in permissions" v-bind:key="permission.id"
													     class="custom-control custom-switch">
														<input type="checkbox" class="custom-control-input"
														       :id="'permission' + permission.id"
														       :value="permission.name"
														       v-model="data.permissionField">
														<label class="custom-control-label" :for="'permission'
														+permission.id">{{ permission.name }}</label>
													</div>
												</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div><!--col-->
							</div><!--form-group-->

							<hr>

							<router-link to="/user/" class="btn btn-danger ml-1 pull-left" >Cancel</router-link>
							<button type="submit" class="btn btn-success pull-right">Create</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                data: {
                    permissionField: [],
	                roleField: []
                },
                roles: [],
	            permissions: [],
	            edit: false
            }
        },
        mounted() {
            this.getRoles()
	        this.getPermissions()
        },
        methods: {
            getRoles() {
                axios({
                    method: 'GET',
                    url: '/api/roles/list'
                }).then(
                    result => {
                        console.log(result.data);

                        this.roles = result.data
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
	        getPermissions() {
                axios({
                    method: 'GET',
                    url: '/api/permissions/list'
                }).then(
                    result => {
                        console.log(result.data);

                        this.permissions = result.data
                    },
                    error => {
                        console.log(error);
                    }
                )
	        },
	        addUser() {
				if (this.edit === false) {
					fetch('/api/user/store', {
					    method: 'POST',
						body: JSON.stringify(this.data),
						headers: {
					        'content-type': 'application/json',
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
						}
					})
					.then(res => res.json())
					.then(data => {
						this.data.permissionField = [];
						this.data.roleField = [];
						this.data = {}

						alert(data.name + " was successfully created");
					})
					.catch(err => console.log(err))
				} else {

				}
	        }
        }
    }
</script>