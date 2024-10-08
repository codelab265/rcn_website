<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partnership extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'form_of_partnership' => 'array'
    ];
}
