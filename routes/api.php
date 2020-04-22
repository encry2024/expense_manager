<?php

use App\Models\User\User;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('/expenses/list', function () {
    $expenses = \App\Models\Expense\Expense::all();

    return $expenses;
});


Route::get('/users/list', function () {
    $users = User::all();

    return $users;
});

Route::get('/roles/list', function () {
    $roles = \Spatie\Permission\Models\Role::with('permissions')->get();

    return $roles;
});

Route::get('/permissions/list', function () {
    return \App\Models\Permission\Permission::all();
});

Route::get('/report', function () {
    $report = [];
    $categories = \App\Models\Category\Category::with(['expenses'])->get();

    foreach ($categories as $category) {
        $report[] = [
            'name' => $category->name,
            'y' => $category->expenses->sum('amount')
        ];
    }

    return json_encode($report);
});