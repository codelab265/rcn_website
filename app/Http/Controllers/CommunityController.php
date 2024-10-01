<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Http\Resources\NewsResource;
use App\Models\Event;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommunityController extends BaseController
{
    public function events()
    {
        $this->events = EventResource::collection(Event::query()->latest()->get());
        return Inertia::render('community/Events', $this->data);
    }

    public function news()
    {
        $this->news = NewsResource::collection(News::query()->latest()->get());
        return Inertia::render('community/News', $this->data);
    }
}
