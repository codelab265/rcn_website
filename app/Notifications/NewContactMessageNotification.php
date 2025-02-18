<?php

namespace App\Notifications;

use App\Models\Contact;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewContactMessageNotification extends Notification
{
    public function __construct(
        protected Contact $contact
    ) {}

    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('New Contact Message from ' . $this->contact->name)
            ->greeting('Hello!')
            ->line('You have received a new contact message from ' . $this->contact->name)
            ->line('Email: ' . $this->contact->email)
            ->line('Message:')
            ->line($this->contact->message)
            ->action('View in Admin Panel', url('/admin/contacts'))
            ->line('You can reply directly to this email to respond to ' . $this->contact->name)
            ->replyTo($this->contact->email, $this->contact->name);
    }
}
