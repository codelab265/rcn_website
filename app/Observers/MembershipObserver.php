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
        Notification::route('mail', 'mphatsomlenga1@gmail.com')
            ->notify(new NewMembershipNotification($membership));
    }
}
