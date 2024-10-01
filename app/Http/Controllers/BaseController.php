<?php

namespace App\Http\Controllers;

use App\Http\Resources\UpcomingEventResource;
use App\Models\Programme;
use App\Models\UpcomingEvent;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function __construct()
    {
        $event = UpcomingEvent::latest()->first();
        $this->upcomingEvent = $event ? new UpcomingEventResource($event) : null;
        $this->programmes = Programme::all();
    }
}
