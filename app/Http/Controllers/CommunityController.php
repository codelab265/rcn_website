<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Http\Resources\GalleryResource;
use App\Http\Resources\NewsResource;
use App\Models\Event;
use App\Models\Gallery;
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

    public function sermons()
    {
        return Inertia::render('community/Sermons', $this->data);
    }

    public function podcast()
    {
        return Inertia::render('community/Podcasts', $this->data);
    }
    public function gallery()
    {
        $this->galleries = GalleryResource::collection(Gallery::query()->latest()->simplePaginate(2));
        return Inertia::render('community/Gallery', $this->data);
    }
}
