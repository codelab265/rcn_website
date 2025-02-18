<?php

namespace App\Models;

use App\Observers\PartnershipObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[ObservedBy(PartnershipObserver::class)]
class Partnership extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'form_of_partnership' => 'array'
    ];
}
