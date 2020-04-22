<?php

Route::get('dashboard', 'DashboardController@index')->name('dashboard');

Route::group([
    'as' => 'admin.',
    'namespace' => 'Auth',
    'middleware' => ['role:administrator']
], function () {
    // User Management

    // User CRUD
    Route::post('/api/user/store', 'UserController@store');
    Route::get('/api/user/{user}/edit', 'UserController@userDetails');
    Route::post('/api/user/{user}/update', 'UserController@update');
    Route::post('/api/user/{user}/delete', 'UserController@destroy');
    Route::get('/user', 'UserController@index');
    Route::get('/user/create', 'UserController@index');

});
