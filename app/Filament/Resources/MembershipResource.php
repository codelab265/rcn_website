<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MembershipResource\Pages;
use App\Filament\Resources\MembershipResource\RelationManagers;
use App\Models\Membership;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists\Components\TextEntry;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MembershipResource extends Resource
{
    protected static ?string $model = Membership::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('phone_number')
                    ->label('Phone Number')
                    ->searchable(),
                Tables\Columns\TextColumn::make('communication_mode')
                    ->label('Communication Mode')
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Action::make("other Details")->infolist([
                    TextEntry::make('city'),
                    TextEntry::make('postal_code')
                        ->label('Postal Code'),

                    TextEntry::make('whatsapp')
                        ->label('Join Whatsapp Platform'),
                    TextEntry::make('agreement')
                        ->label('agree to opt into RCN London
                    communication and announcements'),
                ])->modalSubmitAction(""),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    /*  Tables\Actions\DeleteBulkAction::make(), */]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageMemberships::route('/'),
        ];
    }
}
