<?php


namespace App\Models\Expense\Traits\Relationship;


use App\Models\Category\Category;

trait ExpenseRelationship
{

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

}
