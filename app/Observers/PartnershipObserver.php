<?php

namespace App\Observers;

use App\Models\Partnership;
use App\Notifications\NewPartnershipNotification;
use Illuminate\Support\Facades\Notification;

class PartnershipObserver
{
    public function created(Partnership $partnership): void
    {
        // Send notification to admin
        Notification::route('mail', 'mphatsomlenga1@gmail.com')
            ->notify(new NewPartnershipNotification($partnership));
    }
}
