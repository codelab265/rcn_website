<?php

namespace App\Observers;

use App\Models\Membership;
use App\Notifications\NewMembershipNotification;
use Illuminate\Support\Facades\Notification;

class MembershipObserver
{
    public function created(Membership $membership): void
    {
        // Send notification to admin
        Notification::route('mail', config('mail.admin_email', env('ADMIN_EMAIL')))
            ->notify(new NewMembershipNotification($membership));
    }
}
