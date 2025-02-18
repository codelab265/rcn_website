<?php

namespace App\Notifications;

use App\Models\Membership;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewMembershipNotification extends Notification
{
    public function __construct(
        protected Membership $membership
    ) {}

    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('New Membership Application from ' . $this->membership->name)
            ->greeting('Hello!')
            ->line('You have received a new membership application from ' . $this->membership->name)
            ->line('Email: ' . $this->membership->email)
            ->line('Phone: ' . $this->membership->phone_number)
            ->line('Address: ' . $this->membership->address)
            ->line('City: ' . $this->membership->city)
            ->line('Postal Code: ' . $this->membership->postal_code)
            ->line('Communication Mode: ' . $this->membership->communication_mode)
            ->action('View in Admin Panel', url('/admin/memberships'))
            ->line('You can reply directly to this email to contact ' . $this->membership->name)
            ->replyTo($this->membership->email, $this->membership->name);
    }
}
