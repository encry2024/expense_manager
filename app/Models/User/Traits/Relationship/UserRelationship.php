<?php

namespace App\Models\User\Traits\Relationship;

use App\Models\Expense\Expense;

trait UserRelationship
{
    public function expenses()
    {
        $this->hasMany(Expense::class);
    }
}