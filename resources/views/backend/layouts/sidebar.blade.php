<div class="col-lg-3">
	<div class="list-group">
		<a href="{{ route('backend.dashboard') }}" class="list-group-item list-group-item-action {{ active_class(Active::checkUriPattern('dashboard')) }}">
			Dashboard
		</a>
		<a href="#" class="list-group-item list-group-item-action {{ active_class(Active::checkUriPattern('expenses*')) }}">Expenses</a>
		<a href="#" class="list-group-item list-group-item-action {{ active_class(Active::checkUriPattern('users*')) }}">Users</a>
	</div>
</div>