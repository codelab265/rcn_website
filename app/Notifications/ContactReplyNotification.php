<?php

namespace App\Notifications;

use App\Models\Contact;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactReplyNotification extends Notification
{

    public function __construct(
        protected Contact $contact,
        protected string $replyMessage
    ) {}

    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Re: Your message to RCN Church')
            ->greeting('Hello ' . $this->contact->name . '!')
            ->line('Thank you for contacting us. Here is our response:')
            ->line($this->replyMessage)
            ->line('Original Message:')
            ->line($this->contact->message)
            ->line('If you have any further questions, feel free to reply to this email.');
    }
}
