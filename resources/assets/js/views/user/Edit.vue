<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-5">
						<h4 class="panel-heading">
							User Management
							<small class="text-muted">Edit User</small>
						</h4>
					</div><!--col-->
				</div>

				<hr>

				<div class="row">
					<form @submit.prevent="updateUser">
						<div class="col-lg-12">
							<div class="form-group row">
								<label for="first_name" class="col-md-2" style="font-size: 13px;" >First Name</label>

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
														role.id"
														       v-model="data.userRoles"
														       :value="role.name">
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
														       v-model="data.userPermissions"
														       :value="permission.name"
														>
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
							<button type="submit" class="btn btn-success pull-right">Update</button>
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
                    first_name: '',
	                last_name: '',
	                email: '',
	                userPermissions: [],
	                userRoles: []
                },
	            roles: [],
	            permissions: [],
	            edit: true
            }
        },
        mounted() {
            this.getUserDetails()
            this.getRoles()
            this.getPermissions()
        },
	    computed: {
			hasRoles() {
                let userRoles = this.data.userRoles;
                let roles = this.roles;
                let returnBoolean = {};

                for(let i = 0; i < roles.length; i++) {
                    for (let userRoleIndex = 0; userRoleIndex < Object.keys(userRoles).length; userRoleIndex++) {
                        if(userRoles[userRoleIndex] === roles[i].name) {
                            returnBoolean[roles[i].name] = true;
                        }
                    }
                }

                return returnBoolean;
			},
            hasPermissions() {
                let userPermissions = this.data.userPermissions;
                let permissions = this.permissions;
                let returnBoolean = {};

                for(let i = 0; i < permissions.length; i++) {
                    for (let userRoleIndex = 0; userRoleIndex < Object.keys(userPermissions).length; userRoleIndex++) {
                        if(userPermissions[userRoleIndex] === permissions[i].name) {
                            returnBoolean[permissions[i].name] = true;
                        }
                    }
                }

                return returnBoolean;
            }
	    },
        methods: {
            getRoles() {
                axios({
                    method: 'GET',
                    url: '/api/roles/list'
                }).then(
                    result => {

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

                        this.permissions = result.data
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            getUserDetails() {
                axios({
                    method: 'GET',
                    url: '/api/user/' + this.$route.params.id + '/edit'
                }).then(
                    result => {
                        this.data.first_name = result.data.user.first_name;
                        this.data.last_name = result.data.user.last_name;
                        this.data.email = result.data.user.email;
                        this.data.userRoles = result.data.user_roles;
                        this.data.userPermissions = result.data.user_permissions;
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            updateUser() {
                fetch('/api/user/' + this.$route.params.id + '/update', {
                    method: 'POST',
                    body: JSON.stringify(this.data),
                    headers: {
                        'content-type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                })
                .then(res => res.json())
                .then(data => {

                    alert(data.name + " was successfully updated");
                })
                .catch(err => console.log(err))
            }
        }
    }
</script>