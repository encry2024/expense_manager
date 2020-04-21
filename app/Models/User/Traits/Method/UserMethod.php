<?php


namespace App\Models\User\Traits\Method;


trait UserMethod
{
    public function isAdmin()
    {
        return $this->hasRole('administrator');
    }
}