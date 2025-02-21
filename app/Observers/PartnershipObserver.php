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
        Notification::route('mail', config('mail.admin_email', env('ADMIN_EMAIL')))
            ->notify(new NewPartnershipNotification($partnership));
    }
}
