<?php


namespace App\Models\Category\Traits\Relationship;


use App\Models\Expense\Expense;

trait CategoryRelationship
{

    public function expenses()
    {
        $this->hasMany(Expense::class);
    }

}
