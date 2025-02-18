<?php

namespace App\Observers;

use App\Models\Contact;
use App\Notifications\NewContactMessageNotification;
use Illuminate\Support\Facades\Notification;

class MessageObserver
{
    /**
     * Handle the Contact "created" event.
     */
    public function created(Contact $contact): void
    {
        //
        Notification::route('mail', 'mphatsomlenga1@gmail.com')
            ->notify(new NewContactMessageNotification($contact));
    }

    /**
     * Handle the Contact "updated" event.
     */
    public function updated(Contact $contact): void
    {
        //
    }

    /**
     * Handle the Contact "deleted" event.
     */
    public function deleted(Contact $contact): void
    {
        //
    }

    /**
     * Handle the Contact "restored" event.
     */
    public function restored(Contact $contact): void
    {
        //
    }

    /**
     * Handle the Contact "force deleted" event.
     */
    public function forceDeleted(Contact $contact): void
    {
        //
    }
}
