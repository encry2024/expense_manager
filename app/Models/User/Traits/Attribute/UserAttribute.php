<?php


namespace App\Models\User\Traits\Attribute;


trait UserAttribute
{
    public function getNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }
}