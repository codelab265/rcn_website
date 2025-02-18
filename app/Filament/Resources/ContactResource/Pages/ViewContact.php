<?php

use Filament\Actions\Action;
use Filament\Forms;
use Illuminate\Support\Facades\Notification;

/* public function getActions(): array
{
return [
Action::make('reply')
->form([
Forms\Components\Textarea::make('reply')
->label('Reply Message')
->required(),
])
->action(function (array $data) {
$this->record->sendReply($data['reply']);
Notification::success('Reply sent successfully');
}),
];
} */