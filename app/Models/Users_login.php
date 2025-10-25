<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Users_login extends Model
{
    //
    use HasFactory;
    protected $table = 'users_logins';
    protected $fillable = [
        'email',
        'password',
    ];
}
