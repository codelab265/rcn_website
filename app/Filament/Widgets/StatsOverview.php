<?php

namespace App\Filament\Widgets;

use App\Models\Contact;
use App\Models\Membership;
use App\Models\Partnership;
use App\Models\Subscriber;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('This Week Subscribers', Subscriber::query()->where('created_at', '>=', now()->subWeek())->count()),
            Stat::make('This Week Contacts', Contact::query()->where('created_at', '>=', now()->subWeek())->count()),
            Stat::make('Members', Membership::query()->count()),
            Stat::make('Partners', Partnership::query()->count()),
        ];
    }
}
