<?php

Route::group([
    'namespace' => 'Expense'
], function () {

    Route::get('/expense', 'ExpenseController@index');
    Route::get('/expense/create/{user}', 'ExpenseController@index');
    Route::post('expense/store', 'ExpenseController@store');
    Route::get('/expense/{expense}/edit', 'ExpenseController@index');
    Route::get('/expense/{expense}/details', 'ExpenseController@expenseDetails');
    Route::post('/expense/{expense}/update', 'ExpenseController@update');
    Route::post('/expense/{expense}/delete', 'ExpenseController@destroy');

});