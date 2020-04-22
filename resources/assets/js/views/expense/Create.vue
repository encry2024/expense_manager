<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-5">
						<h4 class="panel-heading">
							Expense Management
							<small class="text-muted">Create Expense</small>
						</h4>
					</div><!--col-->
				</div>

				<hr>

				<div class="row">
					<form @submit.prevent="addExpense">
						<div class="col-lg-12">
							<div class="form-group row">
								<label class="col-md-2" style="font-size: 13px;">Category</label>

								<div class="col-md-10">
									<select v-model="data.category"
									class="form-control">
										<option v-for="(category) in categories" :value="category.id">{{ category.name }}</option>
									</select>
								</div><!--col-->
							</div><!--form-group-->

							<div class="form-group row">
								<label for="amount" class="col-md-2" style="font-size: 13px;">Expense</label>

								<div class="col-md-10">
									<input type="text" class="form-control" required v-model="data.amount"
									       placeholder="Amount" id="amount">
								</div><!--col-->
							</div><!--form-group-->

							<hr>

							<router-link to="/expense/" class="btn btn-danger ml-1 pull-left" >Cancel</router-link>
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
                data: {},
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
                        console.log(result.data);

                        this.categories = result.data
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            addExpense() {
                fetch('/expense/store', {
                    method: 'POST',
                    body: JSON.stringify(this.data),
                    headers: {
                        'content-type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        this.data = {}

                        alert("Expense of " + data.amount + " was successfully created");
                    })
                    .catch(err => console.log(err))
            }
        }
    }
</script>