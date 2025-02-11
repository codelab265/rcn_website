<?php

namespace App\Observers;

use App\Models\UpcomingEvent;
use Illuminate\Support\Facades\Storage;

class UpcomingEventObserver
{
    /**
     * Handle the UpcomingEvent "created" event.
     */
    public function created(UpcomingEvent $upcomingEvent): void
    {
        //
    }

    /**
     * Handle the UpcomingEvent "updated" event.
     */
    public function updated(UpcomingEvent $upcomingEvent): void
    {
        if ($upcomingEvent->active) {

            UpcomingEvent::query()->whereNot('id', $upcomingEvent->id)->update([
                'active' => false
            ]);
        }
    }

    /**
     * Handle the UpcomingEvent "deleted" event.
     */
    public function deleted(UpcomingEvent $upcomingEvent): void
    {

        Storage::delete($upcomingEvent->image);
    }

    /**
     * Handle the UpcomingEvent "restored" event.
     */
    public function restored(UpcomingEvent $upcomingEvent): void
    {
        //
    }

    /**
     * Handle the UpcomingEvent "force deleted" event.
     */
    public function forceDeleted(UpcomingEvent $upcomingEvent): void
    {
        //
    }
}
