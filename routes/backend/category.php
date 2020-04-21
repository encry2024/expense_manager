<?php


// All route names are prefixed with 'admin.coach'.
Route::group([
    'namespace' => 'Category'
], function () {

    Route::resource('category', 'CategoryController');

});
