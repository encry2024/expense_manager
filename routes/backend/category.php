<?php


// All route names are prefixed with 'admin.coach'.
Route::group([
    'namespace' => 'Category'
], function () {

    Route::get('category/create', 'CategoryController@index');
    Route::get('category', 'CategoryController@index');
    Route::get('category/list', 'CategoryController@categoryList');
    Route::post('category/store', 'CategoryController@store');
    Route::get('category/{category}/edit', 'CategoryController@index');
    Route::post('category/{category}/update', 'CategoryController@update');
    Route::get('category/{category}/detail', 'CategoryController@categoryDetail');
    Route::post('category/{category}/delete', 'CategoryController@destroy');

});
