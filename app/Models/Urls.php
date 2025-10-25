<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Urls extends Model
{
    /** @use HasFactory<\Database\Factories\UrlsFactory> */
    use HasFactory;
    protected $table = 'urls';

    public static function genShortlink()
    {
        return substr(md5(uniqid(rand(), true)), 0, 10);
    }

    protected $fillable = [
        'user_id',
        'user_name',
        'original_url',
        'short_code_url',
        'status_url'
    ];
}
