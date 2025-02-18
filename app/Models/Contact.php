<?php

namespace App\Models;

use App\Notifications\ContactReplyNotification;
use App\Observers\MessageObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Notification;


#[ObservedBy(MessageObserver::class)]
class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'message',
        'is_read',
        'replied_at',
    ];

    protected $casts = [
        'is_read' => 'boolean',
        'replied_at' => 'datetime',
    ];

    public function sendReply(string $replyMessage): void
    {
        Notification::route('mail', $this->email)
            ->notify(new ContactReplyNotification($this, $replyMessage));

        $this->update([
            'replied_at' => now(),
            'is_read' => true,
        ]);
    }
}
