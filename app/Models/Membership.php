<?php

namespace App\Models;

use App\Observers\MembershipObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[ObservedBy(MembershipObserver::class)]
class Membership extends Model
{
    use HasFactory;

    protected $guarded = [];
}
