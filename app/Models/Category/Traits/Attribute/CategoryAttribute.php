<?php


namespace App\Models\Category\Traits\Attribute;


trait CategoryAttribute
{
    public function getFormattedCreatedAtAttribute()
    {
        return date('F d, Y h:i A', strtotime($this->created_at));
    }
}