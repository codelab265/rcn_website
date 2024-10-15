<?php

use App\Http\Controllers\CommunityController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [MainController::class, 'home'])->name('home');

Route::get('/about', [MainController::class, 'about'])->name('about');

Route::get('/store', [MainController::class, 'store'])->name('store');

Route::get('/programmes', [MainController::class, 'programmes'])->name('programmes');

Route::get('/contact', [MainController::class, 'contact'])->name('contact');

Route::post('/contact/store', [MainController::class, 'contactStore'])->name('contact.store');

Route::get('/partnership', [MainController::class, 'partnership'])->name('partnership');

Route::group(['prefix' => 'community', 'as' => 'community.'], function () {
    Route::get('/events', [CommunityController::class, 'events'])->name('events');
    Route::get('/sermons', [CommunityController::class, 'sermons'])->name('sermons');

    Route::get('/podcasts', [CommunityController::class, 'podcast'])->name('podcasts');
    Route::get('/news', [CommunityController::class, 'news'])->name('news');
    Route::get('/gallery', [CommunityController::class, 'gallery'])->name('gallery');
});

Route::get('/donate', function () {
    return Inertia::location('https://donate.stripe.com/3cs3cybNU6e7cbCeUU');
});

Route::post('/subscribe', [MainController::class, 'subscribe'])->name('subscribe');

Route::post('/unsubscribe', [MainController::class, 'unsubscribe'])->name('unsubscribe');

Route::post('/membership', [MainController::class, 'membership'])->name('membership');
Route::post('/partnership', [MainController::class, 'partnershipStore'])->name('partnership');
Route::get('/policy/{id}', [MainController::class, 'policy'])->name('policy');

Route::get('storage-link', function () {
    Artisan::call('storage:link');
});

Route::get('/migrate', function () {
    Artisan::call('migrate');
});
