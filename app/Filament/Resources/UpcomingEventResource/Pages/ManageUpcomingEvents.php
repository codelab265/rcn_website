<?php

namespace App\Filament\Resources\UpcomingEventResource\Pages;

use App\Filament\Resources\UpcomingEventResource;
use App\Models\UpcomingEvent;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManageUpcomingEvents extends ManageRecords
{
    protected static string $resource = UpcomingEventResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()
                ->using(function ($data) {
                    if ($data['active']) {
                        UpcomingEvent::query()->update([
                            'active' => false
                        ]);
                    }
                    UpcomingEvent::create($data);
                }),
        ];
    }
}
