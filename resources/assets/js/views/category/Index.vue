<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-5">
						<h4 class="panel-heading">
							Category Management
							<small class="text-muted">Category List</small>
						</h4>
					</div><!--col-->

					<div class="col-sm-7">
						<div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
							<router-link :to="{ path: '/category/create/'}" class="btn btn-success ml-1"
							             data-toggle="tooltip"
							             title="Add New Expense Category">
								<span class="glyphicon glyphicon-inbox"></span>
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
								<th>Date Created</th>
							</tr>
							</thead>

							<tbody>
							<tr v-for="(category) in categories">
								<td>{{ category.name }}</td>
								<td>{{ category.formatted_created_at }}</td>
								<td>
									<router-link :to="{ path: '/category/' + category.id + '/edit'}"
									             class="btn btn-success ml-1"
									             data-toggle="tooltip" title="Edit Category">
										<span class="glyphicon glyphicon-search"></span>
									</router-link>

									<button class="btn btn-danger" @click="deleteCategory(category.id)"
									        data-toggle="tooltip" title="Delete Category"><span
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
                categories: []
            }
        },
        mounted() {
            this.getCategories()
        },
        methods: {
            getCategories() {
                axios({
                    method: 'GET',
                    url: '/category/list'
                }).then(
                    result => {
                        this.categories = result.data;

                        console.log(result);
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            deleteCategory(id) {
                if (confirm('Are you sure?')) {
                    fetch(`/category/${id}/delete`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            alert('Category was successfully deleted')
                            this.getCategories();
                        })
                        .catch(err => console.log(err));
                }
            }
        }
    }
</script>