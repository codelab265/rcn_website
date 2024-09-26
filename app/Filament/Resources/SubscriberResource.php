<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SubscriberResource\Pages;
use App\Filament\Resources\SubscriberResource\RelationManagers;
use App\Models\Subscriber;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SubscriberResource extends Resource
{
    protected static ?string $model = Subscriber::class;

    protected static ?string $navigationIcon = 'heroicon-o-at-symbol';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('email'),
                TextColumn::make('is_subscribed')
                    ->label('Subscribed')
                    ->formatStateUsing(fn($record) => $record->is_subscribed ? 'Yes' : 'No')
                    ->color(fn($record) => $record->is_subscribed ? 'success' : 'danger'),
                TextColumn::make('created_at')
                    ->label('Subscribed On')
                    ->date()
                    ->formatStateUsing(fn($state) => $state ? $state->diffForHumans() : null),
            ])
            ->filters([
                //
            ])
            ->actions([
                /* Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(), */])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    /* Tables\Actions\DeleteBulkAction::make(), */]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageSubscribers::route('/'),
        ];
    }
}
