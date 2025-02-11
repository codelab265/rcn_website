<?php

namespace App\Filament\Widgets;

use App\Models\Subscriber;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class SubscriberChart extends ChartWidget
{
    protected static ?string $heading = 'Subsribers';


    protected function getData(): array
    {
        $data = Trend::model(Subscriber::class)
            ->between(
                start: now()->startOfYear(),
                end: now()->endOfYear(),
            )
            ->perMonth()
            ->count();

        return [
            'datasets' => [
                [
                    'label' => 'Subscriber',
                    'data' => $data->map(fn(TrendValue $value) => $value->aggregate),
                ],
            ],
            'labels' => $data->map(fn(TrendValue $value) => date('M', strtotime($value->date)))->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
