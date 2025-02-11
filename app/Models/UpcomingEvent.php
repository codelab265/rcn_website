<?php

namespace App\Models;

use App\Observers\UpcomingEventObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[ObservedBy(UpcomingEventObserver::class)]
class UpcomingEvent extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
}
