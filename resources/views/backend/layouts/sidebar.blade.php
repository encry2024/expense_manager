<div class="col-lg-3">
	<div class="list-group">
		<router-link to="/dashboard" class="list-group-item list-group-item-action">Dashboard</router-link>
		<router-link to="/expense/" class="list-group-item list-group-item-action">Expense</router-link>
		@if (Auth::user()->hasRole('administrator'))
			<router-link to="/category/" class="list-group-item list-group-item-action">Category</router-link>
			<router-link to="/user/" class="list-group-item list-group-item-action">Users</router-link>
		@endif
	</div>
</div>