<?php


namespace App\Models\Category\Traits\Relationship;


use App\Models\Expense\Expense;

trait CategoryRelationship
{

    public function expenses()
    {
        return $this->hasMany(Expense::class);
    }

}
