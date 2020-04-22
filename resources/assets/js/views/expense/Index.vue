<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-5">
						<h4 class="panel-heading">
							Expense Management
							<small class="text-muted">Expense List</small>
						</h4>
					</div><!--col-->

					<div class="col-sm-7">
						<div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
							<router-link :to="{ path: '/expense/create/'+ user}" class="btn btn-success ml-1"
							             data-toggle="tooltip"
							             title="Add New Expense">
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
								<th>Category</th>
								<th>Amount</th>
								<th>Date Created</th>
							</tr>
							</thead>

							<tbody>
								<tr v-for="(expense) in expenses">
									<td>{{ expense.category.name }}</td>
									<td>{{ expense.formatted_amount }}</td>
									<td>{{ expense.formatted_created_at }}</td>
									<td>
										<router-link :to="{ path: '/expense/' + expense.id + '/edit'}"
										             class="btn btn-success ml-1"
										             data-toggle="tooltip" title="Edit User">
											<span class="glyphicon glyphicon-search"></span>
										</router-link>

										<button class="btn btn-danger" @click="deleteExpense(expense.id)"
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
                expenses: [],
                user: $('meta[name="uid"]').attr('content')
            }
        },
        mounted() {
            this.getExpenses()
	        this.getUserId()
        },
        methods: {
            getUserId() {
                // this.user = this.$attrs.user;
            },
            getExpenses() {
                axios({
                    method: 'GET',
                    url: '/api/expenses/list'
                }).then(
                    result => {
                        this.expenses = result.data;

                        console.log(result);
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            deleteExpense(id) {
                if (confirm('Are you sure?')) {
                    fetch(`/expense/${id}/delete`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            alert('Expense was successfully deleted')
                            this.getExpenses();
                        })
                        .catch(err => console.log(err));
                }
            }
        }
    }
</script>