<?php

Route::get('dashboard', 'DashboardController@index')->name('dashboard');

Route::group([
    'as' => 'admin.',
    'namespace' => 'Auth',
    'middleware' => ['role:administrator']
], function () {
    // User Management
    // User Status'
    // Route::get('user/deleted', [UserStatusController::class, 'getDeleted'])->name('user.deleted');

    // User CRUD
    Route::get('user', 'UserController@index')->name('user.index');
    /*Route::get('user/create', [UserController::class, 'create'])->name('user.create');
    Route::post('user', [UserController::class, 'store'])->name('user.store');*/

    // Specific User
    /*Route::group(['prefix' => 'user/{user}'], function () {
        // User
        Route::get('/', [UserController::class, 'show'])->name('user.show');
        Route::get('edit', [UserController::class, 'edit'])->name('user.edit');
        Route::patch('/', [UserController::class, 'update'])->name('user.update');
        Route::delete('/', [UserController::class, 'destroy'])->name('user.destroy');

        // Deleted
        Route::get('delete', [UserStatusController::class, 'delete'])->name('user.delete-permanently');
        Route::get('restore', [UserStatusController::class, 'restore'])->name('user.restore');
    });*/
});
