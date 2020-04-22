<template>
	<div>
		<div class="panel panel-default">
			<div class="panel-body">
				<div class="row">
					<div class="col-sm-5">
						<h4 class="panel-heading">
							Category Management
							<small class="text-muted">Create Category</small>
						</h4>
					</div><!--col-->
				</div>

				<hr>

				<div class="row">
					<form @submit.prevent="addCategory">
						<div class="col-lg-12">
							<div class="form-group row">
								<label for="name" class="col-md-2" style="font-size: 13px;">Name</label>

								<div class="col-md-10">
									<input type="text" class="form-control" required v-model="data.name"
									       placeholder="Category Name" id="name">
								</div><!--col-->
							</div><!--form-group-->

							<hr>

							<router-link to="/category" class="btn btn-danger ml-1 pull-left" >Cancel</router-link>
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
                    name: ''
                }
            }
        },
        methods: {
            addCategory() {
                fetch('/category/store', {
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

                        alert("Category " + data.name + " was successfully created");
                    })
                    .catch(err => console.log(err))
            }
        }
    }
</script>