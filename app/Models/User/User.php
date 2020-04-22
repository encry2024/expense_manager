<?php

namespace App\Models\User;

use App\Models\User\Traits\Attribute\UserAttribute;
use App\Models\User\Traits\Method\UserMethod;
use App\Models\User\Traits\Relationship\UserRelationship;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasRoles,
        Notifiable,
        UserRelationship,
        UserAttribute,
        UserMethod,
        SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['name', 'formatted_created_at'];
}
