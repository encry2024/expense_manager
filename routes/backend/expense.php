<?php


// All route names are prefixed with 'admin.coach'.
Route::group([
    'namespace' => 'Expense'
], function () {

    Route::resource('expense', 'ExpenseController');

});
