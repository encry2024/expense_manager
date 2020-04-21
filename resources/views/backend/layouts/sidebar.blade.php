<div class="col-lg-3">
	<div class="list-group">
		<a href="{{ route('backend.dashboard') }}" class="list-group-item list-group-item-action {{ active_class(Active::checkUriPattern('dashboard')) }}">
			Dashboard
		</a>
		<a href="{{ route('backend.expense.index') }}" class="list-group-item list-group-item-action {{ active_class(Active::checkUriPattern('expense*')) }}">Expenses</a>
		@if (Auth::user()->hasRole('administrator'))
			<a href="{{ route('backend.admin.user.index') }}" class="list-group-item list-group-item-action {{ active_class(Active::checkUriPattern('user*')) }}">Users</a>
		@endif
	</div>
</div>