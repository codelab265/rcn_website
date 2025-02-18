<?php

namespace App\Observers;

use App\Models\Contact;
use App\Notifications\NewContactMessageNotification;
use Illuminate\Support\Facades\Notification;

class ContactObserver
{
    public function created(Contact $contact): void
    {
        Notification::route('mail', 'mphatsomlenga1@gmail.com')
            ->notify(new NewContactMessageNotification($contact));
    }
}
