<?php

namespace App\Notifications;

use App\Models\Partnership;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewPartnershipNotification extends Notification
{
    public function __construct(
        protected Partnership $partnership
    ) {}

    public function via($notifiable): array
    {
        return ['mail'];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('New Partnership Application from ' . $this->partnership->name)
            ->greeting('Hello!')
            ->line('You have received a new partnership application from ' . $this->partnership->name)
            ->line('Email: ' . $this->partnership->email)
            ->line('Phone: ' . $this->partnership->phone_number)
            ->line('Address: ' . $this->partnership->address)
            ->line('City: ' . $this->partnership->city)
            ->line('Country: ' . $this->partnership->country)
            ->line('Form of Partnership: ' . $this->partnership->form_of_partnership)
            ->line('Amount: ' . $this->partnership->amount . ' ' . strtoupper($this->partnership->currency))
            ->line('Partnership Frequency: ' . $this->partnership->partnership_frequency)
            ->line('Month of Commencement: ' . $this->partnership->month_of_commencement)
            ->line('Communication Mode: ' . $this->partnership->communication_mode)
            ->action('View in Admin Panel', url('/admin/partnerships'))
            ->line('You can reply directly to this email to contact ' . $this->partnership->name)
            ->replyTo($this->partnership->email, $this->partnership->name);
    }
}
