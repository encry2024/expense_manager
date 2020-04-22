<?php


namespace App\Models\Expense\Traits\Attribute;


trait ExpenseAttribute
{
    public function getFormattedAmountAttribute()
    {
        return "PHP " . number_format($this->amount, 2);
    }

    public function getFormattedCreatedAtAttribute()
    {
        return date('F d, Y h:i A', strtotime($this->created_at));
    }
}