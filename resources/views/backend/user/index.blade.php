@extends('backend.layouts.app')

@section('content')
	<div class="row">
		<div class="col-lg-12">
			<div class="panel panel-default">
				<div class="panel-heading"><h4>Users</h4></div>

				<div class="panel-body">
					<table class="table">
						<thead>
							<tr>
								<th>Name</th>
								<th>E-mail</th>
								<th>Date Created</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							@foreach ($users as $user)
								<tr>
									<td>{{ $user->name }}</td>
									<td>{{ $user->email }}</td>
									<td>{{ date('F d, Y', strtotime($user->created_at)) }}</td>
									<td></td>
								</tr>
							@endforeach
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
@endsection