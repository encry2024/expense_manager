<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-5">
						<h4 class="panel-heading">
							Category Management
							<small class="text-muted">Edit Category</small>
						</h4>
					</div><!--col-->
				</div>

				<hr>

				<div class="row">
					<form @submit.prevent="updateCategory">
						<div class="col-lg-12">

							<div class="form-group row">
								<label for="name" class="col-md-2" style="font-size: 13px;">Category</label>

								<div class="col-md-10">
									<input type="text" class="form-control" required v-model="data.name"
									       placeholder="Name" id="name">
								</div><!--col-->
							</div><!--form-group-->

							<hr>

							<router-link to="/category/" class="btn btn-danger ml-1 pull-left" >Cancel</router-link>
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
                    name: '',
                }
            }
        },
        mounted() {
            this.getCategoryDetails()
        },
        methods: {
            getCategoryDetails() {
                axios({
                    method: 'GET',
                    url: '/category/' + this.$route.params.id + '/detail'
                }).then(
                    result => {
                        this.data.name = result.data.name;

                        console.log(result);
                    },
                    error => {
                        console.log(error);
                    }
                )
            },
            updateCategory() {
                fetch('/category/' + this.$route.params.id + '/update', {
                    method: 'POST',
                    body: JSON.stringify(this.data),
                    headers: {
                        'content-type': 'application/json',
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                })
                    .then(res => res.json())
                    .then(data => {

                        alert("Category " + data.category.name + " was successfully updated");
                    })
                    .catch(err => console.log(err))
            }
        }
    }
</script>